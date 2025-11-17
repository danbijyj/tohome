import { useSelector } from 'react-redux';
import { SideDishListStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
import SubscribeLi from '../main/con4/SubscribeLi';

const arr = [
    { id: 1, img: '이미지주소', title: '' },
    { id: 2, img: '이미지주소', title: '' },
    { id: 3, img: '이미지주소', title: '' },
    { id: 4, img: '이미지주소', title: '' },
];

const SideDishList = () => {
    const { sideDishes } = useSelector((state) => state.cart);
    return (
        <SideDishListStyle>
            <div className="title">
                <h2>8월 반찬 안내</h2>
            </div>
            <div className="items">
                <Swiper
                    slidesPerView={5.5}
                    spaceBetween={10}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={3000}
                    modules={[FreeMode, Autoplay]}
                >
                    {sideDishes.map((dishes) => (
                        <SwiperSlide key={dishes.sideId}>
                            <SubscribeLi dishes={dishes} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </SideDishListStyle>
    );
};

export default SideDishList;
