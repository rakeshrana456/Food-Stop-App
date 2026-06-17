"use client";

import Image from "next/image";
import { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

type FoodOrbitProps = {
  dishes: {
    name: string;
    image: string;
    color: string;
  }[];
  activeIndex: number;
  hiddenDishes?: number[];
};

const FoodOrbit = forwardRef<any, FoodOrbitProps>(
  ({ dishes, activeIndex, hiddenDishes = [] }, ref) => {
    const dishesContainerRef = useRef(null);
    const dishRefs = useRef<(HTMLDivElement | null)[]>([]);

    useImperativeHandle(ref, () => ({
      rotateClockwise() {
        gsap.to(dishesContainerRef.current, {
          rotation: "+=72",
          duration: 1,
          ease: "power2.inOut",
        });
      },

      rotateAntiClockwise() {
        gsap.to(dishesContainerRef.current, {
          rotation: "-=72",
          duration: 1,
          ease: "power2.inOut",
        });
      },

      hideDish(index: number) {
        const dishElement = dishRefs.current[index];
        if (dishElement) {
          gsap.to(dishElement, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.in(2)",
          });
        }
      },
    }));

    const activeDish = dishes[activeIndex];
    const radius = 260;
    const centerX = 300; 
    const centerY = 300; 

    // Get only visible dishes (excluding active dish)
    const visibleDishes = dishes.filter((_, index) => index !== activeIndex);
    
    // Take only first 5 visible dishes
    const dishesToShow = visibleDishes.slice(0, 5);

    const getPositionOnArc = (index: number, totalDishes: number) => {
      // Spread 5 dishes across 360 degrees but only show on top arc
      const angleDeg = (index * (360 / totalDishes));
      const angleRad = (angleDeg * Math.PI) / 180;
      
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);
      
      return { x, y, angleDeg };
    };

    return (
      <div className="relative w-[600px] h-[600px]">
       
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
        >
          {/* Arc path - top half only */}
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            fill="none"
            stroke="#6B7B3E"
            strokeWidth="3"
            strokeDasharray="12 25"
            strokeLinecap="round"
          />
        </svg>

        {/* Rotating container for dishes */}
        <div ref={dishesContainerRef} className="absolute inset-0">
          {dishesToShow.map((dish, index) => {
            const { x, y, angleDeg } = getPositionOnArc(index, dishesToShow.length);
            const originalIndex = dishes.indexOf(dish);
            const isHidden = hiddenDishes.includes(originalIndex);

            return (
              <div
                key={originalIndex}
                ref={(el) => {
                  dishRefs.current[originalIndex] = el;
                }}
                className="absolute transition-all duration-500"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%)`,
                  opacity: isHidden ? 0 : 1,
                }}
              >
                <div
                  style={{
                    transform: `rotate(${-angleDeg}deg)`,
                  }}
                >
                  <div className="relative">
                    <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center active dish */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-55 h-55 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={activeDish.image}
              alt={activeDish.name}
              width={220}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>
    );
  }
);

FoodOrbit.displayName = "FoodOrbit";

export default FoodOrbit;