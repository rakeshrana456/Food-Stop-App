import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FoodOrbit from "./Components/FoodOrbit/FoodOrbit";
export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">

  {/* Yellow Background */}
  <div className="absolute -top-[500px] right-[-200px] w-[1400px] h-[1100px] bg-[#E8C88B] rounded-b-full" />

  {/* Orbit */}
  <div className="absolute right-50 top-20 z-20">
    <FoodOrbit />
  </div>

  {/* Content */}
  <div className="relative z-30">
    <Navbar />
    <Hero />
  </div>

</main>
    </>
  );
}
