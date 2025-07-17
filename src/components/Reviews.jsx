import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bg4th from "../assets/4thbg.png";
import ring from "../assets/ring.png";

const reviews = [
  {
    text: `"Lorem Ipsum Dolor Sit Amet Consectetur. Varius Arcu Donec Eges Tas Suspendisse Leo. In Donec In Ut Lectus Quisque. Placerat Amet Ullamcor Per Eget Quam Iaculis Donec.Lorem Ipsum Dolor Sit Amet Consectetur. Varius Arcu Donec Eges Tas Suspendisse Leo. In Donec In Ut Lectus Qui Sque. Placerat Amet Ullamcorper"`,
    author: "Sarah Lousiana",
  },
  {
    text: `"Another review goes here. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sit Amet Consectetur. Varius Arcu Suspendisse Leo. In Donec In Ut Lectus Quisque. "`,
    author: "John Doe",
  },
  {
    text: `"Third review example. Etiam porta sem malesuada magna mollis euismod. et netus et malesuada fames In Donec In Ut Lectus Quisque. Varius Arcu Donec Eges Tas Suspendisse Leo. In Donec In Ut Lectus Qui Sque. Placerat Amet Ullamcorper"`,
    author: "Jane Smith",
  },
];

// Custom Left Arrow SVG
const CustomLeftArrow = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <line x1="38" y1="24" x2="10" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <polyline points="18,16 10,24 18,32" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Custom Right Arrow SVG
const CustomRightArrow = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <line x1="10" y1="24" x2="38" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <polyline points="30,16 38,24 30,32" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = reviews.length - 1;
      if (next >= reviews.length) next = 0;
      return next;
    });
  };

  // Animation variants for sliding the review box across the section
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 900 : -900,
      opacity: 0,
      position: "absolute",
      left: 0,
      right: 0,
      margin: 'auto',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
      left: 0,
      right: 0,
      margin: 'auto',
    },
    exit: (dir) => ({
      x: dir > 0 ? -900 : 900,
      opacity: 0,
      position: "absolute",
      left: 0,
      right: 0,
      margin: 'auto',
    }),
  };

  return (
    <Box
      sx={{
        width: "100vw",
        overflowX: "hidden",
        minHeight: { xs: 500, md: 600, lg: 900 },
        height: { xs: "auto", md: 600, lg: 900 },
        backgroundImage: `url(${bg4th})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-start",
        p: { xs: 2, md: 8 },
        boxSizing: "border-box",
      }}
    >
      {/* Left: Heading and lines (static) */}
      <Box sx={{ flex: 1, minWidth: 0, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', height: '100%' }}>
        {/* Horizontal line and Customer in a row */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: { xs: 0.5, md: 1.5 } }}>
          <Box sx={{
            width: { xs: 40, md: 200 },
            height: 2,
            background: '#fff',
            mr: { xs: 1.5, md: 3 },
          }} />
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem', lg: '6rem' },
              fontWeight: 400,
              color: 'white',
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textShadow: '0 2px 12px #0008',
            }}
          >
            Customer
          </Typography>
        </Box>
        {/* Success Stories and right line in a row */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem', lg: '6rem' },
              fontWeight: 400,
              color: 'white',
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              mb: { xs: 2, md: 4 },
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textShadow: '0 2px 12px #0008',
              ml: { xs: '52px', md: '224px' },
              whiteSpace: 'nowrap',
            }}
          >
            Success Stories
          </Typography>
          <Box sx={{ flex: 1, minWidth: { xs: 80, md: 250, lg: 1000 }, height: 2, background: '#fff', ml: { xs: 2, md: 4 }, mb:4}} />
        </Box>
      </Box>
      {/* Animated Review Box (left-aligned, left arrow outside, right arrow by ring image) */}
      {/* Left Arrow Button: left side of the review box, visually attached */}
      <Box sx={{ position: 'absolute', left: { xs: 0, md: 24 }, top: '65%', transform: 'translateY(-50%)', zIndex: 6, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pointerEvents: 'auto' }}>
        <IconButton
          onClick={() => paginate(-1)}
          sx={{
            color: "#fff",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "50%",
            width: 110,
            height: 110,
            boxShadow: 'none',
            border: 'none',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'rgba(255,255,255,0.22)',
            },
            '&:active': {
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent',
            },
            '&:focus': {
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent',
            },
            zIndex: 2,
          }}
        >
          <CustomLeftArrow style={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
      </Box>
      {/* Review Box: shifted right to make space for left arrow */}
      <Box sx={{ position: 'absolute', left: { xs: 100, sm: 140, md: 180 }, top: '60%', transform: 'translateY(-50%)', zIndex: 5, display: 'flex', justifyContent: 'flex-start', pointerEvents: 'none', width: 'auto' }}>
        <Box sx={{ width: { xs: '100%', sm: 540, md: 700, lg: 620 }, maxWidth: '90vw', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{ width: '100%', position: 'relative' }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: 540, md: 700, lg: 620 },
                  minHeight: { xs: 180, md: 170, lg: 170 },
                  background: "rgba(255,255,255,0.10)",
                  border: "1.5px solid #e0d6c3",
                  boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
                  p: { xs: 3, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  backdropFilter: 'blur(6px)',
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 80, md: 120, lg: 160 },
                    color: "white",
                    lineHeight: 1,
                    textAlign: "left",
                    fontFamily: "serif",
                    fontWeight: 'normal',
                    mb: 0,
                  }}
                >
                  &#8220;
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Century Gothic, Arial, sans-serif",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    fontWeight: 'normal',
                    mb: 3,
                    lineHeight: 1.6,
                    letterSpacing: "0.01em",
                    textAlign: "left",
                    mt: -1.5,
                  }}
                >
                  {reviews[index].text}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "BaketFashion-DemoVersion-Regular, serif",
                    fontSize: { xs: "1.3rem", md: "2rem" },
                    fontWeight: 'normal',
                    letterSpacing: "0.01em",
                    textAlign: "left",
                  }}
                >
                  {reviews[index].author}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
      {/* Right Arrow Button: left side of the ring image, vertically centered */}
      <Box sx={{ position: 'absolute', right: { xs: 100, sm: 140, md: 180 }, top: '65%', transform: 'translateY(-50%)', zIndex: 6, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pointerEvents: 'auto' }}>
        <IconButton
          onClick={() => paginate(1)}
          sx={{
            color: "#fff",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "50%",
            width: 110,
            height: 110,
            boxShadow: 'none',
            border: 'none',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'rgba(255,255,255,0.22)',
            },
            '&:active': {
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent',
            },
            '&:focus': {
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent',
            },
            zIndex: 2,
          }}
        >
          <CustomRightArrow style={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
      </Box>
      {/* Right: Ring Image (static) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "relative",
          minHeight: 300,
          mt: { xs: 16, md: 24, lg: 32 },
          mx: { xs: "auto", md: 0 },
        }}
      >
        <Box
          component="img"
          src={ring}
          alt="Gold Ring"
          sx={{
            width: { xs: 250, sm: 400, md: 600, lg: 850 },
            height: "auto",
            objectFit: "contain",
            zIndex: 2,
            filter: "drop-shadow(0 8px 32px #0006)",
            mb: { xs: 0, md: 15, lg: 20 },
          }}
        />
      </Box>
    </Box>
  );
}
