import FoodOrbit from "../FoodOrbit/FoodOrbit"
export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden min-h-205">
                <div className="relative z-10 max-w-7xl mx-auto min-h-175 flex flex-col justify-end gap-15">
                    <div className="w-100 flex flex-col gap-2 ">
                        <h2 className="text-[#EFA662B5] font-bold text-5xl">Delicious</h2>
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
                                <button className="border border-[#D3CDCD] rounded-full p-3 text-[#F7D297]">Book a table</button>
                                <button className="border bg-[#F7D297BF] rounded-full px-9 py-3 text-[#333333] border-none">Order now!</button>
                            </div>
                        </div>
                        <div className="flex flex-col">

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-300 shadow-md"></div>


                                <div className="px-12 py-3 rounded-full bg-[#E8C88B] shadow-md">
                                    South Indian Cuisine
                                </div>


                                <div className="w-12 h-12 rounded-full bg-gray-300 shadow-md"></div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}