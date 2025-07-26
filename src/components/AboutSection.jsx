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
                        left: { xs: 10, md: 80 },
                        top: { xs: 10, md: 40 },
                        width: { xs: "60vw", md: "32vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "2.3rem", sm: "3rem", md: "3.7rem", lg: "5.8rem" },
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
                {/* Images Group - Centered and Overlapping (now side by side) */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: "100%", md: "95%" },
                        maxWidth: "1800px",
                        height: { xs: 440, sm: 700, md: 960 }, // match center image height
                        gap: { xs: 2, sm: 4, md: 8 },
                        zIndex: 2,
                        mx: "auto",
                        position: "relative",
                    }}
                >
                    {/* Left image container - align image to bottom */}
                    <Box
                        sx={{
                            width: { xs: 240, sm: 340, md: 480 },
                            height: { xs: 440, sm: 700, md: 960 }, // match center image height
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            pb: { xs: 0, sm: 1, md: 16 }, // reduced padding to move image up
                            mr: { xs: -3, sm: -6, md: -10 }, // move even closer to center image
                            pt: { xs: 0, sm: 0,  }, // no top padding to move image up
                            mt: { xs: -3, sm: -6, md: -10 }, // even more negative margin to pull image up more
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 180, sm: 260, md: 340 },
                                height: { xs: 240, sm: 330, md: 450 },
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
                            width: { xs: 520, sm: 720, md: 700 },
                            height: { xs: 440, sm: 700, md: 900 },
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
                            width: { xs: 240, sm: 340, md: 480 },
                            height: { xs: 440, sm: 700, md: 960 }, // match center image height
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            pt: { xs: 4, sm: 8, md: 40}, // push image further down
                            pb: { xs: 1, sm: 2,  }, // add bottom padding to move image down
                            ml: { xs: -2, sm: -4, md: -10 }, // move even closer to center image
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 180, sm: 260, md: 340 },
                                height: { xs: 240, sm: 330, md: 450 },
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
                        right: { xs: -40, md: -120 },
                        bottom: { xs: 40, md: 66 },
                        width: { xs: "90vw", md: "40vw" },
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.05rem", md: "1.8rem" },
                            color: "#222",
                            // lineHeight: 1.7,
                            // fontStyle: "italic",
                            textAlign: { xs: "right", md: "left" },
                            // textShadow: "0 2px 8px #fff8",
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