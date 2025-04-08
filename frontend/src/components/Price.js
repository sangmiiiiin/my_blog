import { Typography, Box } from "@mui/material";
import { CustomButton } from "../styles/CustomButton";

function Price({ originalPrice, discountedPrice, deliveryFee }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            {/* 기존 가격 (취소선 적용) */}
            <Typography
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "12px",
                    color: "lightgray",
                    textDecoration: "line-through",
                }}
            >
                ₩{originalPrice.toLocaleString()}
            </Typography>

            {/* 할인된 가격 (볼드 강조) */}
            <Typography
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                }}
            >
                ₩{discountedPrice.toLocaleString()}
            </Typography>

            <Box display="grid" gap={1}>
                <Box display="flex">
                    <Typography
                        sx={{
                            color: "GrayTex1",
                            fontSize: "10px",
                            fontFamily: "unset"
                        }}
                    >
                        배송비
                    </Typography>
                    <Typography
                        sx={{
                            color: "GrayTex1",
                            fontSize: "10px",
                            fontFamily: "unset",
                            ml: 5,
                        }}>
                        ₩{deliveryFee.toLocaleString()}(60,000원 이상 구매시 무료)
                    </Typography>
                </Box>
                <Box display="flex">
                    <Typography
                        sx={{
                            color: "GrayText1",
                            fontSize: "10px",
                            mt: 0.5
                        }}>
                        무이자할부
                    </Typography>
                    <CustomButton
                        sx={{
                            ml: 2.5,
                        }}
                    >
                        카드혜택 +
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Price;
