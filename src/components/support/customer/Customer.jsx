import { useNavigate } from 'react-router-dom';
import CustomerAdd from './CustomerAdd';
import CustomerDetail from './CustomerDetail';
import CustomerEdit from './CustomerEdit';
import CustomerList from './CustomerList';
import { CustomerStyle } from './style';
import { useSelector } from 'react-redux';

const Customer = () => {
    const navigate = useNavigate();
    const { authed } = useSelector((state) => state.auth);
    const onMake = () => {
        if (authed) {
            navigate(`/customer/customeradd`);
        } else {
            navigate(`/login`);
        }
    };
    return (
        <div className="inner">
            <CustomerStyle>
                <h2>
                    문의 게시판 <span>문의내역</span>
                </h2>

                <CustomerList />
                <div className="btn-wrap">
                    <button onClick={onMake}>글쓰기</button>
                </div>
            </CustomerStyle>
        </div>
    );
};

export default Customer;
