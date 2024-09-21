import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";

// 로컬 스토리지에서 상태를 복원하는 함수
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined; // 초기 상태를 반환
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// 상태를 로컬 스토리지에 저장하는 함수
function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const preloadedState = loadFromLocalStorage(); // 로컬 스토리지에서 복원된 상태

const store = configureStore({
  reducer: rootReducer,
  preloadedState, // 복원된 상태로 스토어 초기화
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState()); // 상태가 업데이트 될 때마다 로컬 스토리지에 저장
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
