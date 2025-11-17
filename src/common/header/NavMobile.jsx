import { Link } from 'react-router-dom';
import { NavMobileStyle } from './style';

const NavMobile = () => {
    return (
        <NavMobileStyle>
            <li>
                <Link to="/">
                    <img src="/images/icon/mob-home.png" alt="home" />
                </Link>
            </li>
            <li>
                <Link to="">
                    <img src="/images/icon/mob-menu.png" alt="home" />
                </Link>
            </li>
            <li>
                <Link to="">
                    <img src="/images/icon/mob-heart.png" alt="home" />
                </Link>
            </li>
            <li>
                <Link to="/login">
                    <img src="/images/icon/mob-human.png" alt="home" />
                </Link>
            </li>
        </NavMobileStyle>
    );
};

export default NavMobile;
