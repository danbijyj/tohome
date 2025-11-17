import { useState } from 'react';
import { CategoryFilterWrap } from './style';

const CategoryFilter = ({ setPriceRange, setDeliveryTypes }) => {
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(['전체']);

    const togglePrice = (range) => {
        let updated;
        if (selectedPrice.includes(range)) {
            updated = selectedPrice.filter((r) => r !== range);
        } else {
            updated = [...selectedPrice, range];
        }
        setSelectedPrice(updated);
    };
    const toggleDelivery = (type) => {
        let updated;
        if (selectedDelivery.includes(type)) {
            updated = selectedDelivery.filter((d) => d !== type);
        } else {
            updated =
                type === '전체'
                    ? ['전체']
                    : [...selectedDelivery.filter((d) => d !== '전체'), type];
        }
        setSelectedDelivery(updated);
    };
    const deliveryOptions = [
        { label: '전체', value: '전체' },
        { label: '새벽투홈', value: '새벽배송' },
        { label: '택배배송', value: '택배배송' },
        { label: '브랜드직송', value: '브랜드직송' },
    ];

    const btnReset = () => {
        setSelectedDelivery(['전체']);
        setDeliveryTypes(['전체']);
        setSelectedPrice([]);
        setPriceRange([]);
    };
    const btnConfirm = () => {
        setPriceRange(selectedPrice);
        setDeliveryTypes(selectedDelivery);
    };

    return (
        <CategoryFilterWrap>
            <h3>필터</h3>
            <div className="filter-section">
                <h4>가격</h4>
                <ul>
                    {['~5천원', '5천원~1만원', '1~2만원', '2~3만원', '3~4만원', '5만원 이상'].map(
                        (label, idx) => (
                            <li key={idx}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedPrice.includes(label)}
                                        onChange={() => togglePrice(label)}
                                    />
                                    <span className="custom-check" />
                                    {label}
                                </label>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <hr />
            <div className="filter-section">
                <h4>배송구분</h4>
                <ul>
                    {deliveryOptions.map((opt, idx) => (
                        <li key={idx}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedDelivery.includes(opt.value)}
                                    onChange={() => toggleDelivery(opt.value)}
                                />
                                <span className="custom-check" />
                                {opt.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter-button">
                <button type="button" className="btn-reset" onClick={btnReset}>
                    초기화
                </button>
                <button type="button" className="btn-confirm" onClick={btnConfirm}>
                    확인
                </button>
            </div>
        </CategoryFilterWrap>
    );
};

export default CategoryFilter;
