import { useRef, useState } from 'react';
import { GiftTutorialWrap } from './style';

const GiftTutorial = () => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const tutorialRef = useRef(null);
    const toggleOpen = () => {
        if (open) {
            setHeight(`${tutorialRef.current.scrollHeight}px`);
            requestAnimationFrame(() => {
                setHeight('0px');
            });
        } else {
            setHeight(`${tutorialRef.current.scrollHeight}px`);
        }
        setOpen(!open);
    };
    return (
        <GiftTutorialWrap>
            <div className="tutorial-btn">
                <button onClick={toggleOpen}>
                    선물하기 튜토리얼
                    <img src="/images/gift/about_arrow.png" alt="" />
                </button>
            </div>

            <div
                ref={tutorialRef}
                className={`tutorial-box ${open ? 'open' : ''}`}
                style={{
                    height,
                    overflow: 'hidden',
                    transition: 'height 0.5s ease',
                }}
                onTransitionEnd={() => {
                    if (open) {
                        setHeight('auto');
                    }
                }}
            >
                <h3>[투홈으로 마음 전하는 방법]</h3>
                <ul className="present">
                    <li>
                        <h4>선물 할때</h4>
                        <ul className="pretendard">
                            <li>
                                <span>Step 1</span>원하는 선물을 선택해 장바구니에 담습니다.
                            </li>
                            <li>
                                <span>Step 2</span>선물 받는 분의 정보와 선물 메시지를
                                입력합니다.(여러명에게 보낼 수 있습니다.)
                            </li>
                            <li>
                                <span>Step 3</span>선물을 결제하면 주문이 정상적으로 접수됩니다.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>선물 받을때</h4>
                        <ul className="pretendard">
                            <li>
                                <span>Step 4</span>선물 받는 분에게 수락 메시지가 발송됩니다.
                            </li>
                            <li>
                                <span>Step 5</span>선물을 수락한 뒤 본인확인을 위해 연락처를
                                입력합니다.
                            </li>
                            <li>
                                <span>Step 6</span>선물을 받고 싶은 주소를 입력하고 선물을
                                기다립니다.(배송일 1~3일 소요)
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="tutorial-dsc">
                    <p>
                        선물 배송일은 받는 분이 선물을 수락한 뒤 배송지를 입력한 날로부터 1~3일 정도
                        소요됩니다.
                    </p>
                    <p>
                        선물 메시지를 받은 뒤 3일 동안 수락하지 않으시면 받은 선물은 자동
                        취소처리됩니다.
                    </p>
                    <p>취소/교환/반품 및 환불은 선물을 보낸 분을 통해서 문의하실 수 있습니다.</p>
                    <p>
                        선물배송 조회는 [마이페이지&gt;나의활동&gt;받은선물조회]에서 확인하실 수
                        있습니다.(주문번호, 이름, 휴대폰 번호 입력 필수)
                    </p>
                </div>
            </div>
        </GiftTutorialWrap>
    );
};

export default GiftTutorial;
