import ProductItem from './ProductItem';
import { ProductListStyle } from './style';
import { useEffect, useState } from 'react';

const ProductList = ({
    products = [],
    showCheckbox = true,
    selectedItems = new Set(),
    onItemSelect,
    showDesc = false,
}) => {
    const [visibleCount, setVisibleCount] = useState(15);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= (fullHeight * 2) / 3) {
            setVisibleCount((prev) => Math.min(prev + 5, products.length));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products.length]);

    useEffect(() => {
        setVisibleCount(15);
    }, [products.length]);

    const toNum = (p) => {
        const n = Number(p?.num);
        return Number.isFinite(n) ? n : null;
    };

    return (
        <ProductListStyle className="product-list">
            {products.slice(0, visibleCount).map((product, idx) => {
                const num = toNum(product);
                const keyVal = num ?? idx;
                const isSelected = num != null ? selectedItems.has(num) : false;

                return (
                    <ProductItem
                        key={keyVal}
                        product={product}
                        showCheckbox={showCheckbox}
                        isSelected={isSelected}
                        onSelect={(n, checked) => {
                            if (onItemSelect && n != null) onItemSelect(n, checked);
                        }}
                        idx={idx}
                        showDesc={showDesc}
                    />
                );
            })}
        </ProductListStyle>
    );
};

export default ProductList;
