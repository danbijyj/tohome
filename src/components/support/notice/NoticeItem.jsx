import { Link } from 'react-router-dom';

const NoticeItem = ({ notice, index, totalCount, currentPage, perPage }) => {
    const { noticeId, title, date } = notice;
    const number = totalCount - ((currentPage - 1) * perPage + index);

    return (
        <tr>
            <td>{number}</td>
            <td>
                <Link to={`/notice/${noticeId}`}>{title}</Link>
            </td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;
