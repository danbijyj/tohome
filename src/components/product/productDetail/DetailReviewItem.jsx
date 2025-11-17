import React from 'react';
import { GradeStar, ReviewItemStyle } from './style';

const DetailReviewItem = ({ review }) => {
    const { img, title, username, context, date, rate } = review;
    return (
        <ReviewItemStyle>
            <div className="itemBox">
                <div className="box">
                    <div className="grade-star">
                        <GradeStar rate={rate} />
                    </div>
                    <div className="review"> 
                        <div className="photo">
                            <img src={img} alt={title} />
                        </div>
                        <div className="txt">
                            <p>{context}</p>
                        </div>
                        <div className="like">
                            <button>0</button>
                            <span>리뷰가 도움이 되었나요?</span>
                        </div>
                    </div>
                    <div className="info">
                        <span className="id">{username}</span>
                        <span className="date">{date}</span>
                    </div>
                </div>
            </div>
        </ReviewItemStyle>
    );
};

export default DetailReviewItem;
