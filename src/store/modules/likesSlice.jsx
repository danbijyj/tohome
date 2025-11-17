import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = { byUser: {} };

const toggleInArray = (arr, id) => (arr.includes(id) ? arr.filter((v) => v !== id) : [...arr, id]);

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        hydrateLikes(state, action) {
            const { userId, productIds } = action.payload;
            state.byUser[userId] = Array.from(new Set(productIds || []));
        },
        toggleLike(state, action) {
            const { userId, productId } = action.payload;
            const list = state.byUser[userId] ?? [];
            state.byUser[userId] = toggleInArray(list, productId);
        },
        setLikes(state, action) {
            const { userId, productIds } = action.payload;
            state.byUser[userId] = Array.from(new Set(productIds || []));
        },
        clearUserLikes(state, action) {
            const { userId } = action.payload;
            delete state.byUser[userId];
        },
    },
});

export const likesActions = likesSlice.actions;
export default likesSlice.reducer;

const selectLikesRoot = (state) => state.likes || initialState;

export const selectUserLikes = (state, userId) =>
    userId ? selectLikesRoot(state).byUser[userId] || [] : [];

export const makeSelectIsLiked = () =>
    createSelector(
        [(_, userId) => userId, (_, __, productId) => productId, selectLikesRoot],
        (userId, productId, likesState) => {
            if (!userId || productId == null) return false;
            const list = likesState.byUser[userId] ?? [];
            return list.includes(productId);
        }
    );
