'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FoodOrbit from "./Components/FoodOrbit/FoodOrbit";

import { useRef, useState } from "react";
export default function Home() {
  const orbitRef = useRef(null);
  const dishes = [
    {
      name: "Italian Cusinie",
      image: "/dishes/Italian.png",
      color: "#F45E5E",
    },
    {
      name: "Mexican Cusinie",
      image: "/dishes/Mexican.png",
      color: "#F4A261",
    },
    {
      name: "Indian Cusinie",
      image: "/dishes/Thalli.png",
      color: "#DDB892",
    },
    {
      name: "French Cusinie",
      image: "/dishes/yummi.png",
      color: "#FFD6A5",
    },
    {
      name: "Healthy Salad",
      image: "/dishes/salad.png",
      color: "#A7C957",
    },
    {
      name: "South Indian Cusinie",
      image: "/dishes/simpleThali.png",
      color: "#F7D297",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeDish = dishes[activeIndex];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">


        <div
          className="absolute -top-125 -right-50 w-391 h-275 rounded-b-full transition-all duration-500"
          style={{
            backgroundColor: activeDish.color,
          }}
        />

        <div className="absolute right-70  top-55 z-20">
          <FoodOrbit
            ref={orbitRef}
            dishes={dishes}
            activeIndex={activeIndex}
          />
        </div>


        <div className="relative z-30">
          <Navbar />
          <Hero
            orbitRef={orbitRef}
            dishes={dishes}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

      </main>
    </>
  );
}
