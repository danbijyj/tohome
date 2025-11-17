import FaqItem from './FaqItem';
import { supportActions } from '../../../store/modules/supportSlice';

const FaqList = ({ selectedTag, filteredFaqs, openFaqIds, dispatch, faqs }) => {
    return (
        <div>
            <h3>
                {selectedTag === 'BEST 5'
                    ? '자주하는 질문 BEST 5'
                    : selectedTag === '전체'
                    ? '전체'
                    : ` ${selectedTag}`}
            </h3>
            {filteredFaqs.map((faq) => (
                <FaqItem
                    key={faq.faqId}
                    onClick={(id) => dispatch(supportActions.faqToggle(id))}
                    isOpen={openFaqIds.includes(faq.faqId)}
                    faq={faq}
                />
            ))}
        </div>
    );
};

export default FaqList;
