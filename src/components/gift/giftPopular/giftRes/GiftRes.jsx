import GiftResList from './GiftResList';
import { GiftResWrap } from './style';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useRef } from 'react';

const GiftRes = () => {
    const sliderRef = useRef(null);
    return (
        <GiftResWrap>
            <div className="gift-rest-title">
                <h2>전국의 맛집을 모아</h2>
                <p>
                    <button onClick={() => sliderRef.current?.prev()}>
                        <SlArrowLeft />
                    </button>
                    <button onClick={() => sliderRef.current?.next()}>
                        <SlArrowRight />
                    </button>
                </p>
            </div>
            <GiftResList ref={sliderRef} />
        </GiftResWrap>
    );
};

export default GiftRes;
