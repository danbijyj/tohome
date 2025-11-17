import { BrandInfoStyle } from './style';

const Brand1Myeong = () => {
    return (
        <BrandInfoStyle>
            <div className="brand brand1">
                <div className="title">
                    <h2>명인명촌</h2>
                    <i className="line"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>명인명촌 이야기</p>
                            </th>
                            <th className="pretendard fw400">
                                산과 바다의 맛은 계절마다 달라지고,
                                <br />
                                방방곡곡 이어지는 마을의 수만큼 무한한 이야기를
                                품은 식문화가 있습니다.
                                <br />
                                하늘의 때, 땅의 기운, 사람의 마음을 함께 살피며
                                명인명촌은 우리 음식의 고유한 원형을 식탁에
                                전합니다.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>이야기가 있는 숨겨진 보물</p>
                            </td>
                            <td className="pretendard fw400">
                                ‘이야기가 있는 숨겨진 보물’ 은 하늘의 때, 땅의
                                기운 그리고 사람의 마음을 살필 줄 압니다.
                                <br />
                                열매를 보면서 줄기와 뿌리와 흙을 살피고 봄부터
                                피어난 꽃을 생각하고 나비와 벌의 수고를
                                기억합니다.
                                <br />
                                더불어 살아가는 생명체에 대한 건강한 생태계를
                                중요하게 생각합니다.
                                <br />
                                그리고 생산자와 소비자의 건강한 삶의 가치를
                                추구합니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <img src="images/specialbrand/brand1.jpg" alt="명인명촌" />
            </div>
        </BrandInfoStyle>
    );
};

export default Brand1Myeong;
