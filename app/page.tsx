'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FoodOrbit from "./Components/FoodOrbit/FoodOrbit";
import { useRef } from "react";
export default function Home() {
   const orbitRef = useRef(null);
   
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">

  
  <div className="absolute -top-125 -right-50 w-391 h-275 bg-[#E8C88B] rounded-b-full" />

  <div className="absolute right-70  top-20 z-20">
    <FoodOrbit ref={orbitRef} />
  </div>

 
  <div className="relative z-30">
    <Navbar />
    <Hero orbitRef={orbitRef} />
  </div>

</main>
    </>
  );
}
