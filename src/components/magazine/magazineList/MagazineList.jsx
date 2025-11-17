import { MagazineListStyle } from './style';

import MagazineListLeft from './MagazineListLeft';
import MagazineListRight from './MagazineListRight';
import { useState } from 'react';

const MagazineList = ({ onToggle }) => {
    const [leftDone, setLeftDone] = useState(false);

    return (
        <MagazineListStyle>
            <MagazineListLeft onComplete={() => setLeftDone(true)} />
            <MagazineListRight start={leftDone} onToggle={onToggle} />
        </MagazineListStyle>
    );
};

export default MagazineList;
