import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import axios from "axios";

export default function CartList() {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await axios.get("http://localhost:5700/cart/show", { withCredentials: true });
                console.log("불러오기 성공:", response.data);
                setCarts(response.data.items);
            } catch (error) {
                console.error("장바구니 불러오기 오류:", error.response ? error.response.data : error);
            }
        };
        getCart();
    }, []);

    const handleDeleteCartItem = async (productId) => {
        try {
            await axios.post(
                'http://localhost:5700/cart/delete',
                { productId },
                { withCredentials: true }
            );

            alert("상품이 장바구니에서 삭제되었습니다!");

            // 상품 삭제 성공시 장바구니 상태 갱신
            setCarts((preCarts) => preCarts.filter((cart) => cart._id !== productId));
        } catch (error) {
            console.error("장바구니 삭제 실패:", error.response?.data || error.message);
        }

    }
    return (
        <>
            {carts.map((cart) => (
                <CartItem
                    item={cart}
                    ket={cart._id}
                    onIncrease={() => console.log("수량 증가")}
                    onDecrease={() => console.log("수량 감소")}
                    onRemove={handleDeleteCartItem}
                />
            ))}
        </>
    )
}