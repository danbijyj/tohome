import { useState } from 'react';
import GiftPremiumList from './GiftPremiumList';
import { GiftPremiumWrap } from './style';
import { useSelector } from 'react-redux';
import { selectPremium } from '../../../store/modules/cartSlice';

const GiftPremium = () => {
    const premiumlGifts = useSelector(selectPremium);
    const totalCount = premiumlGifts.length;
    const initialCount = 4;
    const [viewCount, setViewCount] = useState(initialCount);
    const viewMore = () => {
        if (viewCount < totalCount) {
            setViewCount(totalCount);
        } else {
            setViewCount(initialCount);
        }
    };
    return (
        <GiftPremiumWrap>
            <h2>품격을 담은 프리미엄 선물 모음</h2>
            <GiftPremiumList viewCount={viewCount} />
            <button className="btn-more" onClick={viewMore}>
                {viewCount < totalCount ? '더보기' : '닫기'}
            </button>
        </GiftPremiumWrap>
    );
};

export default GiftPremium;
