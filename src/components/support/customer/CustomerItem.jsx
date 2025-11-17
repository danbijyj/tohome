import { Link } from 'react-router-dom';

const CustomerItem = ({ customer, index, totalCount, currentPage, perPage }) => {
    const { title, username, date } = customer;

    const nTotal = Number(totalCount) || 0;
    const nPage = Number(currentPage) || 1;
    const nPer = Number(perPage) || 10;

    const offset = (nPage - 1) * nPer;
    const number = nTotal - (offset + index);

    const rawId = customer?.customerId ?? customer?.id;
    const id = encodeURIComponent(String(rawId));

    return (
        <tr>
            <td>{String(number)}</td>
            <td>
                <Link to={`/customer/${id}`}>{title}</Link>
            </td>
            <td>{username}</td>
            <td>{date}</td>
        </tr>
    );
};

export default CustomerItem;
