import { GiftSnackListWrap } from './style';
import GiftSnackItem from './GiftSnackItem';
import { useSelector } from 'react-redux';
import { selectSnack } from '../../../../store/modules/cartSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const GiftSnackList = forwardRef((props, ref) => {
    const snack = useSelector(selectSnack);
    const sliderRef = useRef(null);
    useImperativeHandle(ref, () => ({
        next: () => sliderRef.current.slickNext(),
        prev: () => sliderRef.current.slickPrev(),
    }));
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
    };
    return (
        <GiftSnackListWrap>
            <Slider ref={sliderRef} {...settings}>
                {snack.map((snc) => (
                    <GiftSnackItem key={snc.giftId ?? snc.num} snc={snc} />
                ))}
            </Slider>
        </GiftSnackListWrap>
    );
});

export default GiftSnackList;
