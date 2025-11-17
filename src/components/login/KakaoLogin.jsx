import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from '../../config';

export default function KakaoLoginButton() {
    const handleKakaoLogin = () => {
        const url =
            `https://kauth.kakao.com/oauth/authorize?response_type=code` +
            `&client_id=${encodeURIComponent(KAKAO_CLIENT_ID)}` +
            `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}`;
        window.location.href = url;
    };
    return (
        <button type="button" onClick={handleKakaoLogin}>
            <img src="/images/login/kakao_logo.png" alt="카카오톡" />
            카카오톡으로 로그인 하기
        </button>
    );
}
