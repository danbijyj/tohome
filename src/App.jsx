import Layout from './common/Layout';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    About,
    Best,
    Cart,
    Category,
    DawnDelivery,
    DirectDelivery,
    Gift,
    HealFood,
    Join,
    Login,
    Magazine,
    Main,
    MyPage,
    NewProducts,
    NotFiles,
    Sale,
    SideDish,
    SpecialBrand,
    Support,
} from './pages';
import GlobalStyle from './styled/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CustomerDetail from './components/support/customer/CustomerDetail';
import ProductDetail from './components/product/ProductDetail';
import Customer from './components/support/customer/Customer';
import CustomerAdd from './components/support/customer/CustomerAdd';
import CustomerEdit from './components/support/customer/CustomerEdit';
import NoticeDetail from './components/support/notice/NoticeDetail';
import Notice from './components/support/notice/Notice';
import { useEffect, useState } from 'react';
import Spinner from './components/spinner';
import ProductResult from './components/product/ProducTools/ProductResult';
import DetailReview from './components/product/productDetail/DetailReview';

const App = () => {
    const [isSpinner, setIsSpinner] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinner(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            {isSpinner && <Spinner />}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/best" element={<Best />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/directDelivery" element={<DirectDelivery />} />
                        <Route path="/gift" element={<Gift />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/magazine" element={<Magazine />} />
                        <Route path="/newProducts" element={<NewProducts />} />
                        <Route path="/dawnDelivery" element={<DawnDelivery />} />
                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>
                        <Route path="/sale" element={<Sale />} />
                        <Route path="/specialBrand" element={<SpecialBrand />} />
                        <Route path="/support" element={<Support />} />

                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route path="customeradd" element={<CustomerAdd />} />
                            <Route path="customeredit/:customerID" element={<CustomerEdit />} />
                            <Route path=":customerID" element={<CustomerDetail />} />
                        </Route>

                        <Route path="/product/:productNum" element={<ProductDetail />} />
                        <Route path="/result" element={<ProductResult />} />
                        <Route path="/healFood" element={<HealFood />} />
                        <Route path="/sideDish" element={<SideDish />} />
                        <Route path="*" element={<NotFiles />} />
                        <Route path="/category/:categoryID" element={<Category />} />

                        <Route path="/myPage" element={<MyPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
