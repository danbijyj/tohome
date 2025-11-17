import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cartSlice';
import support from './modules/supportSlice';
import pagination from './modules/paginationSlice';
import auth from './modules/authSlice';
import likes from './modules/likesSlice';

const store = configureStore({
    reducer: {
        cart,
        support,
        pagination,
        auth,
        likes,
    },
});

export default store;
