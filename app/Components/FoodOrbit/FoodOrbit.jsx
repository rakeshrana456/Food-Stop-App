"use client";
import Image from "next/image";
export default function FoodOrbit() {
  return (
    <>
      <div className="relative w-[600px] h-[600px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
        >
          <circle
            cx="300"
            cy="300"
            r="220"
            fill="none"
            stroke="#6B7B3E"
            strokeWidth="3"
            strokeDasharray="1 14"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Dish */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-[220px] h-[220px] rounded-full bg-orange-300 flex items-center justify-center text-xl font-semibold">
            Main Dish
          </div>
        </div>


        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full ">
            <Image
            src="/dishes/Italian.png"
            alt="Italian"
            height={200}
            width={200}
            />
          </div>
        </div>

        <div className="absolute right-20 top-32">
          <div className="w-24 h-24 rounded-full">
             <Image
            src="/dishes/Mexican.png"
            alt="Italian"
            height={200}
            width={200}
            />
          </div>
        </div>


        <div className="absolute right-20 bottom-32">
          <div className="w-24 h-24 rounded-full ">
             <Image
             className="rounded-full"
            src="/dishes/Thalli.png"
            alt="Italian"
            height={200}
            width={200}
            />
          </div>
        </div>

        <div className="absolute left-20 bottom-32">
          <div className="w-24 h-24 rounded-full ">
             <Image
             className="rounded-full"
            src="/dishes/yummi.png"
            alt="Italian"
            height={200}
            width={200}
            />
          </div>
        </div>

        {/* Top Left Plate */}
        <div className="absolute left-20 top-32">
          <div className="w-24 h-24 rounded-full ">
             <Image
            src="/dishes/salad.png"
            alt="Italian"
            height={200}
            width={200}
            />
          </div>
        </div>

      </div>
      ```
    </>
  );

}

