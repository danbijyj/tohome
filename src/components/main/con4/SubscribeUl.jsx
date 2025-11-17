import { useSelector } from 'react-redux';
import SubscribeLi from './SubscribeLi';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
import { SubscribeUlStyle } from './style';

const SubscribeUl = () => {
    const { sideDishes } = useSelector((state) => state.cart);

    return (
        <SubscribeUlStyle>
            <Swiper
                slidesPerView={5}
                centeredSlides={false}
                spaceBetween={100}
                loop={true}
                freeMode={{ enabled: false }}
                autoplay={{
                    delay: 400,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                slidesOffsetBefore={50}
                slidesOffsetAfter={0}
                speed={2000}
                slidesPerGroup={1}
                modules={[FreeMode, Autoplay]}
            >
                {sideDishes.map((dishes) => (
                    <SwiperSlide key={dishes.sideId}>
                        <SubscribeLi dishes={dishes} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SubscribeUlStyle>
    );
};

export default SubscribeUl;
