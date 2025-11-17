import { useDispatch, useSelector } from 'react-redux';
import CustomerItem from './CustomerItem';
import { CustomerListStyle } from './style';
import Pagination from '../../pagination';
import { paginationActions } from '../../../store/modules/paginationSlice';
import { useEffect } from 'react';

const CustomerList = () => {
    const { customers } = useSelector((state) => state.support);

    const { pageData, perPage, currentPage, totalPages, totalCount } = useSelector(
        (state) => state.pagination.customer
    );

    const dispatch = useDispatch();

    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;

    const currentCustomers = pageData.slice(startIdx, endIdx);

    useEffect(() => {
        const sorted = [...customers].sort((a, b) => new Date(b.date) - new Date(a.date));
        dispatch(paginationActions.setData({ key: 'customer', data: sorted }));
    }, [customers, dispatch]);

    const handlePageChange = (page) => {
        dispatch(paginationActions.goToPage({ key: 'customer', page }));
    };

    const safeTotal = Number.isFinite(totalCount) ? totalCount : pageData.length;
    const safePer = Number.isFinite(perPage) ? perPage : 10;
    const safePage = Number.isFinite(currentPage) ? currentPage : 1;

    return (
        <CustomerListStyle>
            <table className="customerTable">
                <caption>공지사항게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="tit" />
                    <col className="writer" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCustomers.map((customer, idx) => (
                        <CustomerItem
                            key={`${customer.customerId ?? customer.date}-${idx}`}
                            customer={customer}
                            index={idx}
                            totalCount={safeTotal}
                            perPage={safePer}
                            currentPage={safePage}
                        />
                    ))}
                </tbody>
            </table>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </CustomerListStyle>
    );
};

export default CustomerList;
