import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

/*
import counterReducr from "./counterSlice";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage 사용
*/

/* 실습예제
// Redux Persist 설정
const persistConfig = {
    key: "root", // 저장될 키 값
    storage, // localStorage에 저장
};

// Persist Reducer 생성
const persistUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        counter: counterReducr, // counter 상태 추가
        users: persistUserReducer, // Redux Persist 적용된 Reducer 사용
    },
});

export const persistor = persistStore(store); // Redux Persist Store 생성
*/

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
