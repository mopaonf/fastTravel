
import { createSlice } from "@reduxjs/toolkit";

const Initial = {
  access: "",
  isError: false,
  isLoading: false,
  isLogin: false,
  refresh: "",
  user_infos: {
    id: 0,
    last_login: "",
    is_superuser: false,
    username: "",
    is_staff: false,
    is_active: false,
    date_joined: "",
    is_cc: false,
    last_name: "",
    first_name: "",
    email: "",
    groups: [],
    user_permissions: [],
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: Initial,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    setLoginTrue: (state) => {
      state.isLogin = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user_infos = action.payload.user_infos;
      state.isLogin = true;
      state.refresh = action.payload.refresh;
      state.access = action.payload.access;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    logout: (state) => {
      state.access = null;
      state.isError = false;
      state.isLogin = false;
      state.refresh = "";
      state.user_infos = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setLoginTrue } = AuthSlice.actions;

export default AuthSlice.reducer;