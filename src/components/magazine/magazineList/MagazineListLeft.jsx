import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import magazineData from '../../../assets/data/magazineData';

const MagazineListLeft = ({ onComplete }) => {
    const wrapRefs = useRef([]);
    const addToRefs = (el) => {
        if (el && !wrapRefs.current.includes(el)) wrapRefs.current.push(el);
    };
    useEffect(() => {
        const images = wrapRefs.current.map((ref) => ref.querySelector('img'));
        const promises = images.map(
            (img) =>
                new Promise((resolve) => {
                    if (img.complete) resolve();
                    else img.onload = img.onerror = resolve;
                })
        );
        Promise.all(promises).then(() => {
            setTimeout(() => {
                gsap.from(wrapRefs.current, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.05,
                    duration: 0.4,
                    onComplete,
                });
            }, 0);
        });
    }, []);
    return (
        <section className="left">
            {magazineData.slice(0, 12).map((list, idx) => (
                <div className="img-wrap" key={list.id ?? idx} ref={addToRefs}>
                    <img src={list.images} alt="" loading="lazy" />
                    <p className="des">{list.des}</p>
                </div>
            ))}
        </section>
    );
};

export default MagazineListLeft;
