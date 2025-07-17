import React, { useRef, useEffect, useState } from "react"
import secondarybg from "../assets/secondarybg.png"
import { Box, Typography } from "@mui/material"
import card6 from "../assets/card6.png"
import card7 from "../assets/card7.png"
import card8 from "../assets/card8.png"
import vector1 from "../assets/Vector 1.png"
import vector2 from "../assets/Vector2.png"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CollectionSection({ isCollectionHovered, setIsCollectionHovered, isBrownBgActive }) {
  // Responsive image sizes for cards
  const cardImgWidth = { xs: 220, sm: 320, md: 500, lg: 700 };
  const cardImgHeight = { xs: 220, sm: 320, md: 500, lg: 700 };
  // Zoom-in effect for card images (applied to container)
  const cardImgZoomBoxSx = {
    position: 'relative',
    width: cardImgWidth,
    height: cardImgHeight,
    overflow: 'hidden',
  };
  // Corner cap style for image hover
  const cornerCapSx = (corner) => ({
    position: 'absolute',
    width: 36,
    height: 36,
    border: 'none',
    pointerEvents: 'none',
    zIndex: 3,
    ...(corner === 'tl' && { top: 0, left: 0, borderTop: '2px solid #111', borderLeft: '2px solid #111', borderTopLeftRadius: 4 }),
    ...(corner === 'tr' && { top: 0, right: 0, borderTop: '2px solid #111', borderRight: '2px solid #111', borderTopRightRadius: 4 }),
    ...(corner === 'bl' && { bottom: 0, left: 0, borderBottom: '2px solid #111', borderLeft: '2px solid #111', borderBottomLeftRadius: 4 }),
    ...(corner === 'br' && { bottom: 0, right: 0, borderBottom: '2px solid #111', borderRight: '2px solid #111', borderBottomRightRadius: 4 }),
    opacity: 0,
    transition: 'opacity 0.3s',
  });

  // --- Sticky Split Heading Logic ---
  const sectionRef = useRef(null)
  const leftHeadingRef = useRef(null)
  const rightHeadingRef = useRef(null)
  const [isSplit, setIsSplit] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  // Split distance: how far the headings move apart (adjust as needed)
  const splitDistance = {
    xs: 40,
    sm: 80,
    md: 300,
    lg: 400,
  }

  // Handle hover
  const handleMouseEnter = () => {
    setIsCollectionHovered(true)
    setIsSplit(true)
  }
  const handleMouseLeave = () => {
    setIsCollectionHovered(false)
    setIsSplit(false)
  }

  // GSAP ScrollTrigger for split on scroll and fixed heading
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom center", // heading stops being fixed when section's bottom reaches center of viewport
        onEnter: () => setIsFixed(true),
        onLeave: () => setIsFixed(false),
        onEnterBack: () => setIsFixed(true),
        onLeaveBack: () => setIsFixed(false),
      })
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsSplit(true),
        onLeave: () => setIsSplit(false),
        onEnterBack: () => setIsSplit(true),
        onLeaveBack: () => setIsSplit(false),
      })
    }, section)
    return () => ctx.revert()
  }, [])

  // Animate split with GSAP
  useEffect(() => {
    const left = leftHeadingRef.current
    const right = rightHeadingRef.current
    if (!left || !right) return
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power3.inOut" } })
    if (isSplit) {
      tl.to(left, { x: -splitDistance.lg, opacity: 1 }, 0)
        .to(right, { x: splitDistance.lg, opacity: 1 }, 0)
    } else {
      tl.to(left, { x: 0, opacity: 1 }, 0)
        .to(right, { x: 0, opacity: 1 }, 0)
    }
    return () => tl.kill()
  }, [isSplit])

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        minHeight: { xs: "100vh", md: "1250px" },
        background: isBrownBgActive ? "#D2B49C" : `url(${secondarybg})`,
        backgroundSize: isBrownBgActive ? "auto" : "cover",
        backgroundPosition: "center",
        backgroundRepeat: isBrownBgActive ? "repeat" : "no-repeat",
        position: "relative",
        m: 0,
        p: 0,
        transition: "background 0.4s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative Vector Image Background */}
      <Box
        component="img"
        src={vector2}
        alt="Decorative Vector"
        sx={{
          position: "absolute",
          top: -80,
          left: 0,
          width: { xs: '100%', md: '100%' },
          height: '100%',
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      {/* Sticky Animated Collection Heading */}
      <Box
        sx={{
          position: isFixed ? 'fixed' : 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: { xs: 120, md: 180 },
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          background: 'transparent',
          transition: 'position 0.3s',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            ref={leftHeadingRef}
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '8rem', lg: '10rem' },
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              fontWeight: 'normal',
              color: 'black',
              pl: { xs: 2, md: 8 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              letterSpacing: '0.02em',
              transition: 'none',
              opacity: 1,
              zIndex: 21,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            variant="h1"
          >
            Colle
          </Typography>
          <Typography
            ref={rightHeadingRef}
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '8rem', lg: '10rem' },
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              fontWeight: 'normal',
              color: 'black',
              pr: { xs: 2, md: 8 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              letterSpacing: '0.02em',
              transition: 'none',
              opacity: 1,
              zIndex: 21,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            variant="h1"
          >
            ction
          </Typography>
        </Box>
      </Box>
      {/* Spacer to prevent heading overlap */}
      <Box sx={{ height: { xs: 120, md: 180 } }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: "90%", sm: "80%", md: "600px" },
            textAlign: "center",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            color: "black",
            mt: 0,
            mb: 2,
            lineHeight: 1.4,
            textJustify: "inter-word",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, sapien sed tempus euismod, dui sapien ultricies erat, bibendum porta dolor odio nec velit.
        </Typography>
      </Box>
      {/* Stacked Cards Section */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          mt: { xs: 2, md: 6 },
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* Men's Card */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              ...cardImgZoomBoxSx,
              '&:hover .corner-cap': { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={card6}
              alt="Men's Collection"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
            {/* Corner Caps */}
            <Box className="corner-cap" sx={{ ...cornerCapSx('tl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('tr'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('bl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('br'), zIndex: 3 }} />
          </Box>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: '2rem', md: '5rem' },
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              color: '#111',
              textAlign: 'center',
            }}
          >
            Men's
          </Typography>
        </Box>
        {/* Women's Card */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              ...cardImgZoomBoxSx,
              '&:hover .corner-cap': { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={card7}
              alt="Women's Collection"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
            {/* Corner Caps */}
            <Box className="corner-cap" sx={{ ...cornerCapSx('tl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('tr'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('bl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('br'), zIndex: 3 }} />
          </Box>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: '2rem', md: '5rem' },
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              color: '#111',
              textAlign: 'center',
            }}
          >
            Women's
          </Typography>
        </Box>
        {/* Baby Card */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              ...cardImgZoomBoxSx,
              '&:hover .corner-cap': { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={card8}
              alt="Baby Collection"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
            {/* Corner Caps */}
            <Box className="corner-cap" sx={{ ...cornerCapSx('tl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('tr'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('bl'), zIndex: 3 }} />
            <Box className="corner-cap" sx={{ ...cornerCapSx('br'), zIndex: 3 }} />
          </Box>
          <Typography
            sx={{
                paddingBottom:'40px',
              mt: 8,
              fontSize: { xs: '2rem', md: '5rem' },
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              color: '#111',
              textAlign: 'center',
            }}
          >
            Baby
          </Typography>
        </Box>
      </Box>
    </Box>
  )
} 