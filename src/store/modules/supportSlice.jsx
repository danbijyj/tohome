import { createSlice, current } from '@reduxjs/toolkit';
import customerData from '../../assets/data/customerData';
import faqData from '../../assets/data/faqData';
import noticeData from '../../assets/data/noticeData';
import reviewData from '../../assets/data/reviewData';

const normalized = customerData.map((c) => {
    const id = Number(c.id ?? c.customerId);
    return {
        ...c,
        id,
        customerId: id,
        username: c.username ?? c.name ?? '',
    };
});

const getItemId = (c) => Number(c?.id ?? c?.customerId);

const initialState = {
    customers: normalized,
    faqs: faqData,
    openFaqIds: [],
    notices: noticeData,
    reviews: reviewData,
    current: null,
};
let no = initialState.customers.length + 1;
export const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            const nid = no++;
            action.payload.id = nid;
            action.payload.customerId = nid;
            state.customers = [action.payload, ...state.customers];
        },
        setCurrentCustomer: (state, action) => {
            state.current = action.payload;
        },
        removeCustomer: (state, action) => {
            state.customers = state.customers.filter((c) => c.id !== Number(action.payload));
        },

        updateCustomer: (state, action) => {
            const p = action.payload ?? {};
            const id = Number(p.id ?? p.customerId);
            state.customers = state.customers.map((customer) => {
                if (getItemId(customer) !== id) return customer;
                const username = p.username ?? p.name ?? customer.username ?? customer.name ?? '';
                return {
                    ...customer,
                    ...p,
                    id,
                    customerId: id,
                    username,
                };
            });
        },

        faqToggle: (state, action) => {
            const id = action.payload;
            if (state.openFaqIds.includes(id)) {
                state.openFaqIds = state.openFaqIds.filter((faqId) => faqId !== id);
            } else {
                state.openFaqIds.push(id);
            }
        },
    },
});

export const supportActions = supportSlice.actions;
export default supportSlice.reducer;
