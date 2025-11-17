import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customer: {
        pageData: [],
        totalCount: 0,
        perPage: 10,
        currentPage: 1,
        totalPages: 1,
    },
    notice: {
        pageData: [],
        totalCount: 0,
        perPage: 10,
        currentPage: 1,
        totalPages: 1,
    },
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setData: (state, action) => {
            const { key, data } = action.payload;
            state[key].pageData = data;
            state[key].totalCount = data.length;
            state[key].totalPages = Math.ceil(data.length / state[key].perPage);
            state[key].currentPage = 1;
        },
        nextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage++;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
        goToPage: (state, action) => {
            const { key, page } = action.payload;
            if (page >= 1 && page <= state[key].totalPages) {
                state[key].currentPage = page;
            }
        },
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = state.totalPages;
        },
    },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
