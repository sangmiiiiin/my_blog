import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function DetailSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: "auto" }}>
      <Box
        sx={{
          position: "relative",
          maxHeight: isExpanded ? "none" : 150,
          overflow: 'hidden',
          transition: "max-height 0.3s ease",
        }}
      >
        <Typography variant="body2">
          긴 상세 정보가 여기 들어갑니다. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed euismod, turpis at ultricies cursus, velit risus dapibus sapien, <br />
          vitae facilisis tortor lectus non sem. <br />
          Mauris luctus lorem ut cursus tincidunt. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          긴 상세 정보가 여기 들어갑니다. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed euismod, turpis at ultricies cursus, velit risus dapibus sapien, <br />
          vitae facilisis tortor lectus non sem. <br />
          Mauris luctus lorem ut cursus tincidunt. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          긴 상세 정보가 여기 들어갑니다. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed euismod, turpis at ultricies cursus, velit risus dapibus sapien, <br />
          vitae facilisis tortor lectus non sem. <br />
          Mauris luctus lorem ut cursus tincidunt. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Typography>

        {!isExpanded && (
          <Box
            sx={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 60,
              background: "linear-gradient(to top, white, transparent)",
            }}
          />
        )}
      </Box>

      <Button
        fullWidth
        variant="outlined"
        onClick={() => setIsExpanded((prev) => !prev)}
        sx={{ mt: 2, borderColor: "black", color: "black" }}
      >
        {isExpanded ? "닫기" : "상세 정보 보기"}
      </Button>
    </Box>
  );
}
