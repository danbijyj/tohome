import React, { useMemo } from 'react';
import DetailReviewList from './DetailReviewList';
import { DetailArtReviewStyle } from './style';
import { useSelector } from 'react-redux';

const DetailReview = () => {
    const { reviews } = useSelector((state) => state.support) || { reviews: [] };
    const list = Array.isArray(reviews) ? reviews : [];

    const avgRate = useMemo(() => {
        if (list.length === 0) return 0;
        const sum = list.reduce((acc, r) => acc + (Number(r?.rate) || 0), 0);
        return Number((sum / list.length).toFixed(1));
    }, [list]);

    return (
        <DetailArtReviewStyle>
            <div className="reviewTop">
                <div className="grade-star">
                    <span></span>
                    <strong>
                        <em>{avgRate}</em>
                        <i className="bar">/</i>5
                    </strong>
                </div>
                <div className="reviewBtn">
                    <button>리뷰 작성</button>
                </div>
            </div>
            <DetailReviewList reviews={list} avgRate={avgRate} />
        </DetailArtReviewStyle>
    );
};

export default DetailReview;
