import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers()); // API 요청 실행
    }, [dispatch]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;

    return (
        <PersistGate loading={<p>로딩 중...</p>} persistor={persistor}>
            <div>
                <h2>사용자 목록</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </PersistGate>
    );
};

export default UserList;