import { createSlice } from '@reduxjs/toolkit';

import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, number: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
