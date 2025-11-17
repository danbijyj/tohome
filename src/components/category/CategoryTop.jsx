import { useSelector } from 'react-redux';
import { CategoryTopWrap, CategorySub } from './style';

const categoryIcons = {
    fruit: 'menu_icon_01.png',
    grain: 'menu_icon_02.png',
    seafood: 'menu_icon_03.png',
    meat: 'menu_icon_04.png',
    rice: 'menu_icon_05.png',
    side: 'menu_icon_06.png',
    seasoning: 'menu_icon_07.png',
    bakery: 'menu_icon_08.png',
    snack: 'menu_icon_09.png',
    liquid: 'menu_icon_10.png',
};

const legacyTitleMap = {
    fruit: '과일·채소',
    grain: '곡물·견과',
    seafood: '생선·해산물·건어물',
    meat: '육류·달걀',
    rice: '밥·국·면',
    side: '밑반찬·간식',
    seasoning: '양념·오일·통조림',
    bakery: '베이커리·치즈',
    snack: '과자·초콜릿·캔디',
    liquid: '물·우유·커피·음료',
};
const titleToLegacyKey = Object.fromEntries(Object.entries(legacyTitleMap).map(([k, v]) => [v, k]));

const slug = (s) =>
    String(s ?? '')
        .normalize('NFKD')
        .replace(/\s+/g, '')
        .replace(/[^\w가-힣·]/g, '')
        .toLowerCase();

const CategoryTop = ({ categoryID, onSelectSub, selectedSub }) => {
    const categories = useSelector((s) => s.cart.categories) ?? {};

    let bucket = categories?.[categoryID];

    if (!bucket && legacyTitleMap[categoryID]) {
        const keyByTitle = slug(legacyTitleMap[categoryID]);
        bucket = categories?.[keyByTitle];
    }

    if (!bucket && categoryID) {
        const decoded = decodeURIComponent(categoryID);
        const keyByDecoded = slug(decoded);
        bucket = categories?.[keyByDecoded];
    }

    const title = bucket?.title || '카테고리';
    const subCategories = bucket
        ? [...new Set(bucket.products.map((p) => p?.category?.sub).filter(Boolean))]
        : [];

    const iconKey = categoryIcons[categoryID] ? categoryID : titleToLegacyKey[title];
    const iconSrc = iconKey ? `/images/category/${categoryIcons[iconKey]}` : undefined;

    return (
        <>
            <CategoryTopWrap>
                <h2 className="categoty-title">
                    {iconSrc && <img src={iconSrc} alt={title} />}
                    {title}
                </h2>
            </CategoryTopWrap>

            <CategorySub>
                <li
                    className={`show-all ${selectedSub == null ? 'active' : ''}`}
                    onClick={() => onSelectSub(null)}
                >
                    전체보기
                </li>
                {subCategories.map((sub, idx) => (
                    <li
                        key={idx}
                        className={selectedSub === sub ? 'active' : ''}
                        onClick={() => onSelectSub(sub)}
                    >
                        {sub}
                    </li>
                ))}
            </CategorySub>
        </>
    );
};

export default CategoryTop;
