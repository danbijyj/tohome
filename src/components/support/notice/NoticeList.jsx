import { useDispatch, useSelector } from 'react-redux';
import NoticeItem from './NoticeItem';
import { NoticeListStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Pagination from '../../pagination';
import { paginationActions } from '../../../store/modules/paginationSlice';

const NoticeList = ({ noticeTab }) => {
    const { notices } = useSelector((state) => state.support);
    const { pageData, totalCount, perPage, currentPage, totalPages } = useSelector(
        (state) => state.pagination.notice
    );
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentNotices = pageData.slice(startIdx, endIdx);
    useEffect(() => {
        const filteredNotices =
            noticeTab === 'all'
                ? notices
                : notices.filter((notice) => notice.tags?.name === noticeTab);
        dispatch(paginationActions.setData({ key: 'notice', data: filteredNotices }));
    }, [notices, noticeTab]);

    const handlePageChange = (page) => {
        dispatch(paginationActions.goToPage({ key: 'notice', page }));
    };
    return (
        <NoticeListStyle>
            <table className="noticeTable">
                <caption>공지사항게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="tit" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>

                <tbody>
                    {[...currentNotices]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((notice, idx) => {
                            const safeTotal = Number.isFinite(totalCount)
                                ? totalCount
                                : pageData.length;
                            const safePer = Number.isFinite(perPage) ? perPage : 10;
                            const safePage = Number.isFinite(currentPage) ? currentPage : 1;

                            return (
                                <NoticeItem
                                    key={notice.noticeId}
                                    notice={notice}
                                    index={idx}
                                    totalCount={safeTotal}
                                    perPage={safePer}
                                    currentPage={safePage}
                                />
                            );
                        })}
                </tbody>
            </table>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </NoticeListStyle>
    );
};

export default NoticeList;
