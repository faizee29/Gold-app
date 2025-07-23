import React from "react"
import star from "../assets/stars.png"
import model1 from "../assets/model1.png"
import model2 from "../assets/model2.png"
import model3 from "../assets/model3.png"
import vector1 from "../assets/Vector 1.png"
import { Box, Typography, Button } from "@mui/material"

export default function AboutSection({ isBrownBgActive }) {
    return (
        <Box
            sx={{
                maxWidth: "100vw",
                minHeight: "100vh",
                backgroundColor: isBrownBgActive ? "#D2B49C" : "#f5f3f0",
                transition: "background 0.4s",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflowX: "hidden",
                py: { xs: 4, md: 8 },
                px: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
        >
            {/* Decorative Vector Image Background */}
            <Box
                component="img"
                src={vector1}
                alt="Decorative Vector"
                sx={{
                    position: "absolute",
                    left: { xs: '2%', md: '5%' },
                    bottom: 0,
                    width: { xs: '100%', md: '90%' },
                    objectFit: 'contain',
                    pointerEvents: "none",
                    userSelect: "none",
                    // opacity: 0.18,
                    // zIndex: 1,
                }}
            />

            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: { xs: 4, md: 6 },
                    zIndex: 3,
                }}
            >
                <Box
                    component="img"
                    src={star}
                    alt="Star"
                    sx={{
                        width: { xs: "25px", md: "35px" },
                        height: { xs: "25px", md: "35px" },
                        mb: 1,
                        objectFit: "contain",
                    }}
                />
                <Typography
                    sx={{
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.4rem" },
                        fontWeight: 'normal',
                        letterSpacing: "2px",
                        color: "#333",
                        textAlign: "center",
                        fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                    }}
                >
                    ABOUT US
                </Typography>
            </Box>

            {/* Main Content Container - Overlapping Images and Text */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1600px",
                    minHeight: { xs: 400,  sm: 600, md: 800 },
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    mb: { xs: 4, md: 6 },
                    zIndex: 2,
                }}
            >
                {/* Heading - Overlapping only center image, not left image */}
                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: 0, md: 60 },
                        top: { xs: 10, md: 40 },
                        width: { xs: "60vw", md: "32vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "2.3rem", sm: "3rem", md: "3.7rem", lg: "5.6rem" },
                            fontWeight: 'normal',
                            color: "#23322d",
                            lineHeight: 1.13,
                            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                            // textShadow: "0 2px 8px #fff8",
                            textAlign: 'left',
                        }}
                    >
                        Where Brazilian
                        <br />
                        Elegance Meets
                        <br />
                        Your Style.
                    </Typography>
                </Box>
                {/* Images Group - Centered and Overlapping */}
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "100%", md: "80%" },
                        maxWidth: "100vw",
                        height: { xs: 400, sm: 520, md: 650 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        mx: "auto",
                    }}
                >
                    {/* Left small image - further down below heading */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: { xs: 0, md: 60 },
                            top: { xs: 260, md: 360 },
                            width: { xs: 200, sm: 270, md: 360 },
                            height: { xs: 220, sm: 300, md: 400 },
                            // borderRadius: "16px",
                            boxShadow: 4,
                            zIndex: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={model1}
                            alt="Model 1"
                            sx={{
                              
                                width: '100%',
                                height: '100%',
                                objectFit: "cover",
                                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                },
                                display: 'block',
                            }}
                        />
                    </Box>
                    {/* Center main image - much larger */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: "50%",
                            top: { xs: 0, md: 0 },
                            transform: "translateX(-50%)",
                            width: { xs: 320, sm: 440, md: 600 },
                            height: { xs: 420, sm: 600, md: 800 },
                            // borderRadius: "24px",
                            boxShadow: 8,
                            zIndex: 3,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={model2}
                            alt="Model 2"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: "cover",
                                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                },
                                display: 'block',
                            }}
                        />
                    </Box>
                    {/* Right image */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: { xs: 0, md: 60 },
                            top: { xs: 50, md: 80 },
                            width: { xs: 180, sm: 250, md: 360 },
                            height: { xs: 280, sm: 400, md: 480 },
                            // borderRadius: "16px",
                            boxShadow: 4,
                            zIndex: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={model3}
                            alt="Model 3"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: "cover",
                                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                },
                                display: 'block',
                            }}
                        />
                    </Box>
                </Box>
                {/* Paragraph - Overlapping only center image, not right image */}
                <Box
                    sx={{
                        position: "absolute",
                        right: { xs: 0, md: 130 },
                        bottom: { xs: 0, md: 0 },
                        width: { xs: "55vw", md: "28vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.05rem", md: "1.6rem" },
                            color: "#222",
                            lineHeight: 1.7,
                            fontStyle: "italic",
                            textAlign: { xs: "right", md: "left" },
                            // textShadow: "0 2px 8px #fff8",
                        }}
                    >
                        Lorem Ipsum Dolor Sit Amet Consectetur Sus. Pendisse Tempor Augue Tristique Ultrices Sed. Enim Placerate Mg Consectetur Sus Pendisse. Tempor Augueuis Tempus Viva Mus Vae Hen. Oreni Cras Faucibus.
                    </Typography>
                </Box>
            </Box>
            {/* Read More Button - centered below the images set, outside the relative Box */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: { xs: 2, md: 4 }, zIndex: 3 }}>
                <Button
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        px: { xs: 5, md: 9 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: "0.8rem", md: "1.2rem" },
                        fontWeight: "400",
                        letterSpacing: "1px",
                        borderRadius: "0",
                        textTransform: "none",
                        fontFamily: 'BaketFashion-DemoVersion-Regular, serif',

                        boxShadow: 2,
                        "&:hover": {
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Read More
                </Button>
            </Box>
        </Box>
    )
}