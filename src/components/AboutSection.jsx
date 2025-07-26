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
                maxWidth: "100dvw",
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
                px: { xs: 2, sm: 4, md: 6, lg: 8, xxl: 10 },
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
                    width: { xs: '100%', md: '90%', xxl: '80%' },
                    objectFit: 'contain',
                    pointerEvents: "none",
                    userSelect: "none",
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
                        width: { xs: "20px", md: "28px", xl: "32px", xxl: "35px" },
                        height: { xs: "20px", md: "28px", xl: "32px", xxl: "35px" },
                        mb: 1,
                        objectFit: "contain",
                    }}
                />
                <Typography
                    sx={{
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.1rem", xl: "1.2rem", xxl: "1.4rem" },
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
                    maxWidth: { xs: "98vw", md: "1200px", xl: "1400px", xxl: "1600px" },
                    minHeight: { xs: 320, sm: 400, md: 600, xl: 700, xxl: 800 },
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
                        left: { xs: 6, md: 40, xl: 60, xxl: 80 },
                        top: { xs: 6, md: 20, xl: 30, xxl: 40 },
                        width: { xs: "60vw", md: "32vw", xl: "30vw", xxl: "28vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.2rem", xl: "3rem", xxl: "3.7rem", xxxl: "5.8rem" },
                            fontWeight: 'normal',
                            color: "#23322d",
                            lineHeight: 1.13,
                            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
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
                {/* Images Group - Centered and Overlapping (now side by side) */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: "100%", md: "95%", xxl: "90%" },
                        maxWidth: { xs: "98vw", md: "1200px", xl: "1400px", xxl: "1800px" },
                        height: { xs: 220, sm: 320, md: 500, xl: 700, xxl: 960 },
                        gap: { xs: 1, sm: 2, md: 4, xl: 6, xxl: 8 },
                        zIndex: 2,
                        mx: "auto",
                        position: "relative",
                    }}
                >
                    {/* Left image container - align image to bottom */}
                    <Box
                        sx={{
                            width: { xs: 100, sm: 180, md: 260, xl: 340, xxl: 480 },
                            height: { xs: 160, sm: 240, md: 330, xl: 450, xxl: 960 },
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            pb: { xs: 0, sm: 1, md: 4, xl: 8, xxl: 16 },
                            mr: { xs: -1, sm: -2, md: -4, xl: -6, xxl: -10 },
                            pt: { xs: 0, sm: 0 },
                            mt: { xs: -1, sm: -2, md: -4, xl: -6, xxl: -10 },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 80, sm: 120, md: 180, xl: 260, xxl: 340 },
                                height: { xs: 100, sm: 160, md: 240, xl: 330, xxl: 450 },
                                overflow: "hidden",
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
                    </Box>
                    {/* Center main image */}
                    <Box
                        sx={{
                            width: { xs: 180, sm: 320, md: 420, xl: 600, xxl: 700 },
                            height: { xs: 160, sm: 240, md: 400, xl: 700, xxl: 900 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                overflow: "hidden",
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
                    </Box>
                    {/* Right image container - align image to top */}
                    <Box
                        sx={{
                            width: { xs: 100, sm: 180, md: 260, xl: 340, xxl: 480 },
                            height: { xs: 160, sm: 240, md: 330, xl: 450, xxl: 960 },
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            pt: { xs: 2, sm: 4, md: 8, xl: 20, xxl: 40 },
                            pb: { xs: 1, sm: 2 },
                            ml: { xs: -1, sm: -2, md: -4, xl: -6, xxl: -10 },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 80, sm: 120, md: 180, xl: 260, xxl: 340 },
                                height: { xs: 100, sm: 160, md: 240, xl: 330, xxl: 450 },
                                overflow: "hidden",
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
                </Box>
                {/* Paragraph - Overlapping only center image, not right image */}
                <Box
                    sx={{
                        position: "absolute",
                        right: { xs: -10, md: -40, xl: -80, xxl: -120 },
                        bottom: { xs: 10, md: 30, xl: 50, xxl: 66 },
                        width: { xs: "80vw", md: "50vw", xl: "45vw", xxl: "40vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "0.8rem", md: "1.1rem", xl: "1.4rem", xxl: "1.8rem" },
                            color: "#222",
                            textAlign: { xs: "right", md: "left" },
                        }}
                    >
                        Lorem Ipsum Dolor Sit Amet Consectetur Sus.<br />
                        Pendisse Tempor Augue Tristique Ultrices Sed.<br />
                        Enim Placerate Mg Consectetur Sus Pendisse.<br />
                        Tempor Augueuis Tempus Viva Mus Vae Hen.<br />
                        Oreni Cras Faucibus.
                    </Typography>
                </Box>
            </Box>
            {/* Read More Button - centered below the images set, outside the relative Box */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: { xs: 2, md: 4 }, zIndex: 3 }}>
                <Button
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        px: { xs: 3, md: 5, xl: 7, xxl: 9 },
                        py: { xs: 0.8, md: 1.2, xl: 1.3, xxl: 1.5 },
                        fontSize: { xs: "0.7rem", md: "1rem", xl: "1.1rem", xxl: "1.2rem" },
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