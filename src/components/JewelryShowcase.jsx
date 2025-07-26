import React from "react"
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function JewelryShowcase({ jewelryItems, hoveredCard, setHoveredCard, setHomeBgColor, isBrownBgActive }) {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        py: 0,
        background: isBrownBgActive ? "#D2B49C" : "#fff",
        transition: "background 0.4s",
      }}
    >
      <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
        <Swiper
          className="jewelry-swiper"
          key={jewelryItems.length}
          modules={[Navigation]}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // pagination={{
          //   clickable: true,
          //   el: ".swiper-pagination",
          // }}
          loop={true}
          style={{
            height: "auto",
            overflow: "visible",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            960: { slidesPerView: 2. },
            1280: { slidesPerView: 3.5 },
          }}
        >
          {jewelryItems.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                height: '100%',
                overflow: 'visible',
              }}
            >
              <Box
                onMouseEnter={() => {
                  setHoveredCard(idx);
                  setHomeBgColor && setHomeBgColor("#D2B49C"); // new override
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setHomeBgColor && setHomeBgColor("#fff"); // white
                }}
                sx={{
                  position: 'relative',
                  width: "100%",
                  height: { xs: "600px", sm: "700px", md: "750px" },
                  cursor: "pointer",
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'visible',
                }}
              >
                {/* Main Image - absolutely positioned */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: "cover",
                    display: "block",
                    // boxShadow: hoveredCard === idx ? "0 20px 40px rgba(0,0,0,0.3)" : "0 10px 25px rgba(0,0,0,0.15)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredCard === idx ? "translateY(-110px)" : "translateY(0)",
                    zIndex: 2,
                  }}
                />
                {/* Product Details Card - absolutely positioned at bottom */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    bottom: -25,
                    transform: 'translateX(-50%)',
                    width: '90%',
                    minHeight: { xs: 90, md: 110 },
                    maxHeight: { xs: 120, md: 140 },
                    opacity: hoveredCard === idx ? 1 : 0,
                    visibility: hoveredCard === idx ? 'visible' : 'hidden',
                    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    // borderRadius: '12px',
                    // boxShadow: hoveredCard === idx ? '0 10px 30px rgba(0,0,0,0.12)' : 'none',
                    pointerEvents: hoveredCard === idx ? 'auto' : 'none',
                    zIndex: 1,
                    px: 2,
                    py: 1,
                    background: 'none !important',
                    backgroundColor: 'transparent !important',
                  }}
                >
                  {/* Row: Title/Description (left) and Price (right) */}
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "1.3rem", md: "2rem" },
                          fontWeight: 'normal',
                          color: "black",
                          mb: 0,
                          textAlign: 'left',
                          fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.85rem", md: "0.9rem" },
                          color: "#666",
                          lineHeight: 1.4,
                          textAlign: 'left',
                          width: '100%',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        fontWeight: 'normal',
                        color: "#000",
                        mb: 0,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                        ml: 2,
                      }}
                    >
                      {item.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <Box
          className="swiper-button-prev"
          sx={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "black",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
            "&::after": {
              fontSize: "20px",
              fontWeight: "bold",
            },
          }}
        />
        <Box
          className="swiper-button-next"
          sx={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
            "&::after": {
              fontSize: "20px",
              fontWeight: "bold",
            },
          }}
        />
        {/* Custom Pagination */}
        <Box
          className="swiper-pagination"
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            gap: 1,
            "& .swiper-pagination-bullet": {
              backgroundColor: "rgba(255,255,255,0.5)",
              opacity: 1,
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "white",
            },
          }}
        />
      </Box>
    </Box>
  )
} 