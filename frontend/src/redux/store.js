import { configureStore } from "@reduxjs/toolkit";
import counterReducr from "./counterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducr, // counter 상태 추가
        users: userReducer,
    },
});

