import React from "react"
import ResponsiveAppBar from "./nav"
import main1 from "../assets/main1.png"
import main2 from "../assets/main2.png"
import main3 from "../assets/main3.png"
import main4 from "../assets/main4.png"
import { Box, Typography } from "@mui/material"

export default function HeroSection({ bgImage, setBgImage, imagesLoaded, isBrownBgActive }) {
  return (
    <div style={{
      height: "100vh",
      width: "100%",
      position: "relative",
      minHeight: "983px",
      backgroundColor: isBrownBgActive ? "#D2B49C" : "black",
      transition: "background 0.4s"
    }}>
      {/* Background Images */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${main1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgImage === "main1" ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${main2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgImage === "main2" ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${main3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgImage === "main3" ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${main4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgImage === "main4" ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      />
      <ResponsiveAppBar />
      {/* Center Text Container */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: '38%', sm: '50%' },
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          display: "grid",
          gridTemplateColumns: {
            xs: '1fr', // 1 per row on mobile
            sm: 'repeat(2, minmax(0, 1fr))', // 2 per row on small/medium
            lg: 'repeat(4, minmax(0, 1fr))' // 4 per row on large
          },
          gap: { xs: '15px', sm: '20px', md: '25px', lg: '30px' },
          alignItems: 'center',
          justifyItems: 'center',
          zIndex: 2,
          width: '100%',
          maxWidth: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          mx: 'auto',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* Text Items */}
        <Box
          component="p"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
            fontSize: { xs: "32px", sm: "32px", md: "32px", lg: "40px" },
            color: "white",
            margin: "0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: { xs: "12px 20px", sm: "15px 25px" },
            userSelect: "none",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            // textTransform: 'uppercase',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textAlign: { xs: "center", sm: "left" },
            // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            ml: { lg: 16, xl: 24 },
          }}
          onMouseEnter={() => setBgImage("main2")}
          onMouseLeave={() => setBgImage("main1")}
        >
          Timeless
          <br />
          Classics
          <br />
          2024
        </Box>
        <Box
          component="p"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
            fontSize: { xs: "32px", sm: "32px", md: "32px", lg: "40px" },
            

            color: "white",
            margin: "0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: { xs: "12px 20px", sm: "15px 25px" },
            userSelect: "none",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            // textTransform: 'uppercase',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textAlign: { xs: "center", sm: "left" },
            // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            ml: { lg: 16, xl: 24 },
          }}
          onMouseEnter={() => setBgImage("main3")}
          onMouseLeave={() => setBgImage("main1")}
        >
          Personalized
          <br />
          Perfection
          <br />
          2024
        </Box>
        <Box
          component="p"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
            fontSize: { xs: "32px", sm: "32px", md: "32px", lg: "40px" },
           

            color: "white",
            margin: "0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: { xs: "12px 20px", sm: "15px 25px" },
            userSelect: "none",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            // textTransform: 'uppercase',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textAlign: { xs: "center", sm: "left" },
            // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            ml: { lg: 16, xl: 24 },
          }}
          onMouseEnter={() => setBgImage("main4")}
          onMouseLeave={() => setBgImage("main1")}
        >
          Statement
          <br />
          Elegance
          <br />
          2024
        </Box>
        <Box
          component="p"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
            fontSize: { xs: "32px", sm: "32px", md: "32px", lg: "40px" },
            

            color: "white",
            margin: "0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: { xs: "12px 20px", sm: "15px 25px" },
            userSelect: "none",
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            // textTransform: 'uppercase',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textAlign: { xs: "center", sm: "left" },
            // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            ml: { lg: 16, xl: 24 },
          }}
          onMouseEnter={() => setBgImage("main2")}
          onMouseLeave={() => setBgImage("main1")}
        >
          Brazilian
          <br />
          Roots
          <br />
          2024
        </Box>
      </Box>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: { xs: "20%", sm: "20%", md: "11%" },
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textAlign: "center",
          fontWeight: 'normal',
          fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
          // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          zIndex: 10,
          fontSize: { xs: "2.3rem", sm: "3.5rem", md: "5.2rem", lg: "8.5rem", xl: "11.5rem" },
          whiteSpace: { xs: "normal", md: "nowrap" },
          px: { xs: 1, sm: 3, md: 4 },
        }}
      >
        Celebrate Your Style
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "8%", sm: "10%", md: "8%" },
          left: "0",
          right: "0",
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 2, md: 4 },
          zIndex: 10,
          px: { xs: 1, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "2px",
            backgroundColor: "white",
            // boxShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            color: "white",
            textAlign: "center",
            // textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "2rem" },
            // whiteSpace: { xs: "normal", md: "nowrap" },
            fontFamily: 'Century Gothic, Arial, sans-serif',
          }}
        >
          WITH UNIQUE GOLD JEWELLERY
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: "2px",
            backgroundColor: "white",
            boxShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        />
      </Box>
    </div>
  )
} 