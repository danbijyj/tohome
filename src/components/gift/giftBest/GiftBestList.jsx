import { useSelector } from 'react-redux';
import GiftBestItem from './GiftBestItem';
import { GiftBestListWrap } from './style';
import { selectBest10 } from '../../../store/modules/cartSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GiftBestList = ({ sliderRef }) => {
    const best10 = useSelector(selectBest10);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        variableWidth: true,
        centerMode: false,
    };

    return (
        <GiftBestListWrap>
            <Slider ref={sliderRef} {...settings}>
                {best10.map((gift) => (
                    <GiftBestItem key={gift.giftId} gift={gift} />
                ))}
            </Slider>
        </GiftBestListWrap>
    );
};

export default GiftBestList;
