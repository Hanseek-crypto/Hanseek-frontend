import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface IAuthState {
  isLoggedIn: boolean;
  email: null | string;
  nickname: null | string;
  address: null | string;
  profileImage: null | string;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  email: null,
  nickname: null,
  address: null,
  profileImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER_LOGIN: (
      state,
      action: PayloadAction<{
        address: string | null;
        email: string | null;
        nickname: string | null;
        profileImage: string | null;
      }>
    ) => {
      const { address, email, nickname, profileImage } = action.payload;

      state.isLoggedIn = true;
      state.address = address;
      state.email = email;
      state.nickname = nickname;
      state.profileImage = profileImage;
    },
    SET_USER_LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.nickname = null;
      state.address = null;
      state.profileImage = null;
      // 로컬 스토리지의 모든 아이템 삭제
      localStorage.clear();
      // 모든 쿠키 삭제
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie =
          name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
      }
    },
  },
});

export const { SET_USER_LOGIN, SET_USER_LOGOUT } = authSlice.actions;

// DOES NOT WORK, do not use
export const getIsLoggedInState = (state: RootState) => state.auth.isLoggedIn;



export const getEmailState = (state: RootState) => state.auth.email;
export const getNicknameState = (state: RootState) => state.auth.nickname;
export const getAddressState = (state: RootState) => state.auth.address;
export const getProfileImageState = (state: RootState) =>
  state.auth.profileImage;
export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
