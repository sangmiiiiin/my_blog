import React from "react";
import CartItem from "../components/CartItem";
import axios from "axios";

export default function CartList() {
    const handleDeleteCartItem = async (productId) => {
    try {
            await axios.post(
                'http://localhost:5700/cart/delete',
                { productId },
                { withCredentials: true }
            );
            alert("상품이 장바구니에서 삭제되었습니다!");
        } catch (error) {
            console.error("장바구니 삭제 실패:", error.response?.data || error.message);
        }

    }
    return (
        <>
            <CartItem
                item={{
                    thumbnail: "https://via.placeholder.com/100",
                    name: "반팔티셔츠",
                    color: "Black",
                    size: "M",
                    price: 19000,
                    quantity: 2,
                }}
                onIncrease={() => console.log("수량 증가")}
                onDecrease={() => console.log("수량 감소")}
                onRemove={handleDeleteCartItem}
            />
        </>
    )
}