import { BrandInfoStyle } from './style';

const Brand2Table = () => {
    return (
        <BrandInfoStyle>
            <div className="brand brand2">
                <div className="title">
                    <h2>1TABLE</h2>
                    <i className="line"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>1TABLE 이야기</p>
                            </th>
                            <th className="pretendard fw400">
                                가장 맛있는 식사는, 매일의 식탁 위에서
                                만들어진다고 믿습니다.
                                <br />
                                1TABLE은 엄선한 식재료와 검증된 맛집 레시피,
                                양보없는 철학으로 간편함을 넘어
                                <br />
                                맛있고 건강한 식탁을 지향합니다.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>한 끼의 품격을 지키는 간편함</p>
                            </td>
                            <td className="pretendard fw400">
                                1 TABLE은 현대백화점이 선보이는 프리미엄 HMR
                                브랜드입니다.
                                <br />
                                전문 셰프의 손길과 유명 맛집의 노하우를 담아,
                                <br />
                                간편하지만 정갈한 식사를 원하는 고객을 위해
                                만들어졌습니다.
                                <br />
                                화식한우 곰탕, 봉우리 떡갈비 등 검증된 메뉴로
                                바쁜 일상 속에도 품격 있는 식사를 가능하게
                                합니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <img src="images/specialbrand/brand2.jpg" alt="1TABLE" />
            </div>
        </BrandInfoStyle>
    );
};

export default Brand2Table;
