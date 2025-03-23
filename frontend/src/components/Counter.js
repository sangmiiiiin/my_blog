import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Redux 상태 가져오기
    const dispatch = useDispatch();

    return (
        <div>
            <h1>카운터 값: {count}</h1>
            <button onClick={() => dispatch(increment())}>+ 증가</button>
            <button onClick={() => dispatch(decrement())}>- 감소</button>
            <button onClick={() => dispatch(reset())}>초기화</button>
        </div>
    );
};

export default Counter;

