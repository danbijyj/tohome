import GiftRes from './giftRes/GiftRes';
import GiftSnack from './giftSnack/GiftSnack';
import { GiftPopularWrap } from './style';

const GiftPopular = () => {
    return (
        <GiftPopularWrap>
            <GiftRes />
            <GiftSnack />
        </GiftPopularWrap>
    );
};

export default GiftPopular;
