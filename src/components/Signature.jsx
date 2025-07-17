import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import bg5 from "../assets/5thbg.png";
import bg6 from "../assets/6thbg.png";
import vector3 from "../assets/Vector3.png";

export default function Signature() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        width: "100%",
        minHeight: { xs: 300, sm: 400, md: 400 },
        backgroundImage: `url(${hovered ? bg6 : bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        transition: "background-image 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Overlay Vector3 image - only on 5thbg */}
      {!hovered && (
        <Box
          component="img"
          src={vector3}
          alt="Decorative Vector 3"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0.5,
            zIndex: 20,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      )}
      {/* Text Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
          transform: hovered ? 'translateY(-10px)' : 'translateY(30px)',
        }}
      >
        <Typography
          sx={{
            color: hovered ? "white" : "black",
            fontWeight: 'normal',
            mb: 2,
            textAlign: "center",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem" },
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          Create Your Signature Look
        </Typography>
        <Typography
          sx={{
            color: hovered ? "white" : "black",
            fontWeight: 'normal',
            textAlign: "center",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem" },
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            letterSpacing: 1,
            mb: 0,
          }}
        >
          Explore Our Collection
        </Typography>
        {hovered && (
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              px: { xs: 5, md: 9 },
              py: { xs: 1.2, md: 1.5 },
              fontSize: { xs: "0.8rem", md: "1.8rem" },
              fontWeight: 'normal',
              letterSpacing: "1px",
              borderRadius: "0",
              textTransform: "none",
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              boxShadow: 2,
              mt: { xs: 2, md: 4 },
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Custom jewelry
          </Button>
        )}
      </Box>
    </Box>
  );
}
