import React from "react"
import { Box, Typography } from "@mui/material"

export default function Marquee({ marqueeContainerRef, marqueeTextRef, marqueeDistance, isBrownBgActive }) {
  return (
    <Box
      ref={marqueeContainerRef}
      sx={{
        backgroundColor: isBrownBgActive ? "#D2B49C" : "#f5f3f0",
        transition: "background 0.4s",
        left: 0,
        maxWidth: "100dvw",
        overflow: "hidden",
        zIndex: 1,
        height: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
        display: "flex",
        alignItems: "center",
        py: { xs: 1, md: 14 },
        paddingBottom:'5px'
      }}
    >
      <Typography
        ref={marqueeTextRef}
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "8rem" },
          fontWeight: 'normal',
          color: "black",
          fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
          my: { xs: 1, md: 2 },
          animation: marqueeDistance !== 0 ? `marqueeMove 4s linear infinite alternate` : "none",
          '@keyframes marqueeMove': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: `translateX(${marqueeDistance}px)` },
          },
        }}
      >
        Elegance in Every Detail, Luxury in Every Detail
      </Typography>
    </Box>
  )
} 