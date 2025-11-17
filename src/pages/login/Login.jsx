import { useEffect, useState } from 'react';
import { LoginStyle } from './style';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';

// === ENV ===
const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_REST_API_KEY; // REST API 키
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; // 로컬/배포 각각 .env.local / .env

// === PKCE utils ===
async function sha256(base) {
    const enc = new TextEncoder();
    const data = enc.encode(base);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return new Uint8Array(digest);
}
function b64url(buf) {
    let str = btoa(String.fromCharCode(...buf));
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+/g, '');
}
function randomString(len = 64) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const arr = crypto.getRandomValues(new Uint8Array(len));
    let s = '';
    for (let i = 0; i < len; i++) s += chars[arr[i] % chars.length];
    return s;
}

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [user, setUser] = useState({ userid: '', password: '' });
    const { userid, password } = user;
    const members = useSelector((s) => s.auth.members);

    // ===== 카카오 콜백 처리 (프론트 단독 PKCE) =====
    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');
        const state = url.searchParams.get('state');
        if (!code) return;

        (async () => {
            try {
                if (!KAKAO_CLIENT_ID) throw new Error('VITE_KAKAO_REST_API_KEY가 없습니다.');
                if (!KAKAO_REDIRECT_URI) throw new Error('VITE_KAKAO_REDIRECT_URI가 없습니다.');

                // state 검증
                const savedState = sessionStorage.getItem('kakao_oauth_state');
                if (savedState && state && savedState !== state) {
                    throw new Error('잘못된 인증 흐름입니다. 다시 시도해주세요.');
                }

                // code_verifier 조회
                const codeVerifier = sessionStorage.getItem('kakao_code_verifier');
                if (!codeVerifier) throw new Error('code_verifier가 없습니다.');

                // 토큰 교환 (프론트 → 카카오)
                const body = new URLSearchParams({
                    grant_type: 'authorization_code',
                    client_id: KAKAO_CLIENT_ID,
                    redirect_uri: KAKAO_REDIRECT_URI,
                    code,
                    code_verifier: codeVerifier,
                });

                const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
                    body: body.toString(),
                });
                const token = await tokenRes.json();
                console.log('[KAKAO] tokenRes', tokenRes.status, token);
                if (!tokenRes.ok || !token.access_token) {
                    throw new Error(token.error_description || token.error || '토큰 발급 실패');
                }

                // 사용자 정보 조회
                const meRes = await fetch('https://kapi.kakao.com/v2/user/me', {
                    headers: { Authorization: `Bearer ${token.access_token}` },
                });
                const me = await meRes.json();
                console.log('[KAKAO] meRes', meRes.status, me);
                if (!me?.id) throw new Error('사용자 정보 조회 실패');

                // 앱 로그인 처리 (리덕스 + 로컬스토리지) — name 보장
                localStorage.setItem('app_token', token.access_token);
                const kakaoUser = {
                    userid: `kakao_${me.id}`,
                    name: me.kakao_account?.profile?.nickname || `kakao_${me.id}`,
                    email: me.kakao_account?.email ?? null,
                    profile: me.kakao_account?.profile ?? null,
                };
                console.log('[KAKAO] dispatch user', kakaoUser);
                dispatch(
                    authActions.loginWithProvider?.(kakaoUser) ?? authActions.login(kakaoUser)
                );

                // URL 정리
                const cleanUrl = window.location.origin + window.location.pathname;
                window.history.replaceState({}, '', cleanUrl);

                // 리다이렉트
                const storedRedirect =
                    sessionStorage.getItem('redirectTo') || location.state?.redirectTo || '/';
                sessionStorage.removeItem('redirectTo');
                sessionStorage.removeItem('kakao_oauth_state');
                sessionStorage.removeItem('kakao_code_verifier');

                alert('로그인이 성공하셨습니다.');
                navigate(storedRedirect, { replace: true });
            } catch (err) {
                console.error(err);
                alert('카카오 로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');

                const cleanUrl = window.location.origin + window.location.pathname;
                window.history.replaceState({}, '', cleanUrl);
                navigate('/login', { replace: true });
            }
        })();
    }, [dispatch, navigate, location.state?.redirectTo]);

    // ===== 일반 로그인 =====
    const onSubmit = (e) => {
        e.preventDefault();
        if (!userid.trim() || !password.trim()) {
            alert('아이디 또는 비밀번호를 입력해주세요');
            return;
        }
        const ok = members.some((m) => m.userid === userid && m.password === password);
        if (!ok) {
            alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
            return;
        }
        dispatch(authActions.login({ userid, password }));
        const redirectTo = location.state?.redirectTo || '/';
        alert('로그인이 성공하셨습니다.');
        navigate(redirectTo, { replace: true });
    };

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    // ===== 카카오 인가요청 (PKCE + state + 계정선택 유도) =====
    const handleKakaoLogin = async () => {
        const desired = location.state?.redirectTo || '/';
        try {
            sessionStorage.setItem('redirectTo', desired);
        } catch {}

        // state 생성
        const state = Math.random().toString(36).slice(2);
        try {
            sessionStorage.setItem('kakao_oauth_state', state);
        } catch {}

        // PKCE: code_verifier & code_challenge
        const codeVerifier = randomString(64);
        try {
            sessionStorage.setItem('kakao_code_verifier', codeVerifier);
        } catch {}
        const hash = await sha256(codeVerifier);
        const codeChallenge = b64url(hash);

        const url =
            `https://kauth.kakao.com/oauth/authorize?response_type=code` +
            `&client_id=${encodeURIComponent(KAKAO_CLIENT_ID)}` +
            `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}` +
            `&code_challenge=${encodeURIComponent(codeChallenge)}` +
            `&code_challenge_method=S256` +
            `&prompt=login` + // 계정 선택/재로그인 유도
            `&state=${encodeURIComponent(state)}`;

        window.location.href = url;
    };

    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <div className="content">
                    <form className="left" onSubmit={onSubmit}>
                        <img src="/images/common/logo_tohome.png" alt="로고" />
                        <span>
                            안녕하세요, 현대식품관입니다.
                            <br />
                            로그인 후 다양한 혜택과 이벤트를 확인하세요.
                        </span>

                        <div className="txtbox-wrap">
                            <div className="txtbox id pretendard">
                                <i>
                                    <FaUser />
                                </i>
                                <input
                                    type="text"
                                    name="userid"
                                    placeholder="아이디:rere0811"
                                    value={userid}
                                    onChange={changeInput}
                                />
                            </div>

                            <div className="txtbox password pretendard">
                                <i>
                                    <RiLockPasswordLine />
                                </i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호:rere0811@"
                                    value={password}
                                    onChange={changeInput}
                                />
                            </div>
                        </div>

                        <p>비회원 주문 조회 / 아이디·비밀번호 찾기</p>

                        <div className="btns">
                            <button type="submit">로그인</button>
                            <button type="button" onClick={() => navigate('/join')}>
                                회원가입
                            </button>
                        </div>

                        <div className="bottom">
                            <div className="or">
                                <p>또는</p>
                                <i className="line"></i>
                            </div>

                            <div className="snsbox">
                                <button type="button">
                                    <img src="/images/login/google_logo.png" alt="구글" />
                                    Google로 로그인 하기
                                </button>

                                <button type="button" onClick={handleKakaoLogin}>
                                    <img src="/images/login/kakao_logo.png" alt="카카오톡" />
                                    카카오톡으로 로그인 하기
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="right"></div>
                    <img src="/images/login/login_image.jpg" alt="이미지1" />
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
