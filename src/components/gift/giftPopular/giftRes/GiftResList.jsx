import { GiftResListWrap } from './style';
import GiftResItem from './GiftResItem';
import { useSelector } from 'react-redux';
import { selectRes } from '../../../../store/modules/cartSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const GiftResList = forwardRef((props, ref) => {
    const restaurant = useSelector(selectRes);
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
        <GiftResListWrap>
            <Slider ref={sliderRef} {...settings}>
                {restaurant.map((res) => (
                    <GiftResItem key={res.giftId ?? gift.num} res={res} />
                ))}
            </Slider>
        </GiftResListWrap>
    );
});

export default GiftResList;
