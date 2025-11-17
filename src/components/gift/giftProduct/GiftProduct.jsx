import { useState } from 'react';
import { GiftProductWrap } from './style';
import GiftList from './GiftList';
import GiftListTop from './GiftListTop';

const GiftProduct = () => {
    const [selectedSub, setSelectedSub] = useState(null);
    return (
        <GiftProductWrap>
            <GiftListTop
                onSelectSub={setSelectedSub}
                selectedSub={selectedSub}
            />
            <GiftList selectedSub={selectedSub} />
        </GiftProductWrap>
    );
};

export default GiftProduct;
