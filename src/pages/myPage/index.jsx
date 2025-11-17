import React from 'react';
import { MyPageStyle } from './style';
import MyPageItem from '../../components/myPage/MyPageItem';
import MyPageLikes from '../../components/myPage/MyPageLikes';

const MyPage = () => {
    return (
        <MyPageStyle>
            <div className="inner">
                <h2>마이페이지</h2>

                <MyPageItem />
                <MyPageLikes />
            </div>
        </MyPageStyle>
    );
};

export default MyPage;
