import { useState } from 'react';
import MagazineDetail from '../../components/magazine/magazineDetail/MagazineDetail';
import MagazineList from '../../components/magazine/magazineList/MagazineList';
import { MagazineWrap } from './style';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Magazine = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return (
        <MagazineWrap>
            <div className="inner">
                {isOpen ? (
                    <>
                        <MagazineDetail onToggle={onToggle} />
                    </>
                ) : (
                    <MagazineList onToggle={onToggle} />
                )}
            </div>
        </MagazineWrap>
    );
};

export default Magazine;
