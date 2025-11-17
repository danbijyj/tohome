import { ProductSearchStyle } from './style';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSearch = ({ onClose, onSelectKeyword, onSubmit }) => {
    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const goResult = (raw) => {
        const q = raw.replace(/^#/, '');

        onSelectKeyword?.(q);
        onSubmit?.(q);

        navigate(`/result?q=${encodeURIComponent(q)}`);
        onClose?.();
    };
    return (
        <>
            <ProductSearchStyle>
                <div className="overlay" onClick={onClose}></div>
                <div className="inner" onClick={(e) => e.stopPropagation()}>
                    <p className="close-btn" onClick={onClose}>
                        <IoCloseOutline />
                    </p>
                    <section className="search-hot">
                        <h3 className="search-title">인기 검색어</h3>
                        <ul className="list">
                            <li>
                                <span>1</span>복숭아
                            </li>
                            <li>
                                <span>2</span>크리스피바바
                            </li>
                            <li>
                                <span>3</span>명인명촌
                            </li>
                            <li>
                                <span>4</span>크림찹쌀떡
                            </li>
                            <li>
                                <span>5</span>후무사자두
                            </li>
                            <li>
                                <span>6</span>한우선물세트
                            </li>
                            <li>
                                <span>7</span>새벽배송 도착 시간
                            </li>
                            <li>
                                <span>8</span>캠핑 장보기
                            </li>
                            <li>
                                <span>9</span>압구정 예향
                            </li>
                            <li>
                                <span>10</span>삼겹살
                            </li>
                        </ul>
                    </section>
                    <section className="search-recom">
                        <h3 className="search-title">추천 검색어</h3>
                        <ul className="list">
                            <li>주말에 뭐먹지</li>
                            <li>식사 준비 5분컷</li>
                            <li>선물로 딱 좋은 과일 세트</li>
                            <li>일주일치 반찬 구독</li>
                            <li>내일 도착하는 간식 추천</li>
                            <li>4인 가족 캠핑 장보기</li>
                            <li>가족 모임에 무슨 음식 준비하지</li>
                        </ul>
                    </section>
                    <section className="search-tags">
                        <h3 className="search-title">인기 태그</h3>
                        <ul className="list">
                            <li>#복숭아</li>
                            <li>#달걀</li>
                            <li>#선물세트</li>
                            <li>#한우</li>
                            <li>#달걀</li>
                            <li>#선물세트</li>
                            <li>#한우</li>
                            <li>#샤인머스캣</li>
                            <li>#이천쌀</li>
                            <li>#딸기</li>
                        </ul>
                    </section>
                </div>
            </ProductSearchStyle>
        </>
    );
};

export default ProductSearch;
