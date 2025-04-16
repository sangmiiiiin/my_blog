import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';



const TotalPrice = ({salePrice}) => {
    return (
        <Box display="flex" justifyContent="space-between" sx={{ width: "90%" }}>
            <Typography
                fontSize="0.8rem"
                fontWeight="bold"
                sx={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
                총 상품 금액
            </Typography>
            <Typography
                fontSize="0.8rem"
                fontWeight="bold"
                sx={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
                {salePrice}원
            </Typography>
        </Box>
    );
}

const BuyButton = () => {
    return (
        <>
            <Button
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "90%",
                    fontWeight: "bold",
                }}
            >
                구매하기
            </Button>
        </>
    );
}

const ThreeButton = () => {
    return (
        <Box display="flex" justifyContent="center" sx={{ mt: 0.5 }} gap={0.8}>
            <Button
                variant="outlined"
                sx={{ width: "29%", color: "black", borderColor: "black" }}
            >
                CART
            </Button>
            <Button variant="outlined" sx={{ width: "29%", color: "black", borderColor: "black" }}>
                <Typography fontSize="0.7rem">
                    WISH LIST
                </Typography>
            </Button>
            <Button variant="outlined" sx={{ width: "29%", color: "black", borderColor: "black" }}>
                <ShareIcon />
                SHARE
            </Button>
        </Box>
    );
}



export default function OrderBox({ salePrice }) {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" justifyContent="center">
                <TotalPrice salePrice={salePrice}/>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                <BuyButton />
            </Box>
                <ThreeButton />
        </Box>
    );
}

