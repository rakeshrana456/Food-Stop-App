import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
export default function Home() {
  return (
    <>  
     <main className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">
  <div className="absolute top-[-500px] left-[600px] w-[1400px] h-[1100px] bg-[#E8C88B] rounded-b-full" />

  <div className="relative z-10">
    <Navbar />
    <Hero />
  </div>
</main>
    </>
  );
}
