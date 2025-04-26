import React, { useEffect } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { image, name, color, size, price, quantity } = item;
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:5700/cart/show",
        { withCredentials: true } // 쿠키포함
      );
      console.log("불러오기 성공:", response.data);
    } catch (error) {
      console.error("장바구니 불러오기 오류:", error.response ? error.response.data : error);
    }
  }, [])
  return (
    <Card sx={{ display: "flex", mb: 2, p: 1 }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ width: 100, height: 100, borderRadius: 2 }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: 2 }}>
        <CardContent sx={{ pb: "0 !important" }}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            색상: {color} / 사이즈: {size}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", mt: 1, px: 2 }}>
          <Button size="small" onClick={onDecrease}>-</Button>
          <Typography sx={{ mx: 2 }}>{quantity}</Typography>
          <Button size="small" onClick={onIncrease}>+</Button>

          <Typography sx={{ ml: "auto" }}>
            {(price * quantity).toLocaleString()}원
          </Typography>
        </Box>
      </Box>

      <IconButton onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}
