import { useState } from 'react';
import pagination from '../../pagination';
import NoticeDetail from './NoticeDetail';
import NoticeList from './NoticeList';
import { NoticeStyle } from './style';

const Notice = () => {
    const [noticeTab, setNoticeTab] = useState('all');

    return (
        <NoticeStyle>
            <h2>공지사항</h2>
            <div className="select">
                <p onClick={() => setNoticeTab('공지사항')}>공지사항</p>
                <p onClick={() => setNoticeTab('당첨자 발표')}>당첨자 발표</p>
            </div>
            <NoticeList noticeTab={noticeTab} />
        </NoticeStyle>
    );
};

export default Notice;
