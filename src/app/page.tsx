"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import { images } from "@/utils/constants";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = images[activeImage];

  const handleSliderChange = (newActiveImage: number) => {
    setActiveImage(newActiveImage);
  };

  return (
    <main
      className="w-full min-h-screen mx-auto grid place-items-center"
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the opacity as needed
        }}
      >
        
        <Slider activeImage={activeImage} onChange={handleSliderChange} />
      </div>
    </main>
  );
}

