import React from 'react';
import { DetailTabStyle } from './style';

const TABS = ['상세정보', '구매정보', '취소/교환/반품', '리뷰 283'];

const DetailTab = ({ active = 0, onChange = () => {} }) => {
    return (
        <DetailTabStyle role="tablist" aria-label="상품 상세 탭">
            <ul>
                {TABS.map((label, i) => (
                    <li key={label}>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={active === i}
                            className={active === i ? 'on' : ''}
                            onClick={() => onChange(i)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </DetailTabStyle>
    );
};

export default DetailTab;
