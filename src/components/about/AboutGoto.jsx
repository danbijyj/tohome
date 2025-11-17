import { useEffect } from 'react';
import AboutGotoCon1 from './AboutGotoCon1';
import AboutGotoCon2 from './AboutGotoCon2';
import AboutGotoCon3 from './AboutGotoCon3';
import { AboutGotoWrap } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const AboutGoto = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 20,
        });
    }, []);

    const navigate = useNavigate();

    const onSideDish = () => {
        navigate('/sideDish');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onDawn = () => {
        navigate('/dawnDelivery');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onDirect = () => {
        navigate('/directDelivery');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <AboutGotoWrap>
            <h2 className="pretendard">
                현대투홈을 특별하게 만드는 3가지 키워드
            </h2>
            <AboutGotoCon1
                data-aos="fade-up"
                data-aos-delay="0"
                onClick={onSideDish}
            />
            <AboutGotoCon2
                data-aos="fade-up"
                data-aos-delay="100"
                onClick={onDawn}
            />
            <AboutGotoCon3
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={onDirect}
            />
        </AboutGotoWrap>
    );
};

export default AboutGoto;
