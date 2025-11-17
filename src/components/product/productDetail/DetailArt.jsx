import React from 'react';
import { DetailArtStyle } from './style';
import DetailArtMain from './DetailArtMain';
import DetailArtSub from './DetailArtSub';
import DetailArtFaq from './DetailArtFaq';
import DetailReview from './DetailReview';

const DetailArt = ({ activeIndex = 0, obj }) => {
    return (
        <DetailArtStyle>
            {activeIndex === 0 && <DetailArtMain obj={obj} />}
            {activeIndex === 1 && <DetailArtSub obj={obj} />}
            {activeIndex === 2 && <DetailArtFaq />}
            {activeIndex === 3 && <DetailReview />}
        </DetailArtStyle>
    );
};

export default DetailArt;
