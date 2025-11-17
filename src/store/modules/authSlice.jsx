import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '이지은',
        email: 'rere0811@Google.com',
        password: 'rere0811@',
        tel: '010-0000-0000',
        userid: 'rere0811',
        addr: ['서울시 강남구 삼성동', '123-4번길 1층'],
        phone: [1234, 5678],
    },
];

const persistedMembers = localStorage.getItem('members')
    ? JSON.parse(localStorage.getItem('members'))
    : memberData;

const initialState = {
    members: persistedMembers,
    nextId: (persistedMembers.reduce((m, v) => Math.max(m, v.id || 0), 0) || 0) + 1,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { userid, password } = action.payload || {};
            const item = state.members.find((member) => member.userid === userid);

            if (item && item.password === password) {
                state.authed = true;
                state.user = item;
            } else {
                state.authed = false;
                state.user = null;
            }

            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        loginWithProvider: (state, action) => {
            const providerUser = action.payload;
            state.authed = true;
            state.user = providerUser || null;

            if (providerUser) {
                const exists = state.members.some((m) => m.userid === providerUser.userid);
                if (!exists) {
                    state.members.push({
                        id: state.nextId++,
                        userid: providerUser.userid || `user_${Date.now()}`,
                        name: providerUser.name || '소셜회원',
                        email: providerUser.email || '',
                        password: providerUser.password || '',
                        tel: providerUser.tel || '',
                        addr: providerUser.addr || [],
                        phone: providerUser.phone || [],
                    });
                    localStorage.setItem('members', JSON.stringify(state.members));
                }
            }

            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        logout: (state) => {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        signup: (state, action) => {
            const newMember = { ...action.payload, id: state.nextId++ };
            state.members.push(newMember);
            localStorage.setItem('members', JSON.stringify(state.members));
        },
    },
});

export const authActions = authSlice.actions;

export const selectMembers = (state) => state.auth.members;
export const selectAuthed = (state) => state.auth.authed;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
