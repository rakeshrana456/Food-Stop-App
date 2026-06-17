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

   
  const dishesToShow = [];

for (let i = 1; i < dishes.length; i++) {
  dishesToShow.push(
    dishes[(activeIndex + i) % dishes.length]
  );
}

    const getPositionOnArc = (index: number, totalDishes: number) => {
      // Spread dishes evenly along the top semicircle
      const angleDeg = 45+ index *45;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY - radius * Math.sin(angleRad);

      return { x, y, angleDeg };
    };

    return (
      <div className="relative w-150 h-150">

        <svg
          className="absolute inset-0 w-full h-full "
          viewBox="0 0 600 600"
        >

          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            fill="none"
            stroke="#6B7B3E"
            strokeWidth="3"
            strokeDasharray="12 25"
            strokeLinecap="round"
          />
        </svg>

        
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
      </div>
    );
  }
);

FoodOrbit.displayName = "FoodOrbit";

export default FoodOrbit;