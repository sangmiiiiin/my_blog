import { Box, Typography } from "@mui/material";
import React from "react";

const ItemOrder = () => {
    return (
        <Box
            border="1px solid lightgray"
            borderRadius="6px"
            sx={{ height: "auto" }}
            display="flex"
            justifyContent="space-between"
        >
            <Box 
                sx={{ 
                    width: "35%", 
                    backgroundColor: "lightgray",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    gap: 1,
                 }}
            >
                <Typography>소비자가</Typography>
                <Typography>판매가</Typography>
                <Typography>배송비</Typography>
            </Box>
            <Box 
                sx={{ 
                    width: "65%", 
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap: 1,
                    ml: 2
                }}
            >
                <Typography>105,000원</Typography>
                <Typography>63,000원</Typography>
                <Typography>3,500원</Typography>
            </Box>
        </Box>
    );
}

export default ItemOrder;