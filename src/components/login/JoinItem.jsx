import { useState, useMemo } from 'react';
import { JoinItemStyle } from './style';

const JoinItem = () => {
    const [form, setForm] = useState({
        userId: '',
        password: '',
        password2: '',
    });

    const [touched, setTouched] = useState({
        userId: false,
        password: false,
        password2: false,
    });

    const validateUserId = (v) => {
        const re = /^(?=.{8,30}$)[A-Z](?=.*\d)[A-Za-z0-9]+$/;
        if (!v) return '아이디를 입력하세요.';
        if (!re.test(v)) {
            return '아이디는 첫 글자 대문자, 영문/숫자 조합 8~30자이며 숫자를 최소 1개 포함해야 합니다.';
        }
        return '';
    };

    const validatePassword = (v) => {
        if (!v) return '비밀번호를 입력하세요.';
        if (/\s/.test(v)) return '비밀번호에 공백은 허용되지 않습니다.';
        if (v.length < 8 || v.length > 16) return '비밀번호는 8~16자여야 합니다.';

        const hasUpper = /[A-Z]/.test(v);
        const hasLower = /[a-z]/.test(v);
        const hasDigit = /\d/.test(v);
        const hasSpecial = /[^A-Za-z0-9]/.test(v);
        const kinds = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;

        if (kinds < 3) {
            return '비밀번호는 대문자/소문자/숫자/특수문자 중 3가지 이상을 포함해야 합니다.';
        }
        return '';
    };

    const validatePassword2 = (v, p1) => {
        if (!v) return '비밀번호 확인을 입력하세요.';
        if (v !== p1) return '비밀번호가 일치하지 않습니다.';
        return '';
    };

    const errors = useMemo(() => {
        return {
            userId: validateUserId(form.userId),
            password: validatePassword(form.password),
            password2: validatePassword2(form.password2, form.password),
        };
    }, [form]);

    const isValid = useMemo(() => {
        return !errors.userId && !errors.password && !errors.password2;
    }, [errors]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setTouched({ userId: true, password: true, password2: true });

        if (!isValid) return;

        alert('가입 정보가 유효합니다. 제출 로직을 연결하세요.');
    };

    return (
        <JoinItemStyle>
            <div className="inner">
                <div className="section1">
                    <div className="toptxt">
                        <span>가입정보</span>
                        <div className="sub">
                            <p>*</p>
                            <p>표시는 반드시 입력하셔야 합니다</p>
                        </div>
                    </div>

                    <form
                        action="#"
                        method="post"
                        name="form"
                        className="form"
                        id="join-form"
                        onSubmit={onSubmit}
                        noValidate
                    >
                        <table className="table-wrap">
                            <colgroup>
                                <col className="w1" />
                                <col className="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="userId">
                                            아이디 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="userId"
                                            id="userId"
                                            placeholder="예) 영문/숫자 조합 8~30자, 첫 글자 대문자  ex)Rere0811"
                                            title="아이디를 입력하세요"
                                            value={form.userId}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            aria-invalid={touched.userId && !!errors.userId}
                                            required
                                        />
                                        {touched.userId && errors.userId && (
                                            <p className="error">{errors.userId}</p>
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="password">
                                            비밀번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="예) 8~16자, 대/소/숫/특 중 3가지 이상  ex)Rere0811@"
                                            title="비밀번호를 입력하세요"
                                            value={form.password}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            aria-invalid={touched.password && !!errors.password}
                                            required
                                        />
                                        {touched.password && errors.password && (
                                            <p className="error">{errors.password}</p>
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="password2">
                                            비밀번호 확인 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="password"
                                            name="password2"
                                            id="password2"
                                            placeholder="비밀번호를 한번 더 입력하세요"
                                            title="비밀번호 확인을 입력하세요"
                                            value={form.password2}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            aria-invalid={touched.password2 && !!errors.password2}
                                            required
                                        />
                                        {touched.password2 && errors.password2 && (
                                            <p className="error">{errors.password2}</p>
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="username1">
                                            이름 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username1"
                                            placeholder="ex) 이지은"
                                            title="이름을 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="emailLocal">
                                            이메일 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="emailLocal"
                                            id="emailLocal"
                                            placeholder="ex) rere0811"
                                            title="이메일을 입력하세요"
                                            required
                                        />
                                        @
                                        <select
                                            name="emailDomain"
                                            id="emailDomain"
                                            className="400"
                                            title="주소를 선택하세요"
                                            required
                                        >
                                            <option value="">========= 선 택 =========</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="google.com">google.com</option>
                                            <option value="nate.com">nate.com</option>
                                            <option value="icloud.com">icloud.com</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="telPrefix">
                                            전화번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <select
                                            name="telPrefix"
                                            id="telPrefix"
                                            className="400"
                                            title="번호를 선택하세요"
                                            required
                                        >
                                            <option value="">==== 선 택 ====</option>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="018">018</option>
                                            <option value="02">02</option>
                                            <option value="031">031</option>
                                            <option value="032">032</option>
                                            <option value="033">033</option>
                                            <option value="042">042</option>
                                            <option value="041">041</option>
                                            <option value="051">051</option>
                                            <option value="043">043</option>
                                            <option value="052">052</option>
                                            <option value="054">054</option>
                                            <option value="053">053</option>
                                            <option value="055">055</option>
                                            <option value="062">062</option>
                                            <option value="061">061</option>
                                            <option value="064">064</option>
                                            <option value="063">063</option>
                                        </select>

                                        <input
                                            type="text"
                                            name="telMid"
                                            id="telMid"
                                            placeholder="ex)1234"
                                            title="번호를 입력하세요"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="telEnd"
                                            id="telEnd"
                                            placeholder="ex)5678"
                                            title="번호를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="actions" style={{ marginTop: 20 }}>
                            <button type="submit" disabled={!isValid}>
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>

                <div className="section2">
                    <div className="bottomtxt">
                        <span>추가정보</span>
                    </div>
                    <form action="#" method="post" name="form" className="form">
                        <table className="table-wrap">
                            <colgroup>
                                <col className="w1" />
                                <col className="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>성별</label>
                                    </td>
                                    <td>
                                        <div className="gender">
                                            <p>
                                                <button type="button">남성</button>
                                            </p>
                                            <p>
                                                <button type="button">여성</button>
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>생년월일</label>
                                    </td>
                                    <td>
                                        <div className="birthday">
                                            <select
                                                name="year"
                                                id="year"
                                                className="200"
                                                title="년"
                                            >
                                                <option value="">년</option>
                                                <option value="2025">2025</option>
                                                <option value="2024">2024</option>
                                                <option value="1980">1980</option>
                                            </select>
                                            <span>년</span>

                                            <select
                                                name="month"
                                                id="month2"
                                                className="200"
                                                title="월"
                                            >
                                                <option value="">월</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                                    (m) => (
                                                        <option key={m} value={m}>
                                                            {m}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <span>월</span>

                                            <select
                                                name="date"
                                                id="date"
                                                className="200"
                                                title="일"
                                            >
                                                <option value="">일</option>
                                                {Array.from({ length: 31 }, (_, i) => i + 1).map(
                                                    (d) => (
                                                        <option key={d} value={d}>
                                                            {d}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <span>일</span>
                                        </div>
                                        <p>
                                            <button type="button">양력</button>
                                        </p>
                                        <p>
                                            <button type="button">음력</button>
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="addr1">주소</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="addr1"
                                            id="addr1"
                                            placeholder="ex)서울시 강남구 삼성동 "
                                            title="주소를 입력하세요"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="addr2"
                                            id="addr2"
                                            placeholder="상세주소를 입력하세요   ex)123-4번길 1층 "
                                            title="상세주소를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="recommendid">추천인 아이디</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="추천인 아이디를 입력하세요   ex)ezen1234"
                                            name="recommendid"
                                            id="recommendid"
                                            className="w410"
                                            title="추천인 아이디를 입력하세요"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </JoinItemStyle>
    );
};

export default JoinItem;
