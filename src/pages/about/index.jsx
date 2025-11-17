import AboutTop from '../../components/about/AboutTop';
import AboutVisual from '../../components/about/AboutVisual';
import AboutGoto from '../../components/about/AboutGoto';
import { AboutWrap } from './style';

const About = () => {
    return (
        <AboutWrap>
            <AboutTop />
            <div className="inner">
                <AboutVisual />
                <AboutGoto />
            </div>
        </AboutWrap>
    );
};

export default About;
