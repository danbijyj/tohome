import { GiftPointWrap } from './style';

const GiftPoint = () => {
    return (
        <GiftPointWrap>
            <ul className="gift-point-text">
                <li>
                    <h3>
                        <span>Point 1</span> 나만의 선물 큐레이션
                    </h3>
                    <p>
                        투홈에서는 여러 개의 상품을 한 상자에 담아 선물할 수
                        있습니다. <br />
                        집들이부터 출산 선물까지 처음부터 끝까지 챙겨주고 싶은
                        마음을 한가득 담아보세요.
                    </p>
                </li>
                <li>
                    <h3>
                        <span>Point 2</span> 연락처만 알아도 산타가 될 수 있어
                    </h3>
                    <p>
                        직접 만날 수 없는 상황에도 진심은 오롯이 전해져야 하죠.
                        <br />
                        주소를 몰라도 연락처만 입력하면 선물을 집 앞까지
                        전달해드립니다.
                    </p>
                </li>
            </ul>
            <ul className="gift-point-text">
                <li>
                    <h3>
                        <span>Point 3</span> 여러 친구에게 선물 보내기
                    </h3>
                    <p>
                        명절, 진급한 날, 이유 없이 한 턱 쏘고 싶을때!
                        <br />
                        고마운 분이 많을수록 감사 인사는 투홈으로 센스있게
                        전해보세요.
                    </p>
                </li>
                <li>
                    <h3>
                        <span>Point 4</span> 진심을 표현해요
                    </h3>
                    <p>
                        마음을 담은 메시지도 담백하게 전해보세요.
                        <br />
                        상황에 맞는 문구를 고르거나, 직접 메시지를 작성할 수도
                        있습니다.
                    </p>
                </li>
            </ul>
        </GiftPointWrap>
    );
};

export default GiftPoint;
