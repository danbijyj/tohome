import { BannerWrap } from './style';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const VisualItem1 = ({ visual, isActive }) => {
    const { title, des, des2, img, imgs, position } = visual;

    const imgRefs = useRef([]);
    imgRefs.current = [];

    const addToRefs = (el) => {
        if (el && !imgRefs.current.includes(el)) {
            imgRefs.current.push(el);
        }
    };

    const txtRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            imgRefs.current.forEach((el, index) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: 'power3.out',
                    }
                );
            });

            gsap.fromTo(
                txtRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out',
                }
            );
        } else {
            gsap.set([...imgRefs.current, txtRef.current], {
                opacity: 0,
                y: 0,
            });
        }
    }, [isActive]);

    return (
        <BannerWrap $position={position} className="visual-con1">
            <div className="img-box">
                {imgs ? (
                    imgs.map((obj, idx) => (
                        <img src={obj.src} alt={`${title}-${idx}`} key={idx} ref={addToRefs} />
                    ))
                ) : (
                    <img src={img} alt={title} ref={addToRefs} />
                )}
            </div>
            <div className="txt-box" ref={txtRef}>
                <h3>
                    {title.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h3>
                <p className="pretendard fw400">
                    {des.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                <p className="mobileOnly">{des2}</p>
                <div className="more">더보기</div>
            </div>
        </BannerWrap>
    );
};

export default VisualItem1;
