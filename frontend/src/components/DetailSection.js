import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function DetailSection(detailContent) {
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
          {detailContent.detailContent}
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
