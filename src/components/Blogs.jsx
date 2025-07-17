import React from "react";
import { Box, Typography, Link } from "@mui/material";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";

const blogs = [
  {
    image: card9,
    title: "The Storyteller's Notebook",
    link: "#",
  },
  {
    image: card10,
    title: "Reflections on Culture",
    link: "#",
  },
  {
    image: card11,
    title: "The Creative Sociologist",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <Box sx={{ width: "100%", px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 }, bgcolor: "#fff", ml: { xs: '-1em', md: '-2em' } }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 2, md: 4 } }}>
        <Typography
          sx={{
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "5.8rem" },
            fontWeight: 'normal',
            lineHeight: 1.1,
            color: 'black',
            display: "block",
            ml: { xs: "-0.5em", sm: "-1.5em", md: "-2.5em" },
          }}
        >
          From Brazilian Roots
        </Typography>
        <Typography
          sx={{
            fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "5.8rem" },
            fontWeight: 'normal',
            lineHeight: 1.1,
            color: 'black',
            display: "block",
            ml: { xs: "0.5em", sm: "1.5em", md: "3.8em" }
          }}
        >
          to Modern Elegance
        </Typography>
      </Box>
      {/* Blog Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "start",
          justifyItems: "center",
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        {/* First Card */}
        <Box sx={{ display: "flex", flexDirection: { xs: 'column-reverse', md: 'column' }, alignItems: "flex-start", width: { xs: '100%', md: '96%' }, maxWidth: 400, mr: { xs: -2, md: -16 } }}>
          <Typography
            sx={{
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              fontSize: { xs: "2.3rem", md: "3.4rem" },
              fontWeight: 'normal',
              mb: 1,
              mt: { xs: -2, md: -2 },
              textAlign: "left",
              width: "100%",
              color:'black',
              lineHeight: 1.05,
              mr: { xs: -2, md: -2 },
            }}
          >
            {blogs[0].title}
          </Typography>
          <Link
            href={blogs[0].link}
            underline="always"
            sx={{
              color: "black",
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              mb: 2,
              textAlign: "left",
              width: "100%",
              textDecorationColor: 'black',
              mr: { xs: -2, md: 8 },
            }}
          >
            Read More
          </Link>
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              height: { xs: 370, md: 480 },
              overflow: "hidden",
              borderRadius: 0,
              mt: { xs: 2, md: 4 },
              mr: { xs: -4, md: -8 },
            }}
          >
            <Box
              component="img"
              src={blogs[0].image}
              alt={blogs[0].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
          </Box>
        </Box>
        {/* Second Card */}
        <Box sx={{ display: "flex", flexDirection: { xs: 'column-reverse', md: 'column' }, alignItems: "flex-start", width: "100%", maxWidth: 400, ml: { xs: 0, md: 3 } }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              height: { xs: 370, md: 480 },
              overflow: "hidden",
              borderRadius: 0,
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={blogs[1].image}
              alt={blogs[1].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              fontSize: { xs: "2.3rem", md: "3.4rem" },
              fontWeight: 'normal',
              mb: 1,
              mt: { xs: 2, md: 4 },
              textAlign: "left",
              width: "100%",
              color:'black',
              lineHeight: 1.05,
            }}
          >
            {blogs[1].title}
          </Typography>
          <Link
            href={blogs[1].link}
            underline="always"
            sx={{
              color: "black",
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              mb: 3,
              textAlign: "left",
              width: "100%",
              textDecorationColor: 'black',
            }}
          >
            Read More
          </Link>
        </Box>
        {/* Third Card */}
        <Box sx={{ display: "flex", flexDirection: { xs: 'column-reverse', md: 'column' }, alignItems: "flex-start", width: "100%", maxWidth: 400, ml: { xs: 0, md: -4 } }}>
          <Typography
            sx={{
              fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
              fontSize: { xs: "2.3rem", md: "3.4rem" },
              fontWeight: 'normal',
              mb: 1,
              mt: { xs: -2, md: -2 },
              textAlign: "left",
              width: "100%",
              color:'black',
              lineHeight: 1.05,
              ml: { xs: -2, md: -4 },
            }}
          >
            {blogs[2].title}
          </Typography>
          <Link
            href={blogs[2].link}
            underline="always"
            sx={{
              color: "black",
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              mb: 2,
              textAlign: "left",
              width: "100%",
              textDecorationColor: 'black',
              ml: { xs: -2, md: -4 },
            }}
          >
            Read More
          </Link>
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              height: { xs: 370, md: 480 },
              overflow: "hidden",
              borderRadius: 0,
              mt: { xs: 2, md: 4 },
              ml: { xs: -2, md: -4 },
            }}
          >
            <Box
              component="img"
              src={blogs[2].image}
              alt={blogs[2].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Explore More Button */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 6 } }}>
        <button
          style={{
            background: 'black',
            color: 'white',
            border: 'none',
            padding: window.innerWidth < 600 ? '10px 24px' : '16px 48px',
            fontSize: window.innerWidth < 600 ? '1rem' : '1.4rem',
            // fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
            fontWeight: 'normal',
            letterSpacing: '1px',
            borderRadius: 0,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.border = '1px solid black';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'black';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.border = 'none';
          }}
        >
          Explore More
        </button>
      </Box>
    </Box>
  );
} 