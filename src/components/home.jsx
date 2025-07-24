// "use client"

// import React, { useState, useRef, useEffect } from "react"
// import main1 from "../assets/main1.png"
// import main2 from "../assets/main2.png"
// import main3 from "../assets/main3.png"
// import main4 from "../assets/main4.png"
// import vector1 from "../assets/Vector 1.png"
// import star from "../assets/stars.png"
// import model1 from "../assets/model1.png"
// import model2 from "../assets/model2.png"
// import model3 from "../assets/model3.png"
// import card1 from "../assets/card1.png"
// import card2 from "../assets/card2.png"
// import card3 from "../assets/card3.png"
// import card4 from "../assets/card4.png"
// import card5 from "../assets/card5.png"
// import ResponsiveAppBar from "./nav"
// import { Box, Typography, Button } from "@mui/material"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Pagination } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import secondarybg from "../assets/secondarybg.png"

// export default function Home() {
//   const [bgImage, setBgImage] = useState("main1")
//   const [imagesLoaded, setImagesLoaded] = useState(false)
//   const [hoveredCard, setHoveredCard] = useState(null)
//   const marqueeContainerRef = useRef(null)
//   const marqueeTextRef = useRef(null)
//   const [marqueeDistance, setMarqueeDistance] = useState(0)
//   const [isCollectionHovered, setIsCollectionHovered] = useState(false)

//   // Jewelry data
//   const jewelryItems = [
//     {
//       image: card1,
//       title: "Elegant Gold Earrings",
//       price: "$850",
//       description: "Handcrafted Brazilian gold earrings with intricate detailing and premium finish.",
//     },
//     {
//       image: card2,
//       title: "Classic Gold Necklace",
//       price: "$1200",
//       description: "Timeless gold necklace featuring traditional Brazilian craftsmanship and modern elegance.",
//     },
//     {
//       image: card3,
//       title: "Statement Gold Ring",
//       price: "$650",
//       description: "Bold statement ring crafted from finest Brazilian gold with contemporary design.",
//     },
//     {
//       image: card4,
//       title: "Luxury Gold Bracelet",
//       price: "$950",
//       description: "Sophisticated bracelet combining traditional techniques with modern luxury appeal.",
//     },
//     {
//       image: card5,
//       title: "Designer Gold Pendant",
//       price: "$750",
//       description: "Unique pendant design showcasing the artistry of Brazilian gold jewelry making.",
//     },
//   ]

//   // Preload all images
//   React.useEffect(() => {
//     const imagePromises = [main1, main2, main3, main4].map((src) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image()
//         img.onload = resolve
//         img.onerror = reject
//         img.src = src
//       })
//     })

//     Promise.all(imagePromises)
//       .then(() => setImagesLoaded(true))
//       .catch((err) => console.error("Error loading images:", err))
//   }, [])

//   useEffect(() => {
//     function updateDistance() {
//       if (marqueeContainerRef.current && marqueeTextRef.current) {
//         const containerWidth = marqueeContainerRef.current.offsetWidth;
//         const textWidth = marqueeTextRef.current.offsetWidth;
//         setMarqueeDistance(containerWidth - textWidth);
//       }
//     }
//     updateDistance();
//     window.addEventListener("resize", updateDistance);
//     return () => window.removeEventListener("resize", updateDistance);
//   }, []);

//   const getBackgroundImage = (imageType) => {
//     const images = {
//       main1,
//       main2,
//       main3,
//       main4,
//     }
//     return images[imageType]
//   }

//   return (
//     <>
//       <div style={{ height: "100vh", width: "100%", position: "relative", minHeight: "983px"  }}>
//         {/* Background Images */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${main1})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             opacity: bgImage === "main1" ? 1 : 0,
//             transition: "opacity 0.3s ease-in-out",
//             zIndex: 1,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${main2})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             opacity: bgImage === "main2" ? 1 : 0,
//             transition: "opacity 0.3s ease-in-out",
//             zIndex: 1,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${main3})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             opacity: bgImage === "main3" ? 1 : 0,
//             transition: "opacity 0.3s ease-in-out",
//             zIndex: 1,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${main4})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             opacity: bgImage === "main4" ? 1 : 0,
//             transition: "opacity 0.3s ease-in-out",
//             zIndex: 1,
//           }}
//         />

//         <ResponsiveAppBar />

//         {/* Center Text Container */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "0",
//             right: "0",
//             transform: "translateY(-50%)",
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 2,
//             width: "100%",
//             px: { xs: 2, sm: 3, md: 4 },
//             gap: { xs: "20px", sm: "25px", md: "30px", lg: "40px" },
//             maxHeight: { xs: "60vh", sm: "50vh", md: "auto" },
//             overflow: "visible",
//           }}
//         >
//           {/* Text Items */}
//           <Box
//             component="p"
//             sx={{
//               width: {
//                 xs: "calc(100% - 40px)",
//                 sm: "calc(50% - 12.5px)",
//                 md: "calc(25% - 22.5px)",
//                 lg: "calc(25% - 30px)",
//               },
//               fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
//               color: "white",
//               margin: "0",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               padding: { xs: "12px 20px", sm: "15px 25px" },
//               userSelect: "none",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               textAlign: "left",
//               lineHeight: "1.3",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//             onMouseEnter={() => setBgImage("main2")}
//             onMouseLeave={() => setBgImage("main1")}
//           >
//             Timeless
//             <br />
//             Classics
//             <br />
//             2024
//           </Box>

//           <Box
//             component="p"
//             sx={{
//               width: {
//                 xs: "calc(100% - 40px)",
//                 sm: "calc(50% - 12.5px)",
//                 md: "calc(25% - 22.5px)",
//                 lg: "calc(25% - 30px)",
//               },
//               fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
//               color: "white",
//               margin: "0",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               padding: { xs: "12px 20px", sm: "15px 25px" },
//               userSelect: "none",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               textAlign: "left",
//               lineHeight: "1.3",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//             onMouseEnter={() => setBgImage("main3")}
//             onMouseLeave={() => setBgImage("main1")}
//           >
//             Personalise
//             <br />
//             Perfection
//             <br />
//             2024
//           </Box>

//           <Box
//             component="p"
//             sx={{
//               width: {
//                 xs: "calc(100% - 40px)",
//                 sm: "calc(50% - 12.5px)",
//                 md: "calc(25% - 22.5px)",
//                 lg: "calc(25% - 30px)",
//               },
//               fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
//               color: "white",
//               margin: "0",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               padding: { xs: "12px 20px", sm: "15px 25px" },
//               userSelect: "none",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               textAlign: "left",
//               lineHeight: "1.3",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//             onMouseEnter={() => setBgImage("main4")}
//             onMouseLeave={() => setBgImage("main1")}
//           >
//             Statement
//             <br />
//             Elegance
//             <br />
//             2024
//           </Box>

//           <Box
//             component="p"
//             sx={{
//               width: {
//                 xs: "calc(100% - 40px)",
//                 sm: "calc(50% - 12.5px)",
//                 md: "calc(25% - 22.5px)",
//                 lg: "calc(25% - 30px)",
//               },
//               fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
//               color: "white",
//               margin: "0",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               padding: { xs: "12px 20px", sm: "15px 25px" },
//               userSelect: "none",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               textAlign: "left",
//               lineHeight: "1.3",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//             onMouseEnter={() => setBgImage("main2")}
//             onMouseLeave={() => setBgImage("main1")}
//           >
//             Brazilian
//             <br />
//             Roots
//             <br />
//             2024
//           </Box>
//         </Box>

//         <Typography
//           variant="h1"
//           sx={{
//             position: "absolute",
//             bottom: { xs: "20%", sm: "20%", md: "15%" },
//             left: "50%",
//             transform: "translateX(-50%)",
//             color: "white",
//             textAlign: "center",
//             fontWeight: "bold",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             zIndex: 10,
//             fontSize: { xs: "1.2rem", sm: "2.5rem", md: "4rem", lg: "6rem" },
//             whiteSpace: { xs: "normal", md: "nowrap" },
//             px: { xs: 1, sm: 3, md: 4 },
//           }}
//         >
//           CELEBRATE YOUR STYLE
//         </Typography>

//         <Box
//           sx={{
//             position: "absolute",
//             bottom: { xs: "8%", sm: "10%", md: "8%" },
//             left: "0",
//             right: "0",
//             display: "flex",
//             alignItems: "center",
//             gap: { xs: 1, sm: 2, md: 4 },
//             zIndex: 10,
//             px: { xs: 1, sm: 3, md: 4 },
//           }}
//         >
//           <Box
//             sx={{
//               flex: 1,
//               height: "2px",
//               backgroundColor: "white",
//               boxShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//           />
//           <Typography
//             variant="h1"
//             sx={{
//               color: "white",
//               textAlign: "center",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//               fontSize: { xs: "0.8rem", sm: "1.2rem", md: "2rem", lg: "3rem" },
//               whiteSpace: { xs: "normal", md: "nowrap" },
//             }}
//           >
//             WITH UNIQUE GOLD JEWELLERY
//           </Typography>
//           <Box
//             sx={{
//               flex: 1,
//               height: "2px",
//               backgroundColor: "white",
//               boxShadow: "2px 2px 4px rgba(0,0,0,0.8)",
//             }}
//           />
//         </Box>
//       </div>

//       {/* About Us Section */}
//       <Box
//         sx={{
//           width: "100%",
//           minHeight: { xs: "100vh", md: "100vh" },
//           backgroundColor: "#f5f3f0",
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           overflowX: "hidden",
//           px: 0,
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: "1400px",
//             mx: "auto",
//             px: { xs: 2, sm: 4, md: 6, lg: 8 },
//           }}
//         >
//           <Box
//             component="img"
//             src={vector1}
//             alt="Vector Design"
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               maxWidth: "80%",
//               maxHeight: "80%",
//               zIndex: 1,
//               objectFit: "contain",
//               opacity: 0.8,
//               filter: "brightness(0) saturate(100%)",
//             }}
//           />

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mb: { xs: 4, md: 6 },
//               zIndex: 3,
//             }}
//           >
//             <Box
//               component="img"
//               src={star}
//               alt="Star"
//               sx={{
//                 width: { xs: "40px", md: "60px" },
//                 height: { xs: "40px", md: "60px" },
//                 mb: 2,
//                 objectFit: "contain",
//               }}
//             />
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
//                 fontWeight: "400",
//                 letterSpacing: "3px",
//                 color: "#333",
//                 textAlign: "center",
//               }}
//             >
//               ABOUT US
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", lg: "row" },
//               alignItems: "center",
//               justifyContent: "center",
//               maxWidth: "1400px",
//               width: "100%",
//               gap: { xs: 4, md: 6, lg: 8 },
//               zIndex: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 flex: { lg: "0 0 60%" },
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: "100%",
//                   maxWidth: "800px",
//                   mb: { xs: 4, md: 6 },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "grid",
//                     gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
//                     gridTemplateRows: { xs: "repeat(3, 1fr)", sm: "1fr 1fr", lg: "1fr" },
//                     gap: { xs: 2, sm: 3, md: 4 },
//                     width: "100%",
//                     maxWidth: "1000px",
//                     position: "relative",
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={model1}
//                     alt="Model 1"
//                     sx={{
//                       width: "100%",
//                       height: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                       gridColumn: { xs: "1", sm: "1", lg: "1" },
//                       gridRow: { xs: "1", sm: "1", lg: "1" },
//                       alignSelf: { lg: "end" },
//                       transform: { lg: "translateY(20px)" },
//                     }}
//                   />
//                   <Box
//                     component="img"
//                     src={model2}
//                     alt="Model 2"
//                     sx={{
//                       width: "100%",
//                       height: { xs: "300px", sm: "400px", md: "450px", lg: "600px" },
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                       gridColumn: { xs: "1", sm: "2", lg: "2" },
//                       gridRow: { xs: "2", sm: "1 / 3", lg: "1" },
//                     }}
//                   />
//                   <Box
//                     component="img"
//                     src={model3}
//                     alt="Model 3"
//                     sx={{
//                       width: "100%",
//                       height: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                       gridColumn: { xs: "1", sm: "1", lg: "3" },
//                       gridRow: { xs: "3", sm: "2", lg: "1" },
//                       alignSelf: { lg: "start" },
//                       transform: { lg: "translateY(-20px)" },
//                     }}
//                   />
//                 </Box>
//               </Box>

//               <Button
//                 sx={{
//                   backgroundColor: "#000",
//                   marginBottom:'50px',
//                   color: "white",
//                   px: { xs: 4, md: 6 },
//                   py: { xs: 1.5, md: 2 },
//                   fontSize: { xs: "0.9rem", md: "1rem" },
//                   fontWeight: "400",
//                   letterSpacing: "1px",
//                   borderRadius: "0",
//                   textTransform: "none",
//                   "&:hover": {
//                     backgroundColor: "#333",
//                   },
//                 }}
//               >
//                 Read More
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         <Box
//           ref={marqueeContainerRef}
//           sx={{
//             position: "absolute",
//             bottom: { xs: "20px", md: "40px" },
//             left: 0,
//             width: "100dvw",
//             overflow: "hidden",
//             zIndex: 1,
//             background: "transparent",
//             height: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
//             display: "flex",
//             alignItems: "center",
//             py: { xs: 1, md: 2 },
//           }}
//         >
//           <Typography
//             ref={marqueeTextRef}
//             sx={{
//               display: "inline-block",
//               whiteSpace: "nowrap",
//               fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "8rem" },
//               fontWeight: "300",
//               color: "black",
//               fontFamily: "serif",
//               lineHeight: 1,
//               my: { xs: 1, md: 2 },
//               animation: marqueeDistance !== 0 ? `marqueeMove 4s linear infinite alternate` : "none",
//               '@keyframes marqueeMove': {
//                 '0%': { transform: 'translateX(0)' },
//                 '100%': { transform: `translateX(${marqueeDistance}px)` },
//               },
//             }}
//           >
//             Elegance in Every Detail, Luxury in Every Detail
//           </Typography>
//         </Box>
//       </Box>

//       {/* Swiper Jewelry Showcase Section */}
//       <Box
//         sx={{
//           width: "100%",
//           position: "relative",
//           left: "50%",
//           right: "50%",
//           marginLeft: "-50vw",
//           marginRight: "-50vw",
//           py: 0,
//           background: "#fff",
//         }}
//       >
//         <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={0} // No gaps between images
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             pagination={{
//               clickable: true,
//               el: ".swiper-pagination",
//             }}
//             style={{
//               height: "auto",
//               paddingBottom: "60px", // Space for pagination
//             }}
//             breakpoints={{
//               320: { slidesPerView: 1 }, // Mobile: 1 image
//               640: { slidesPerView: 2 }, // Tablet: 2 images
//               960: { slidesPerView: 3 }, // Medium: 3 images
//               1280: { slidesPerView: 4 }, // Desktop: 4 images
//             }}
//           >
//             {jewelryItems.map((item, idx) => (
//               <SwiperSlide
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   position: "relative",
//                 }}
//               >
//                 <Box
//                   onMouseEnter={() => setHoveredCard(idx)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   sx={{
//                     position: "relative",
//                     width: "100%",
//                     height: { xs: "400px", sm: "500px", md: "600px" },
//                     cursor: "pointer",
//                     transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                     transform: hoveredCard === idx ? "translateY(-20px)" : "translateY(0)",
//                   }}
//                 >
//                   {/* Main Image */}
//                   <Box
//                     component="img"
//                     src={item.image}
//                     alt={item.title}
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       display: "block",
//                       boxShadow: hoveredCard === idx ? "0 20px 40px rgba(0,0,0,0.3)" : "0 10px 25px rgba(0,0,0,0.15)",
//                       transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                     }}
//                   />

//                   {/* Product Details Overlay */}
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: hoveredCard === idx ? "-100px" : "-80px",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                     //   backgroundColor: "rgba(255, 255, 255, 0.95)",
//                       backdropFilter: "blur(10px)",
//                       borderRadius: "12px",
//                     //   p: 3,
//                       minWidth: "280px",
//                       maxWidth: "90%",
//                       textAlign: "center",
//                       opacity: hoveredCard === idx ? 1 : 0,
//                       visibility: hoveredCard === idx ? "visible" : "hidden",
//                       transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                       boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//                       zIndex: 10,
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontSize: { xs: "1.1rem", md: "1.3rem" },
//                         fontWeight: "600",
//                         color: "#333",
//                         mb: 1,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: { xs: "1.2rem", md: "1.4rem" },
//                         fontWeight: "700",
//                         color: "#d4af37",
//                         mb: 2,
//                       }}
//                     >
//                       {item.price}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: { xs: "0.85rem", md: "0.9rem" },
//                         color: "#666",
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <Box
//             className="swiper-button-prev"
//             sx={{
//               position: "absolute",
//               left: "20px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 10,
//               width: "50px",
//               height: "50px",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               color: "black",
//               fontSize: "20px",
//               "&:hover": {
//                 backgroundColor: "rgba(0,0,0,0.7)",
//               },
//               "&::after": {
//                 fontSize: "20px",
//                 fontWeight: "bold",
//               },
//             }}
//           />

//           <Box
//             className="swiper-button-next"
//             sx={{
//               position: "absolute",
//               right: "20px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 10,
//               width: "50px",
//               height: "50px",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               color: "white",
//               fontSize: "20px",
//               "&:hover": {
//                 backgroundColor: "rgba(0,0,0,0.7)",
//               },
//               "&::after": {
//                 fontSize: "20px",
//                 fontWeight: "bold",
//               },
//             }}
//           />

//           {/* Custom Pagination */}
//           <Box
//             className="swiper-pagination"
//             sx={{
//               position: "absolute",
//               bottom: "20px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               display: "flex",
//               justifyContent: "center",
//               gap: 1,
//               "& .swiper-pagination-bullet": {
//                 backgroundColor: "rgba(255,255,255,0.5)",
//                 opacity: 1,
//               },
//               "& .swiper-pagination-bullet-active": {
//                 backgroundColor: "white",
//               },
//             }}
//           />
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: "100vh", md: "3171px" },
//           backgroundImage: `url(${secondarybg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           position: "relative",
//           m: 0,
//           p: 0,
//         }}
//         onMouseEnter={() => setIsCollectionHovered(true)}
//         onMouseLeave={() => setIsCollectionHovered(false)}
//       >
//         {isCollectionHovered ? (
//           <>
//             <Typography
//               sx={{
//                 position: "absolute",
//                 top: "70px",
//                 left: 0,
//                 fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "10rem" },
//                 fontWeight: "bold",
//                 color: "black",
//                 zIndex: 2,
//                 pl: { xs: 2, md: 8 },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//               }}
//               variant="h1"
//             >
//               Colle
//             </Typography>
//             <Typography
//               sx={{
//                 position: "absolute",
//                 top: "70px",
//                 right: 0,
//                 fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "10rem" },
//                 fontWeight: "bold",
//                 color: "black",
//                 zIndex: 2,
//                 pr: { xs: 2, md: 8 },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//               }}
//               variant="h1"
//             >
//               ction
//             </Typography>
//           </>
//         ) : (
//           <Typography
//             sx={{
//               paddingTop: "70px",
//               fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "10rem" },
//               fontWeight: "bold",
//               color: "black",
//               zIndex: 2,
//               textAlign: "center",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//             }}
//             variant="h1"
//           >
//             Collection
//           </Typography>
          
//         )}
//       <Box
//   sx={{
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     mt: { xs: 2, md: 4 },
//   }}
// >
//   <Typography
//     variant="body1"
//     sx={{
//       maxWidth: { xs: "90%", sm: "80%", md: "600px" },
//       textAlign: "center",
//       fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
//       color: "black",
//       mt: 0,
//       mb: 2,
//       lineHeight: 1.4,
//     //   wordBreak: "break-word",
      
//     }}
//   >
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, sapien sed tempus euismod, dui sapien ultricies erat, bibendum porta dolor odio nec velit.
//   </Typography>
// </Box>
//       </Box>
//     </>
//   )
// }
