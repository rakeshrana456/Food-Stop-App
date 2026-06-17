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
      color: " #0056B3",
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
      name: "French Cusinie",
      image: "/dishes/yummi.png",
      color: "#FFD6A5",
    },
    {
      name: "Healthy Salad",
      image: "/dishes/salad.png",
      color: "#A7C957",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeDish = dishes[activeIndex];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">


        <div
          className="absolute -top-125 -right-50 w-391 h-275 rounded-b-full transition-all duration-500 overflow-x-hidden"
          style={{
            backgroundColor: activeDish.color,
          }}

        > <div className="absolute right-120  top-197 z-20  h-80 overflow-hidden">
            <FoodOrbit
              ref={orbitRef}
              dishes={dishes}
              activeIndex={activeIndex}
            />
          </div></div>
        <div className="absolute inset-0 flex items-center justify-center -right-186 top-50 z-20">
          <div className="w-55 h-55 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={activeDish.image}
              alt={activeDish.name}
              width={220}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
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
