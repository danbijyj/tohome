import GiftSnackList from './GiftSnackList';
import { GiftSnackWrap } from './style';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useRef } from 'react';

const GiftSnack = () => {
    const sliderRef = useRef(null);
    return (
        <GiftSnackWrap>
            <div className="gift-snack-title">
                <h2>아이들을 위한 달콤한 간식</h2>
                <p>
                    <button onClick={() => sliderRef.current?.prev()}>
                        <SlArrowLeft />
                    </button>
                    <button onClick={() => sliderRef.current?.next()}>
                        <SlArrowRight />
                    </button>
                </p>
            </div>
            <GiftSnackList ref={sliderRef} />
        </GiftSnackWrap>
    );
};

export default GiftSnack;
