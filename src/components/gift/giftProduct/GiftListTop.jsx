import { useSelector } from 'react-redux';
import { GiftListTopWrap } from './style';

const GiftListTop = ({ onSelectSub, selectedSub }) => {
    const { AllDataList } = useSelector((state) => state.cart);
    const subCategories = AllDataList
        ? [
              ...new Set(
                  AllDataList.filter((f) => f.giftId)
                      .map((f) => f.category?.sub)
                      .filter(Boolean)
              ),
          ]
        : [];

    return (
        <GiftListTopWrap>
            <li
                className={`show-all ${selectedSub === null ? 'active' : ''}`}
                onClick={() => onSelectSub(null)}
            >
                전체보기
            </li>
            {subCategories.map((sub, idx) => (
                <li
                    key={idx}
                    className={selectedSub === sub ? 'active' : ''}
                    onClick={() => onSelectSub(sub)}
                >
                    {sub}
                </li>
            ))}
        </GiftListTopWrap>
    );
};

export default GiftListTop;
