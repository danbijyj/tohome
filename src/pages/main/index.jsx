import Content1 from '../../components/main/con1/Content1';
import Content2 from '../../components/main/con2/Content2';
import Content3 from '../../components/main/con3/Content3';
import Content4 from '../../components/main/con4/Content4';
import Content5 from '../../components/main/con5/Content5';
import MainVisual from '../../components/main/visual/MainVisual';
import { MainStyle } from './style';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const initAOS = () => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                disable: () => window.matchMedia('(max-width: 600px)').matches,
            });
        };
        initAOS();
        let resizeTimer;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                initAOS();
                AOS.refreshHard();
            }, 150);
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(resizeTimer);
        };
    }, []);
    return (
        <MainStyle>
            <div className="inner">
                <div className="banner-wrap">
                    <MainVisual className="main-visual" />
                </div>
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
            </div>
        </MainStyle>
    );
};

export default Main;
