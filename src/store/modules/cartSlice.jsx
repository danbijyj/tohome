import { createSlice, createSelector } from '@reduxjs/toolkit';
import sideDishData from '../../assets/data/sideDishData.js';
import AllMergeData from '../../assets/data/AllMergeData.js';

const toNum = (v) => {
    const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''));
    return Number.isFinite(n) ? n : 0;
};

export const selectAllDataList = (state) => state.cart.AllDataList ?? [];

const normalizeItem = (raw) => {
    const base = raw;

    const rawNum = base?.num;
    const num = Number(rawNum);
    const safeNum = Number.isFinite(num) ? num : undefined;

    const qty = Number(base?.quantity) || 1;
    const price = toNum(base?.price);
    const disc = base?.discountedPrice != null ? toNum(base.discountedPrice) : null;
    const unit = disc != null && disc !== 0 ? disc : price;

    return {
        ...base,
        num: safeNum,
        price,
        discountedPrice: disc,
        quantity: qty,
        itemtotal: unit * qty,
    };
};

const slug = (s) =>
    String(s ?? '')
        .normalize('NFKD')
        .replace(/\s+/g, '')
        .replace(/[^\w가-힣·]/g, '')
        .toLowerCase();

export const selectGifts = createSelector([selectAllDataList], (list) =>
    list.filter((item) => !!item.giftId)
);

const byTagSortedAsc = (name) => (arr) =>
    arr
        .filter((g) => g.tags?.some((t) => t.name === name))
        .sort((a, b) => {
            const ra = a.tags.find((t) => t.name === name)?.rank ?? 0;
            const rb = b.tags.find((t) => t.name === name)?.rank ?? 0;
            return ra - rb;
        });

export const selectBest10 = createSelector(selectGifts, byTagSortedAsc('베스트10'));
export const selectPremium = createSelector(selectGifts, byTagSortedAsc('프리미엄'));
export const selectRes = createSelector(selectGifts, byTagSortedAsc('맛집'));
export const selectSnack = createSelector(selectGifts, byTagSortedAsc('간식'));

const loadCarts = () => {
    try {
        const parsed = JSON.parse(localStorage.getItem('carts') || '[]');
        return Array.isArray(parsed) ? parsed.map(normalizeItem) : [];
    } catch {
        return [];
    }
};

const save = (carts) => {
    localStorage.setItem('carts', JSON.stringify(carts));
};

const legacyKeyToTitle = {
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
const titleToLegacyKey = Object.fromEntries(
    Object.entries(legacyKeyToTitle).map(([k, v]) => [v, k])
);

const pickStableId = (p) =>
    p?.num ??
    p?.fruitId ??
    p?.grainId ??
    p?.seafoodId ??
    p?.meatId ??
    p?.riceId ??
    p?.sideId ??
    p?.seasoningId ??
    p?.bakeryId ??
    p?.snackId ??
    p?.liquidId ??
    `${p?.name ?? ''}__${p?.brandName ?? ''}__${p?.price ?? ''}`;

const DOMAIN_ID_KEYS = [
    'fruitId',
    'grainId',
    'seafoodId',
    'meatId',
    'riceId',
    'sideId',
    'seasoningId',
    'bakeryId',
    'snackId',
    'liquidId',
];

const hasDomainId = (p) => DOMAIN_ID_KEYS.some((k) => p?.[k] != null && p[k] !== '' && p[k] !== 0);

const getDomainStableKey = (p) => {
    for (const k of DOMAIN_ID_KEYS) {
        const v = p?.[k];
        if (v != null && v !== '' && v !== 0) return `${k}:${v}`;
    }
    return null;
};

const buildCategories = (all = []) => {
    const byMain = new Map();

    for (const item of all) {
        if (!hasDomainId(item)) continue;

        const main = item?.category?.main;
        if (!main) continue;

        const stableDomainKey = getDomainStableKey(item);
        if (!stableDomainKey) continue;

        if (!byMain.has(main)) byMain.set(main, { title: main, products: [], _seen: new Set() });
        const bucket = byMain.get(main);

        if (bucket._seen.has(stableDomainKey)) continue;
        bucket._seen.add(stableDomainKey);

        bucket.products.push(item);
    }

    const categories = {};
    for (const [mainTitle, { title, products }] of byMain.entries()) {
        const slugKey = slug(mainTitle);
        categories[slugKey] = { title, products };

        const legacyKey = titleToLegacyKey[mainTitle];
        if (legacyKey) categories[legacyKey] = { title, products };
    }
    return categories;
};

export const makeSelectProductsByCategoryKey = () =>
    createSelector([selectAllDataList, (_s, key) => key], (all, key) => {
        if (!key) return [];

        const decoded = decodeURIComponent(String(key));
        const title = legacyKeyToTitle[key] ?? decoded;
        const wanted = slug(title);

        const seen = new Set();
        const result = [];
        for (const item of all) {
            const main = item?.category?.main;
            if (!main) continue;
            if (slug(main) !== wanted) continue;

            const stable = String(pickStableId(item));
            if (seen.has(stable)) continue;
            seen.add(stable);

            result.push(item);
        }
        return result;
    });

const initialState = {
    priceTotal: 0,
    quantityTotal: 0,
    totalDiscount: 0,
    totalDiscounted: 0,
    totalDeliveryFee: 0,
    totalPayable: 0,
    carts: loadCarts(),

    sortType: '판매량순',

    currentCategory: null,
    sideDishes: sideDishData,
    AllDataList: AllMergeData.map(normalizeItem),
    categories: buildCategories(AllMergeData),
};

const DELIVERY_THRESHOLD = 10000;
const DELIVERY_FEE = 3000;

const getNumKey = (p) => String(p?.num ?? p);

export const selectCategories = (s) => s.cart.categories;
export const selectCurrentCategory = (s) => s.cart.currentCategory;
export const selectCurrentCategoryProducts = (s) => {
    const key = s.cart.currentCategory;
    if (!key) return [];
    return s.cart.categories?.[key]?.products ?? [];
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const payload = action.payload;
            const base = payload?.product
                ? { ...(payload.product || {}), quantity: payload.qty ?? payload.quantity }
                : payload;
            const incoming = normalizeItem(base);
            if (incoming.num == null) return;

            const key = getNumKey(incoming);
            const exist = state.carts.find((c) => getNumKey(c) === key);

            if (exist) {
                const newQty = (Number(exist.quantity) || 1) + (Number(incoming.quantity) || 1);
                const unit = exist.discountedPrice != null ? exist.discountedPrice : exist.price;

                exist.quantity = newQty;
                exist.itemtotal = unit * newQty;
            } else {
                state.carts.push(incoming);
            }

            save(JSON.parse(JSON.stringify(state.carts)));
        },

        removeFromCart: (state, action) => {
            const key = getNumKey(action.payload);
            state.carts = state.carts.filter((item) => getNumKey(item) !== key);

            save(state.carts);
        },

        emptyCart: (state, action) => {
            if (action.payload) {
                state.carts = [];
            }
            save(state.carts);
        },

        setCurrentCategory(state, action) {
            state.currentCategory = action.payload;
        },

        setSortType(state, action) {
            state.sortType = action.payload;
        },

        increaseQuantity(state, action) {
            const key = getNumKey(action.payload);
            const item = state.carts.find((cart) => getNumKey(cart) === key);
            if (item) {
                const q = Number(item.quantity) || 1;
                const unit = item.discountedPrice != null ? item.discountedPrice : item.price;
                item.quantity = q + 1;
                item.itemtotal = unit * item.quantity;
                save(state.carts);
            } else {
                state.carts.push({
                    num: Number(action.payload?.num ?? action.payload),
                    quantity: 1,
                    price: 0,
                    discountedPrice: null,
                    itemtotal: 0,
                });
                save(state.carts);
            }
        },

        decreaseQuantity(state, action) {
            const key = getNumKey(action.payload);
            const item = state.carts.find((cart) => getNumKey(cart) === key);
            if (item) {
                const q = Number(item.quantity) || 1;
                const unit = item.discountedPrice != null ? item.discountedPrice : item.price;
                const next = Math.max(q - 1, 1);
                item.quantity = next;
                item.itemtotal = unit * next;
                save(state.carts);
            }
        },

        totalCart(state) {
            state.priceTotal = state.carts.reduce((acc, item) => {
                const qty = Number(item?.quantity) || 1;
                const price = toNum(item?.price);
                return acc + price * qty;
            }, 0);

            state.quantityTotal = state.carts.reduce((acc, item) => {
                return acc + (Number(item?.quantity) || 1);
            }, 0);

            state.totalDiscounted = state.carts.reduce((acc, item) => {
                const qty = Number(item?.quantity) || 1;
                const price = toNum(item?.price);
                const disc = item?.discountedPrice != null ? toNum(item.discountedPrice) : null;
                const unit = disc != null ? disc : price;
                return acc + unit * qty;
            }, 0);

            state.totalDiscount = Math.max(0, state.priceTotal - state.totalDiscounted);

            state.totalDeliveryFee = state.totalDiscounted >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

            state.totalPayable = state.totalDiscounted + state.totalDeliveryFee;

            save(JSON.parse(JSON.stringify(state.carts)));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
