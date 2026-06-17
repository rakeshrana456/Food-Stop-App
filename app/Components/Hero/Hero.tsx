'use client'
import Image from "next/image"
import { useEffect } from "react";
type HeroProps = {
    orbitRef: React.RefObject<any>;
    dishes: any[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Hero({
    orbitRef,
    dishes,
    activeIndex,
    setActiveIndex,
}: HeroProps) {
    const activeDish = dishes[activeIndex];
    const nextDish = () => {
        orbitRef.current?.rotateClockwise();
        setActiveIndex(
            (prev) => (prev + 1) % dishes.length
        );
    };
    const prevDish = () => {
        orbitRef.current?.rotateAntiClockwise();
        setActiveIndex(
            (prev) => (prev - 1 + dishes.length) % dishes.length);
    };
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                nextDish();
            } else {
                prevDish();
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
    return (
        <>
            <section className="relative overflow-hidden min-h-205">
                <div className="relative z-10 max-w-7xl mx-auto min-h-175 flex flex-col justify-end gap-15">
                    <div className="w-100 flex flex-col gap-2 ">
                        <h2 className="text-[#EFA662B5] font-bold text-5xl" style={{
                            color: activeDish.color,
                        }}>Delicious.</h2>
                        <h2 className="text-[#333333b8] font-medium text-4xl">One stop destination</h2>
                        <p className="text-black text-sm">Hunger pangs? You’re at the right stop to drive it away!
                            Order delicious food or reserve a table at your next cafe from the comfort of your home!
                        </p>
                    </div>
                    <div className="w-full flex  justify-between gap-2 ">

                        <div className="flex flex-col">
                            <h2 className="text-[#333333] font-medium text-[28px] italic">
                                One stop, many routes
                            </h2>
                            <div className="flex gap-6">
                                <button
                                    className="border rounded-full p-3"
                                    style={{
                                        color: activeDish.color,
                                        borderColor: activeDish.color,
                                    }}
                                >
                                    Book a table
                                </button>
                                <button className="border bg-[#F7D297BF] rounded-full px-9 py-3 text-[#333333] border-none font-bold" style={{
                                    backgroundColor: activeDish.color,
                                }}>Order now!</button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Image
                                className="-mr-2 cursor-pointer"
                                src="/TrigerButton/Ellipse 9.png"
                                alt=""
                                width={56}
                                height={35}
                                onClick={prevDish}
                            />

                            <Image
                                className="-mr-2"
                                src="/TrigerButton/Vector 1.png"
                                alt=""
                                width={59}
                                height={8}
                            />

                            <div
                                className="px-12 py-3 rounded-full text-black transition-all duration-500"
                                style={{
                                    backgroundColor: activeDish.color,
                                }}
                            >
                                {activeDish.name}
                            </div>

                            <Image
                                className="-ml-2 "
                                src="/TrigerButton/Vector.png"
                                alt=""
                                width={59}
                                height={8}
                            />

                            <Image
                                className="-ml-2 cursor-pointer"
                                src="/TrigerButton/Ellipse 11.png"
                                alt=""
                                width={56}
                                height={35}
                                onClick={nextDish}
                            />
                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}