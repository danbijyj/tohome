import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { NoticeDetailStyle } from './style';

const CustomerDetail = () => {
    const { noticeID } = useParams();
    const { notices } = useSelector((state) => state.support);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newItem = notices.find(
        (notice) => notice.noticeId === Number(noticeID)
    );

    if (!newItem) {
        return (
            <div className="inner">
                <p>해당 공지사항을 찾을 수 없습니다.</p>
                <button onClick={() => navigate(-1)}>뒤로 가기</button>
            </div>
        );
    }
    const {
        noticeId,
        title,

        date,
        context,
        tags: { name },
    } = newItem;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NoticeDetailStyle>
            <div className="inner">
                <div className="detail-wrap">
                    <div className="detail-head">
                        <h2>공지사항</h2>
                        <p>#{name}</p>
                    </div>
                    <div className="detail-body">
                        <h3 className="title pretendard">{title}</h3>
                        <p className="context pretendard">{context}</p>
                        <p className="date pretendard">{date}</p>
                    </div>
                </div>
                <div className="btn-wrap">
                    <button onClick={() => navigate(-1)}>목록으로</button>
                </div>
            </div>
        </NoticeDetailStyle>
    );
};

export default CustomerDetail;
