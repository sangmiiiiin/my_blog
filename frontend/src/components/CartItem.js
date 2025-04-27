import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  // const { image, name, color, size, price, quantity } = item;
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get("http://localhost:5700/cart/show",
          { withCredentials: true } // 쿠키포함
        );
        console.log("불러오기 성공:", response.data);
        setCarts(response.data.items)
      } catch (error) {
        console.error("장바구니 불러오기 오류:", error.response ? error.response.data : error);
      }
    }
    getCart();
  }, [])

  return (
    <>
      {carts.map(cart => (
        <Card sx={{ display: "flex", mb: 2, p: 1 }}>
          <CardMedia
            component="img"
            image={cart.product.thumbnail}
            alt={cart.product.title}
            sx={{ width: 100, height: 100, borderRadius: 2 }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: 2 }}>
            <CardContent sx={{ pb: "0 !important" }}>
              <Typography variant="subtitle1">{cart.product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                색상: {cart.selectedOptions.color} / 사이즈: {cart.selectedOptions.size}
              </Typography>
            </CardContent>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1, px: 2 }}>
              <Button size="small" onClick={onDecrease}>-</Button>
              <Typography sx={{ mx: 2 }}>{cart.quantity}</Typography>
              <Button size="small" onClick={onIncrease}>+</Button>

              <Typography sx={{ ml: "auto" }}>
                {(cart.product.salePrice * cart.quantity).toLocaleString()}원
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={() => onRemove(cart.product._id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </>
  );
}
