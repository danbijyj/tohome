import GiftBestList from './GiftBestList';
import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { GiftBestWrap } from './style';

const GiftBest = () => {
    const sliderRef = useRef(null);
    return (
        <GiftBestWrap>
            <section>
                <div className="head">
                    <h2>HOT BEST 10</h2>{' '}
                    <div className="arrow-wrap">
                        <button onClick={() => sliderRef.current?.slickPrev()}>
                            <SlArrowLeft />
                        </button>
                        <button onClick={() => sliderRef.current?.slickNext()}>
                            <SlArrowRight />
                        </button>
                    </div>
                </div>
                <GiftBestList sliderRef={sliderRef} />
            </section>
        </GiftBestWrap>
    );
};

export default GiftBest;
