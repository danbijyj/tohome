import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState, useCallback } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';

const MainRecom = () => {
    const [time, setTime] = useState(3 * 60 * 60);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (time <= 0) return;
        const timer = setInterval(() => {
            setTime((prev) => prev - 3);
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);

    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h} : ${m} : ${s}`;
    };

    const goSlide = useCallback((idx) => {
        if (!swiperRef.current) return;
        swiperRef.current.slideToLoop(idx, 500);
        setActiveIndex(idx);
    }, []);

    const ClickableTxts = () => (
        <div className="txts">
            <p className={activeIndex === 0 ? 'on' : ''} onClick={() => goSlide(0)}>
                MD’s PICK
            </p>
            <p className={activeIndex === 1 ? 'on' : ''} onClick={() => goSlide(1)}>
                오늘의 타임특가
            </p>
            <p className={activeIndex === 2 ? 'on' : ''} onClick={() => goSlide(2)}>
                오늘의 브랜드
            </p>
        </div>
    );

    return (
        <>
            <h2 className=" main-title">추천상품</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                pagination={{ clickable: true }}
                loop={true}
                onSwiper={(sw) => (swiperRef.current = sw)}
            >
                <SwiperSlide>
                    <img className="back" src="/images/main/mainRecom1.png" alt="" />
                    <h3 className="sub-title">좋은 한끼를 위한 MD의 작은 제안</h3>
                    <section>
                        <div className="left">
                            <strong className="pretendard fw400">MD&apos;s PICK</strong>
                            <h2>[블랑제리코팡] 바삭한 치즈 스콘</h2>
                            <div className="txt pretendard fw300">
                                <p>일반적인 스콘과 다른 특이한 모양의 매력적인 스콘.</p>
                                <p>노르스름한 색감이 먹음직스럽고 치즈의 풍미까지</p>
                                <p>즐길 수 있어 기존 스콘보다 진한 맛을 원하는 이들에게</p>
                                <p>제격입니다.</p>
                            </div>
                            <button className="more">자세히보기</button>
                        </div>
                        <div className="right">
                            <div className="img-box">
                                <img src="/images/main/mainRecom1.png" alt="" />
                            </div>

                            <ClickableTxts />
                            <div className="title mobile">
                                <p>[블랑제리코팡] 바삭한 치즈 스콘</p>
                            </div>
                            <div className="price mobile">
                                <span>27,400원</span>
                                <p className="dicount">25%</p>
                                <p>20,550원</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <img className="back" src="/images/main/mainRecom2.png" alt="" />
                    <h3 className="sub-title">
                        오늘 이 시간, 더 가볍게 만나는 건강 간식
                        <span className="timer">
                            <MdOutlineWatchLater />
                            {formatTime(time)}
                        </span>
                    </h3>
                    <section>
                        <div className="left">
                            <strong className="pretendard fw400">오늘의 타임특가</strong>
                            <h2>[modoo] 모두의 데일리 서리태 볶음콩 (33입/박스)</h2>
                            <div className="txt pretendard fw300">
                                <p>건강한 간식으로 사랑받는 서리태 볶음콩 선물세트를</p>
                                <p>오늘 하루, 특별한 가격에 준비했어요.</p>
                                <p>서리태를 기름 없이 바삭하게 볶아,</p>
                                <p>소금이나 설탕 없이도 깊은 고소함이 살아있습니다.</p>
                            </div>
                            <button className="more">자세히보기</button>
                        </div>
                        <div className="right">
                            <div className="img-box">
                                <img src="/images/main/mainRecom2.png" alt="" />
                            </div>

                            <div className="bottom mobile">
                                <span className="timer">
                                    <MdOutlineWatchLater />
                                    {formatTime(time)}
                                </span>
                            </div>
                            <ClickableTxts />
                            <div className="price mobile">
                                <span>29,000원</span>
                                <p className="dicount">32%</p>
                                <p>19,500원</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <img className="back" src="/images/main/mainRecom3.png" alt="" />
                    <h3 className="sub-title">
                        현대식품관이 먼저 담아본 브랜드, 좋은 식품은 좋은 브랜드에서 시작됩니다
                    </h3>
                    <section>
                        <div className="left">
                            <strong className="pretendard fw400">오늘의 브랜드</strong>
                            <h2>팻위치 Fat witch</h2>
                            <div className="txt pretendard fw300">
                                <p>뉴욕 첼시마켓에서 맛 볼 수 있던 팻위치 브라우니</p>
                                <p>매일 먹을 수 있는 건강한 브라우니를 추구하며</p>
                                <p>모두 수작업으로 생산하는 브랜드 입니다.</p>
                                <p>호불호 없는 선물을 원한다면 팻위치를 기억하세요!</p>
                            </div>
                            <button className="more">자세히보기</button>
                        </div>
                        <div className="right">
                            <div className="img-box">
                                <img src="/images/main/mainRecom3.png" alt="" />
                            </div>

                            <ClickableTxts />
                            <div className="title mobile">
                                <p>팻위치 Fat witch</p>
                                <span>뉴욕 감성을 담은 매일 즐길 수 있는 건강한 수제 브라우니</span>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default MainRecom;
