import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  // const { image, name, color, size, price, quantity } = item;

  return (
        <Card sx={{ display: "flex", mb: 2, p: 1 }}>
          <CardMedia
            component="img"
            image={item.product.thumbnail}
            alt={item.product.title}
            sx={{ width: 100, height: 100, borderRadius: 2 }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: 2 }}>
            <CardContent sx={{ pb: "0 !important" }}>
              <Typography variant="subtitle1">{item.product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                색상: {item.selectedOptions.color} / 사이즈: {item.selectedOptions.size}
              </Typography>
            </CardContent>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1, px: 2 }}>
              <Button size="small" onClick={onDecrease}>-</Button>
              <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
              <Button size="small" onClick={onIncrease}>+</Button>

              <Typography sx={{ ml: "auto" }}>
                {(item.product.salePrice * item.quantity).toLocaleString()}원
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={() => onRemove(item._id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
  );
}
