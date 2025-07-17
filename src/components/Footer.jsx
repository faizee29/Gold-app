import React from "react";
import { Box, Typography, Link } from "@mui/material";
import headerlogo from "../assets/headerlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: 2,
        px: { xs: 2, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "center" },
          justifyContent: { xs: "center", md: "space-between" },
          maxWidth: 1600,
          mx: "auto",
          pb: { xs: 4, md: 6 },
          borderBottom: "1px solid #333",
        }}
      >
        {/* Quick Links */}
        <Box
          sx={{
            flex: 1,
            minWidth: 200,
            mb: { xs: 4, md: 0 },
            pr: { md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 0, md: 6 },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "BaketFashion-DemoVersion-Regular, serif",
                  fontSize: { xs: "2rem", md: "2.2rem" },
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Quick Links
              </Typography>
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Home
              </Link>
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                About Us
              </Link>
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Collections
              </Link>
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Our Products
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                mt: { xs: 4, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Reviews
              </Link>
              <Link
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  display: "block",
                  mb: 1,
                  fontFamily: "Century Gothic, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Contact Us
              </Link>
            </Box>
          </Box>
        </Box>
        {/* Center Logo and Socials */}
        <Box
          sx={{
            flex: 1,
            minWidth: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: { md: "1px solid #333" },
            borderRight: { md: "1px solid #333" },
            px: { md: 6 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={headerlogo}
            alt="GoldFactory Jewelry"
            sx={{ width: 150, height: 150, mb: 2, mx: { xs: 'auto', md: 0 } }}
          />
          <Typography
            sx={{
              fontFamily: "BaketFashion-DemoVersion-Regular, serif",
              fontSize: { xs: "2rem", md: "2.4rem" },
              mb: 2,
              color: "#D2B49C",
              textAlign: "center",
            }}
          >
            GoldFactory Jewelry
          </Typography>
          <Box sx={{ display: "flex", gap: 3, mb: 2, justifyContent: 'center' }}>
            <Link sx={{ color: "white" }}>
              <FacebookIcon fontSize="large" />
            </Link>
            <Link sx={{ color: "white" }}>
              <InstagramIcon fontSize="large" />
            </Link>
            <Link sx={{ color: "white" }}>
              <XIcon fontSize="large" />
            </Link>
            <Link sx={{ color: "white" }}>
              <YouTubeIcon fontSize="large" />
            </Link>
          </Box>
        </Box>
        {/* Other Links */}
        <Box sx={{ flex: 1, minWidth: 200, pl: { md: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center', mx: { xs: 'auto', md: 0 } }}>
          <Box sx={{ width: 180, textAlign: 'left' }}>
            <Typography
              sx={{
                fontFamily: "BaketFashion-DemoVersion-Regular, serif",
                fontSize: { xs: "2rem", md: "2.2rem" },
                mb: 2,
              }}
            >
              Other Links
            </Typography>
            <Link
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                display: "block",
                mb: 1,
                fontFamily: "Century Gothic, sans-serif",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                display: "block",
                mb: 1,
                fontFamily: "Century Gothic, sans-serif",
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                display: "block",
                mb: 1,
                fontFamily: "Century Gothic, sans-serif",
              }}
            >
              FAQ's
            </Link>
          </Box>
        </Box>
      </Box>
      {/* Copyright */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          pt: 3,
          color: "white",
          fontSize: "1.1rem",
          fontFamily: "Century Gothic, sans-serif",
        }}
      >
        © Copyright 2024 &nbsp;|&nbsp; Gold Factory &nbsp;|&nbsp; All Right
        Reserved.
      </Box>
    </Box>
  );
}
