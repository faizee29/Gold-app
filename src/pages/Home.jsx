import React, { useState, useRef, useEffect } from "react"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import Marquee from "../components/Marquee"
import JewelryShowcase from "../components/JewelryShowcase"
import CollectionSection from "../components/CollectionSection"
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import card5 from "../assets/card5.png"
import main1 from "../assets/main1.png"
import main2 from "../assets/main2.png"
import main3 from "../assets/main3.png"
import main4 from "../assets/main4.png"
import Reviews from "../components/Reviews"
import Signature from "../components/Signature"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
export default function Home() {
  const [bgImage, setBgImage] = useState("main1")
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const marqueeContainerRef = useRef(null)
  const marqueeTextRef = useRef(null)
  const [marqueeDistance, setMarqueeDistance] = useState(0)
  const [isCollectionHovered, setIsCollectionHovered] = useState(false)
  const [homeBgColor, setHomeBgColor] = useState("#fff");
  const [isBrownBgActive, setIsBrownBgActive] = useState(false);

  // Jewelry data
  const jewelryItems = [
    {
      image: card1,
      title: "Elegant Gold Earrings",
      price: "$850",
      description: "Handcrafted Brazilian gold earrings with intricate detailing and premium finish.",
    },
    {
      image: card2,
      title: "Classic Gold Necklace",
      price: "$1200",
      description: "Timeless gold necklace featuring traditional Brazilian craftsmanship and modern elegance.",
    },
    {
      image: card3,
      title: "Statement Gold Ring",
      price: "$650",
      description: "Bold statement ring crafted from finest Brazilian gold with contemporary design.",
    },
    {
      image: card4,
      title: "Luxury Gold Bracelet",
      price: "$950",
      description: "Sophisticated bracelet combining traditional techniques with modern luxury appeal.",
    },
    {
      image: card5,
      title: "Designer Gold Pendant",
      price: "$750",
      description: "Unique pendant design showcasing the artistry of Brazilian gold jewelry making.",
    },
  ]

  // Preload all images
  useEffect(() => {
    const imagePromises = [main1, main2, main3, main4].map((src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })
    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Error loading images:", err))
  }, [])

  useEffect(() => {
    function updateDistance() {
      if (marqueeContainerRef.current && marqueeTextRef.current) {
        const containerWidth = marqueeContainerRef.current.offsetWidth;
        const textWidth = marqueeTextRef.current.offsetWidth;
        setMarqueeDistance(containerWidth - textWidth);
      }
    }
    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, [])

  useEffect(()=> {
    console.log(homeBgColor);
    
  },[homeBgColor])

  return (
    <div style={{ background: homeBgColor, transition: "background 0.4s" }}>
      <HeroSection
        bgImage={bgImage}
        setBgImage={setBgImage}
        imagesLoaded={imagesLoaded}
        isBrownBgActive={isBrownBgActive}
      />
      <AboutSection isBrownBgActive={isBrownBgActive} />
      <Marquee
        marqueeContainerRef={marqueeContainerRef}
        marqueeTextRef={marqueeTextRef}
        marqueeDistance={marqueeDistance}
        isBrownBgActive={isBrownBgActive}
      />
      <JewelryShowcase
        jewelryItems={jewelryItems}
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
        setHomeBgColor={color => {
          setHomeBgColor(color);
          setIsBrownBgActive(color === "#D2B49C");
        }}
        isBrownBgActive={isBrownBgActive}
      />
      <CollectionSection
        isCollectionHovered={isCollectionHovered}
        setIsCollectionHovered={setIsCollectionHovered}
        isBrownBgActive={isBrownBgActive}
      />
      <Reviews/>
      <Signature/>
      <Blogs/>
      <Footer/>
    </div>
  )
} 