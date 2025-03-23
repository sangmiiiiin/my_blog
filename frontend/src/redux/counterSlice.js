import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
    value: 0,
};

// Slice 생성
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // 상태 증가
        },
        decrement: (state) => {
            state.value -= 1; // 상태 감소
        },
        reset: (state) => {
            state.value = 0; // 상태 초기화
        },
    },
});

// 액션과 리듀서 내보내기
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;