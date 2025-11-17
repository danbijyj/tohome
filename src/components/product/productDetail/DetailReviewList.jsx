import { useMemo, useState } from 'react';
import DetailReviewItem from './DetailReviewItem';
import { ReviewListStyle } from './style';

const DetailReviewList = ({ reviews = [], avgRate = 0 }) => {
    const [tab, setTab] = useState('newest');

    const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

    const hasPhoto = (r) => isNonEmptyString(r?.img);

    const parseDate = (v) => {
        const d = new Date(v);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    };
    const getRate = (r) => Number(r?.rate) || 0;

    const shown = useMemo(() => {
        let arr = Array.isArray(reviews) ? [...reviews] : [];

        if (tab === 'photo') {
            return arr.filter(hasPhoto).sort((a, b) => parseDate(b?.date) - parseDate(a?.date));
        }
        if (tab === 'newest') {
            return arr.sort((a, b) => parseDate(b?.date) - parseDate(a?.date));
        }

        return arr.sort((a, b) => getRate(b) - getRate(a));
    }, [reviews, tab]);

    return (
        <ReviewListStyle rate={avgRate}>
            <div className="tab">
                <div
                    className={`photo ${tab === 'photo' ? 'active' : ''}`}
                    onClick={() => setTab('photo')}
                    role="button"
                    tabIndex={0}
                >
                    <p className="pretendard">포토 리뷰</p>
                </div>
                <div
                    className={`best ${tab === 'best' ? 'active' : ''}`}
                    onClick={() => setTab('best')}
                    role="button"
                    tabIndex={0}
                >
                    <p className="pretendard">베스트순</p>
                </div>
                <div
                    className={`newest ${tab === 'newest' ? 'active' : ''}`}
                    onClick={() => setTab('newest')}
                    role="button"
                    tabIndex={0}
                >
                    <p className="pretendard">최신순</p>
                </div>
            </div>

            {shown.map((review) => (
                <DetailReviewItem
                    key={review.id ?? `${review.userId ?? ''}_${review.date ?? ''}`}
                    review={review}
                />
            ))}
        </ReviewListStyle>
    );
};

export default DetailReviewList;
