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
          duration: 2,
          ease: "power2.inOut",
        });
      },

      rotateAntiClockwise() {
        gsap.to(dishesContainerRef.current, {
          rotation: "-=72",
          duration: 2,
          ease: "power2.inOut",
        });
      },

      // Method to hide specific dish with animation
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

    // Function to calculate position on the arc
    const getPositionOnArc = (index: number, totalDishes: number) => {
      const startAngle = -180; 
      const endAngle = 0; 
      
      const angleDeg = startAngle + (index * (endAngle - startAngle)) / (totalDishes - 1);
      const angleRad = (angleDeg * Math.PI) / 180;
      
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);
      
      return { x, y, angleDeg };
    };

    return (
      <div className="relative w-150 h-150">
        {/* Static arc - doesn't rotate */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
        >
          {/* Arc path - stays fixed */}
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            fill="none"
            stroke="#6B7B3E"
            strokeWidth="3"
            strokeDasharray="12 25"
            strokeLinecap="round"
          />
        </svg>

        {/* Rotating container for dishes only */}
        <div ref={dishesContainerRef} className="absolute inset-0">
          {/* Dishes positioned along the arc */}
          {dishes.map((dish, index) => {
            const { x, y, angleDeg } = getPositionOnArc(index, dishes.length);
            const isHidden = hiddenDishes.includes(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  dishRefs.current[index] = el;
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
                    {/* Equal sized plate/circle for all dishes */}
                    <div className={`w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      index === activeIndex ? 'ring-4 ring-yellow-400 scale-110' : ''
                    }`}
                    style={{
                      backgroundColor: dish.color + '20',
                      border: `3px solid ${dish.color}`,
                    }}>
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        width={80}
                        height={80}
                        className={`rounded-full transition-all duration-300 ${
                          isHidden ? 'scale-0' : 'scale-100'
                        }`}
                      />
                    </div>
                    
                    {/* Optional: Show dish name on hover or for active */}
                    {index === activeIndex && (
                      <div 
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                                 text-xs font-semibold whitespace-nowrap px-2 py-1 
                                 rounded-full bg-white shadow-md"
                        style={{ color: dish.color }}
                      >
                        {dish.name}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center active dish */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
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
      </div>
    );
  }
);

FoodOrbit.displayName = "FoodOrbit";

export default FoodOrbit;