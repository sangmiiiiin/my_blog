import React, { useEffect } from "react";
import CartItem from "../components/CartItem";

export default function CartList() {
    return(
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
            onRemove={() => console.log("삭제")}
        />
    )
}