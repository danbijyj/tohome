import { useSelector } from 'react-redux';
import GiftPremiumItem from './GiftPremiumItem';
import { GiftPremiumListWrap } from './style';
import { selectPremium } from '../../../store/modules/cartSlice';

const GiftPremiumList = ({ viewCount }) => {
    const premium = useSelector(selectPremium);
    return (
        <GiftPremiumListWrap>
            {premium.slice(0, viewCount).map((gift) => (
                <GiftPremiumItem key={gift.giftId} gift={gift} />
            ))}
        </GiftPremiumListWrap>
    );
};

export default GiftPremiumList;
