import { useState, useMemo, useEffect } from 'react';
import MagazineBottom from '../MagazineBottom';
import MagazineDetailItem1 from './MagazineDetailItem1';
import MagazineDetailItem2 from './MagazineDetailItem2';
import MagazineDetailItem3 from './MagazineDetailItem3';
import MagazineDetailItem4 from './MagazineDetailItem4';
import { MagazineDetailStyle } from './style';

const STEP = { ITEM2: 2, ITEM3: 3, ITEM4: 4, BOTTOM: 5 };
const MagazineDetail = ({ onToggle }) => {
    const [currentStep, setCurrentStep] = useState(STEP.ITEM2);
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth <= 600;
    });
    useEffect(() => {
        if (typeof window === 'undefined') return;
        let ticking = false;
        const check = () => {
            const m = window.innerWidth <= 600;
            setIsMobile((prev) => (prev !== m ? m : prev));
            ticking = false;
        };
        const onResize = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(check);
            }
        };
        check();
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, []);
    const goPrev = () => setCurrentStep((s) => Math.max(STEP.ITEM2, s - 1));
    const goNext = () => setCurrentStep((s) => Math.min(STEP.BOTTOM, s + 1));
    const isFirst = currentStep === STEP.ITEM2;
    const isLast = currentStep === STEP.BOTTOM;

    const variant = isMobile ? 'popup' : undefined;

    const mobileContent = useMemo(() => {
        switch (currentStep) {
            case STEP.ITEM2:
                return (
                    <MagazineDetailItem2
                        key="step2"
                        onPrev={goPrev}
                        onNext={goNext}
                        isFirst={isFirst}
                        isLast={isLast}
                        variant={variant}
                    />
                );
            case STEP.ITEM3:
                return (
                    <MagazineDetailItem3
                        key="step3"
                        onPrev={goPrev}
                        onNext={goNext}
                        isFirst={isFirst}
                        isLast={isLast}
                        variant={variant}
                    />
                );
            case STEP.ITEM4:
                return (
                    <MagazineDetailItem4
                        key="step4"
                        onPrev={goPrev}
                        onNext={goNext}
                        isFirst={isFirst}
                        isLast={isLast}
                        variant={variant}
                    />
                );
            case STEP.BOTTOM:
                return (
                    <MagazineBottom
                        key="step5"
                        onPrev={goPrev}
                        onNext={goNext}
                        isFirst={isFirst}
                        isLast={isLast}
                        variant={variant}
                    />
                );
            default:
                return null;
        }
    }, [currentStep, isFirst, isLast, variant, goPrev, goNext]);

    return (
        <MagazineDetailStyle>
            <MagazineDetailItem1 onToggle={onToggle} />

            {isMobile ? (
                mobileContent
            ) : (
                <>
                    <MagazineDetailItem2 />
                    <MagazineDetailItem3 />
                    <MagazineDetailItem4 />
                    <MagazineBottom />
                </>
            )}
        </MagazineDetailStyle>
    );
};

export default MagazineDetail;
