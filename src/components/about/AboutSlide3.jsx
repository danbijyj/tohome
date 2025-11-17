import { Link } from 'react-router-dom';
import { AboutSlideItem } from './style';

const AboutSlide3 = ({ about }) => {
    const {
        imgUrl,
        title,
        titleEng,
        des,
        magazine,
        bannersubl,
        bannersubttll,
        bannersubr,
        bannersubttlr,
    } = about;
    return (
        <AboutSlideItem>
            <div className="bannerImg">
                <img src={imgUrl} alt="" />
            </div>
            <div className="AboutSlideDetail">
                <div className="txt">
                    <h4>
                        {titleEng}
                        <span>3</span>
                    </h4>
                    <strong>{title}</strong>
                    <p className="pretendard fw400 fz16">{des}</p>
                </div>
                <div className="AboutMagazine">
                    <ul>
                        <li>
                            <small>{magazine}</small>
                            <div className="AboutBanner">
                                <p>{bannersubl}</p>
                                <em>{bannersubttll}</em>
                                <img
                                    src="/images/about/about_arrow.png"
                                    alt=""
                                />
                            </div>
                        </li>

                        <li>
                            <small>{magazine}</small>
                            <div className="AboutBanner">
                                <p>{bannersubr}</p>
                                <em>{bannersubttlr}</em>
                                <img
                                    src="/images/about/about_arrow.png"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </AboutSlideItem>
    );
};

export default AboutSlide3;
