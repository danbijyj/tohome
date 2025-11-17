import { useDispatch, useSelector } from 'react-redux';
import { FaqStyle, FaqTap } from './style';
import { useEffect, useState } from 'react';
import FaqList from './FaqList';
import Pagination from '../../pagination';

const Faq = () => {
    const { faqs, openFaqIds } = useSelector((state) => state.support);
    const dispatch = useDispatch();
    const handleTapClick = (e) => {
        if (e.target.tagName === 'P') {
            setSelectedTag(e.target.innerText);
        }
    };
    const [selectedTag, setSelectedTag] = useState('BEST 5');
    const filteredFaqs =
        selectedTag === '전체'
            ? faqs
            : selectedTag === 'BEST 5'
            ? faqs.filter((faq) => faq.tags.name === 'BEST 5')
            : faqs.filter((faq) => faq.tags.name === selectedTag);
    return (
        <FaqStyle>
            <FaqTap onClick={handleTapClick}>
                <h2>자주 묻는 질문</h2>
                <div>
                    <p className={selectedTag === '전체' ? 'on' : ''}>전체</p>
                    <p className={selectedTag === '투홈패스' ? 'on' : ''}>투홈패스</p>
                    <p className={selectedTag === '주문/결제' ? 'on' : ''}>주문/결제</p>
                    <p className={selectedTag === '배송' ? 'on' : ''}>배송</p>
                    <p className={selectedTag === '취소/반품/교환/AS' ? 'on' : ''}>
                        취소/반품/교환/AS
                    </p>
                    <p className={selectedTag === '혜택/포인트' ? 'on' : ''}>혜택/포인트</p>
                    <p className={selectedTag === '회원' ? 'on' : ''}>회원</p>
                </div>
            </FaqTap>
            <FaqList
                selectedTag={selectedTag}
                filteredFaqs={filteredFaqs}
                openFaqIds={openFaqIds}
                dispatch={dispatch}
                faqs={faqs}
            />
        </FaqStyle>
    );
};

export default Faq;
