import { BrandInfoStyle } from './style';

const Brand3Yehyang = () => {
    return (
        <BrandInfoStyle>
            <div className="brand brand3">
                <div className="title">
                    <h2>예향</h2>
                    <i className="line"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>예향 이야기</p>
                            </th>
                            <th className="pretendard fw400">
                                하루 세 번, 식탁은 마음을 전하는 시간입니다.
                                <br />
                                예향은 사계절 식재료의 숨결과 손끝의 온기를 담아
                                잊고 지낸 집밥의 따뜻함을 다시 불러옵니다.
                                <br />
                                소박하지만 진심 어린 한 끼가 되어 바쁜 일상에
                                잠시 숨을 고르게 합니다.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                한 끼에 담긴 위로
                                <br />
                                <p>오래도록 기억될 집밥</p>
                            </td>
                            <td className="pretendard fw400">
                                예향은 압구정 현대백화점에서만 만날 수 있는 20년
                                전통의 반찬가게로,
                                <br />
                                깊이 있는 손맛과 정직한 조리를 고집해왔습니다.
                                <br />
                                간결한 레시피 속에 오랜 시간 쌓인 노하우를 담아
                                매일의 식탁 위에 조용한 감동을 전합니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <img src="images/specialbrand/brand3.jpg" alt="예향" />
            </div>
        </BrandInfoStyle>
    );
};

export default Brand3Yehyang;
