import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MagazineListRight = ({ start, onToggle }) => {
    const meshpotatoRef = useRef(null);
    const rotateRefs = useRef([]);
    const parsleyRefs = useRef([]);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const h4Ref = useRef(null);
    const addRotateRef = (el) => {
        if (el && !rotateRefs.current.includes(el)) rotateRefs.current.push(el);
    };
    const addParsleyRef = (el) => {
        if (el && !parsleyRefs.current.includes(el)) parsleyRefs.current.push(el);
    };
    useEffect(() => {
        if (!start) return;
        const tl = gsap.timeline();
        tl.from(h2Ref.current, { opacity: 0, x: 50, duration: 0.5 });
        tl.from(h4Ref.current, { opacity: 0, x: 50, duration: 0.5 }, '-=0.4');
        tl.from(h3Ref.current, { opacity: 0, x: -50, duration: 0.5 }, '-=0.4');
        tl.from(meshpotatoRef.current, { opacity: 0, scale: 0.8, duration: 0.5 }, '-=0.3');
        tl.from(
            rotateRefs.current,
            {
                opacity: 0,
                rotation: 360,
                scale: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'back.out(1.7)',
            },
            '-=0.3'
        );
        tl.from(
            parsleyRefs.current,
            {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.5,
            },
            '-=0.2'
        );
    }, [start]);
    return (
        <section className="right">
            <div className="right-title">
                <h2 ref={h2Ref}>Bon&apos; s appetit</h2>
                <h3 ref={h3Ref}>Chef&apos;s Recipe at Home</h3>
                <div ref={h4Ref}>
                    <h4 className="web">
                        <span>7월 첫째주 셰프의 레시피</span>‘으깬 감자 구이’
                    </h4>
                    <h4 className="mobile">: 집에서 만드는 셰프의 레시피</h4>
                </div>
            </div>

            <div className="right-title-mobile-bottom">
                <h4 ref={h4Ref}>
                    <span>7월 첫째주 셰프의 레시피</span>
                    <p>‘으깬 감자 구이’</p>
                </h4>
            </div>
            <div className="right-high">
                <h3>
                    Tohome Magazine <span>: 집에서 만드는 셰프의 레시피</span>
                </h3>
            </div>

            <button className="more" onClick={onToggle}>
                자세히보기 <img src="/images/icon/icon_all.png" alt="icon_all.png" />{' '}
            </button>
            <div className="right-main-images-wrap">
                <img
                    src="/images/magazine/recipe-meshpotato.png"
                    alt="meshpotato"
                    className="recipe-meshpotato"
                    ref={meshpotatoRef}
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-cheese.png"
                    alt="cheese"
                    className="recipe-cheese"
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-basil.png"
                    alt="basil"
                    className="recipe-basil"
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-lemon.png"
                    alt="lemon"
                    className="recipe-lemon"
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-potato.png"
                    alt="potato"
                    className="recipe-potato"
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-yogurt.png"
                    alt="yogurt"
                    className="recipe-yogurt"
                />
                <img
                    ref={addRotateRef}
                    src="/images/magazine/recipe-parsley.png"
                    alt="parsley"
                    className="recipe-parsley"
                />
                <img
                    ref={addParsleyRef}
                    src="/images/magazine/recipe-blueberry.png"
                    alt="blueberry"
                    className="recipe-blueberry"
                />
                <img
                    ref={addParsleyRef}
                    src="/images/magazine/recipe-eucalyptus.png"
                    alt="eucalyptus"
                    className="recipe-eucalyptus"
                />
            </div>
        </section>
    );
};

export default MagazineListRight;
