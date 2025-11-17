import { useState } from 'react';
import { MyPageLikesStyle } from './style';
import ProductItem from '../../components/product/ProductItem';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const MyPageLikes = () => {
    const [expanded, setExpanded] = useState(false);

    const userId = useSelector((s) => s.auth?.user?.id);
    const byUser = useSelector((s) => s.likes.byUser);
    const likedIds = (userId && byUser[userId]) || [];
    const all = useSelector((s) => s.cart.AllDataList);
    const items = all.filter((p) => likedIds.includes(Number(p.num)));

    const canLoop = items.length > 7;

    return (
        <MyPageLikesStyle>
            <div className="like">
                <div className="text">
                    <h2>좋아요</h2>
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                    >
                        <span>{expanded ? '접기' : '자세히보기'}</span>
                        <img src="images/icon/icon_all.png" alt="" />
                    </button>
                </div>

                <div className={`list ${expanded ? 'expanded' : ''}`}>
                    {items.length === 0 && <p className="empty">좋아요 한 상품이 없습니다.</p>}

                    {!expanded ? (
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={50}
                            freeMode={{ enabled: true, momentum: false }}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={5000}
                            loop={canLoop}
                            watchOverflow={true}
                            modules={[FreeMode]}
                        >
                            {items.map((p) => (
                                <SwiperSlide key={p.num}>
                                    <ProductItem
                                        product={p}
                                        showCheckbox={false}
                                        heartVariant="mypage"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="grid-list">
                            {items.map((p) => (
                                <div className="grid-cell" key={p.num}>
                                    <ProductItem
                                        product={p}
                                        showCheckbox={false}
                                        heartVariant="mypage"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MyPageLikesStyle>
    );
};

export default MyPageLikes;
