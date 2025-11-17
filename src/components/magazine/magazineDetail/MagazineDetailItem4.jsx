import { MagazineDetailItem4Style } from './style';
import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stepsData = [
    {
        id: 1,
        img: '/images/magazine/step1.png',
        title: 'Step1',
        desc: '감자는 되도록 작은 알로 9~10알 준비하여 껍질째 깨끗이 씻어주세요.',
        tip: '젓가락으로 감자를 찔러서 저항감 없이 푹 들어가면 익었다는 표시예요.',
    },
    {
        id: 2,
        img: '/images/magazine/step2.png',
        title: 'Step2',
        desc: '냄비에 찬물과 굵은 소금을 넣고 물을 끓여줍니다. 물이 끓으면 감자를 넣고 17~18분 삶아주세요.',
    },
    {
        id: 3,
        img: '/images/magazine/step3.png',
        title: 'Step3',
        desc: '에어프라이어 트레이에 올리브오일을 바르고, 일정한 간격으로 올려 둔 삶은 감자를 감자메셔나 컵을 이용해 지그시 눌러 으깨주세요.',
    },
    {
        id: 4,
        img: '/images/magazine/step4.png',
        title: 'Step4',
        desc: '으깬 감자 위에 올리브오일·구운소금·후추로 시즈닝합니다. 에어프라이어가 180~200℃로 예열되면 15분동안 구워주세요.',
    },
    {
        id: 5,
        img: '/images/magazine/step5.png',
        title: 'Step5',
        desc: '다시 꺼낸 뒤 에어프라이어를 온도 170℃로 낮추고, 감자를 뒤집어 올리브오일·구운소금·후추·파슬리· 파르미지아노 치즈를 조금씩 올립니다. 그리고 15분 더 구워주세요.',
    },
    {
        id: 6,
        img: '/images/magazine/step6.png',
        title: 'Step6',
        desc: '접시에 완성된 으깬 감자 구이를 놓고, 요거트와 송송 썬 쪽파를 살짝 올려주세요. 레몬을 함께 곁을이면 상큼하게 즐길 수 있어요.',
        tip: '기호에 따라 페퍼론치노 또는 크러시드 레드페퍼로 매운맛을 더해보세요.',
    },
];

gsap.registerPlugin(ScrollTrigger);
const isMobile = () => (typeof window !== 'undefined' ? window.innerWidth <= 600 : false);
const MagazineDetailItem4 = ({ onPrev, onNext }) => {
    const imgRefs = useRef([]);
    const mainTxtRef = useRef(null);
    imgRefs.current = [];
    const addToRefs = (el) => {
        if (el && !imgRefs.current.includes(el)) imgRefs.current.push(el);
    };

    const [currentIdx, setCurrentIdx] = useState(0);
    const total = stepsData.length;
    const [mobile, setMobile] = useState(isMobile());
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 600px)');
        const onChange = (e) => setMobile(e.matches);
        setMobile(mq.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        if (mobile) setCurrentIdx(0);
    }, [mobile]);
    const go = (nextIdx) => {
        const items = document.querySelectorAll('.steps-wrap .steps');
        const prev = items[currentIdx];
        const next = items[nextIdx];
        if (prev && next) {
            gsap.to(prev, {
                opacity: 0,
                x: -10,
                duration: 0.18,
                onComplete: () => {
                    setCurrentIdx(nextIdx);
                    gsap.fromTo(next, { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.18 });
                },
            });
        } else {
            setCurrentIdx(nextIdx);
        }
    };
    const goPrev = () => go((currentIdx - 1 + total) % total);
    const goNext = () => go((currentIdx + 1) % total);

    useEffect(() => {
        if (mobile) {
            if (mainTxtRef.current) {
                gsap.set(mainTxtRef.current, { opacity: 1, y: 0, scale: 1 });
            }
            const items = document.querySelectorAll('.steps-wrap .steps');
            items.forEach((el, i) => {
                gsap.set(el, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 10 });
            });
            return;
        }

        const ctx = gsap.context(() => {
            if (mainTxtRef.current) {
                gsap.fromTo(
                    mainTxtRef.current,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: mainTxtRef.current,
                            start: 'top 80%',
                            end: 'top 60%',
                            scrub: 0.3,
                        },
                    }
                );
            }

            imgRefs.current.forEach((el, index) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%',
                            end: 'top 60%',
                            scrub: 0.3,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, [mobile]);

    return (
        <MagazineDetailItem4Style className="mag-item4">
            <div className="mobile-btn-wrap">
                <button onClick={onPrev}>오늘의 재료</button>
                <button onClick={onNext}>상품담기</button>
            </div>
            <h2 className="mag-title">
                <span>으깬감자구이</span>
                조리방법
            </h2>
            <div className="icons" ref={mainTxtRef}>
                <div className="icons-img-wrap icons-img-wrap1">
                    <img src="/images/magazine/recipe1.png" alt="" />
                    <strong>
                        난이도
                        <span>쉬움</span>
                    </strong>
                </div>
                <div className="icons-img-wrap icons-img-wrap2">
                    <img src="/images/magazine/recipe2.png" alt="" />
                    <strong>
                        조리시간
                        <span>1시간 이상</span>
                    </strong>
                </div>
                <div className="icons-img-wrap icons-img-wrap3">
                    <img src="/images/magazine/recipe3.png" alt="" />
                    <strong>
                        메인 식재료
                        <span>채소와 과일</span>
                    </strong>
                </div>
            </div>

            <div className="steps-wrap-mobile-btns">
                <button type="button" aria-label="이전 단계" onClick={goPrev}>
                    <img src="/images/icon/btn-prev1.png" alt="" />
                </button>
                <button type="button" aria-label="다음 단계" onClick={goNext}>
                    <img src="/images/icon/btn-next1.png" alt="" />
                </button>
            </div>
            <div className="steps-wrap">
                {stepsData.map((step, idx) => (
                    <div
                        key={step.id}
                        className={`steps steps${step.id}`}
                        ref={addToRefs}
                        data-active={idx === currentIdx}
                        aria-hidden={mobile ? idx !== currentIdx : false}
                    >
                        <div className="img-wrap">
                            <img src={step.img} alt={step.title} />
                        </div>
                        <div className="txt ">
                            <h2>{step.title}</h2>
                            <p className="pretendard">{step.desc}</p>
                            {step.tip && (
                                <em className="pretendard">
                                    <span>TIP</span>
                                    {step.tip}
                                </em>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </MagazineDetailItem4Style>
    );
};

export default MagazineDetailItem4;
