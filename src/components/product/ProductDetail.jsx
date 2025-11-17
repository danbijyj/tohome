import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetailStyle } from './style';
import DetailSide from './productDetail/DetailSide';
import DetailTab from './productDetail/DetailTab';
import DetailArt from './productDetail/DetailArt';
import { useState } from 'react';

const ProductDetail = () => {
    const { productNum } = useParams();
    const { AllDataList } = useSelector((state) => state.cart);

    const obj = AllDataList?.find((item) => Number(item.num) === Number(productNum));

    if (!obj)
        return <p style={{ textAlign: 'center', padding: '30px' }}>상품을 찾을 수 없습니다.</p>;

    const [activeTab, setActiveTab] = useState(0);

    return (
        <ProductDetailStyle>
            <DetailSide products={AllDataList} obj={obj} />
            <section>
                <DetailTab active={activeTab} onChange={setActiveTab} />

                <DetailArt activeIndex={activeTab} onSlideChange={setActiveTab} obj={obj} />
            </section>
        </ProductDetailStyle>
    );
};

export default ProductDetail;
