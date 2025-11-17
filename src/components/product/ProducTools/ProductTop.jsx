import { ProductTopStyle } from './style';

const ProductTop = ({
    subCategories,
    selectedSub,
    setSelectedSub,
    fontSize,
    fontWeight,
}) => {
    return (
        <ProductTopStyle fontSize={fontSize} fontWeight={fontWeight}>
            <li
                className={selectedSub === '전체보기' ? 'on' : ''}
                onClick={() => setSelectedSub('전체보기')}
            >
                전체보기
            </li>
            {subCategories.map((sub) => (
                <li
                    key={sub}
                    className={selectedSub === sub ? 'on' : ''}
                    onClick={() => {
                        console.log('클릭한 카테고리:', sub);
                        setSelectedSub(sub);
                    }}
                >
                    {sub}
                </li>
            ))}
        </ProductTopStyle>
    );
};

export default ProductTop;
