import { BrandInfoStyle } from './style';

const Brand4Market = () => {
    return (
        <BrandInfoStyle>
            <div className="brand brand4">
                <div className="title">
                    <h2>동행마켓</h2>
                    <i className="line"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>동행마켓 이야기</p>
                            </th>
                            <th className="pretendard fw400">
                                <p>
                                    지속가능한 미식을 위한 카테고리, 동행마켓
                                    <br />
                                    소비자와 판매자가, 오늘의 나와 미래의
                                    아이들이 함께하는 지속가능한 미식생활을
                                    추구합니다.
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>사람과 사람을 잇는 정직한 선택</p>
                            </td>
                            <td className="pretendard fw400">
                                동행마켓은 지역의 작지만 정직한 생산자들과
                                함께하는 가치 있는 선택입니다.
                                <br />
                                대량 생산이 아닌 손끝의 정성과 그 안에 담긴
                                마음과 이야기를 전합니다.
                                <br />
                                누구나 알지 못하지만 꼭 알아야 할, 진심 어린
                                브랜드들을 소개하고,
                                <br />더 좋은 내일을 위해 함께 걸어갈 수 있도록
                                소비자와 생산자를 잇는 건강한 연결고리가 되고자
                                합니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <img src="images/specialbrand/brand4.jpg" alt="예향" />
            </div>
        </BrandInfoStyle>
    );
};

export default Brand4Market;
