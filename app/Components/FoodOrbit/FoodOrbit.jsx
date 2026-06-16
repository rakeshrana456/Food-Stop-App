"use client";

import Image from "next/image";
import { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

const dishes = [
  "/dishes/Italian.png",
  "/dishes/Mexican.png",
  "/dishes/Thalli.png",
  "/dishes/yummi.png",
  "/dishes/salad.png",,
  "/dishes/simpleThali.png"
];

const FoodOrbit = forwardRef((props, ref) => {
  const orbitRef = useRef(null);

  useImperativeHandle(ref, () => ({
    rotateClockwise() {
      gsap.to(orbitRef.current, {
        rotation: "+=72",
        duration: 1,
        ease: "power2.inOut",
      });
    },

    rotateAntiClockwise() {
      gsap.to(orbitRef.current, {
        rotation: "-=72",
        duration: 1,
        ease: "power2.inOut",
      });
    },
  }));

  return (
    <div className="relative w-150 h-150">
      

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-55 h-55 rounded-full bg-orange-300 flex items-center justify-center text-xl font-semibold">
          Main Dish
        </div>
      </div>

      <div ref={orbitRef} className="absolute inset-0">

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
            strokeDasharray="12 25"
            strokeLinecap="round"
          />
        </svg>

        
        {dishes.map((dish, index) => {
          const angle = index * (360 / dishes.length);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translateY(-220px)
                `,
              }}
            >
              <div
                style={{
                  transform: `rotate(-${angle}deg)`,
                }}
              >
                <Image
                  src={dish}
                  alt={`Dish ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

FoodOrbit.displayName = "FoodOrbit";

export default FoodOrbit;