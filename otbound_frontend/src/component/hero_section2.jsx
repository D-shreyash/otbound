import bulb from "../img/light-bulb.png"

const Hero_section2 = ()=>{
    return(
        <div>
            <div className="bg-[#067f71] block md:flex px-16 py-8 justify-between">
                <h6 className="text-2xl font-medium text-white">
                    Plan Starting As Low As
                </h6>
                <div>
                    <h4 className="text-5xl font-medium text-white  flex md:justify-end">
                        2,199
                    </h4>
                    <h6 className="text-xl font-medium text-white">
                        Exclusive of GST
                    </h6>
                </div>

                <div>

                </div>

                <div className="py-5">
                    <h4 className="text-2xl font-medium text-white tracking-wide">
                        Credits : 40 per month
                    </h4>
                    <h6 className="text-xl font-medium text-white">
                        Users : Upto 2 including admin
                    </h6>
                </div>

                <button className="bg-[#269588] hover:bg-[#1d8175] text-xl text-white font-bold py-2 px-4 rounded m-4 ">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Get Started
                            <i className="fi fi-rr-angle-small-right" style={{ lineHeight: 0 }} > </i>
                        </div>
                </button>
            </div>

            {/* bulb section */}
            <div className="p-16">
                <div className="flex items-center justify-center gap-2 mb-4 py-10">
                    <div className="bg-[#cdc8fd] w-[10px] h-[8px] rounded-full"></div>
                    <div className="bg-[#cdc8fd] w-[25px] h-[8px] rounded-full"></div>
                    <h1 className="text-xl font-medium ">
                        Fast connect. Faster prospecting.                    </h1>
                </div>

                <div className="md:flex justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-28 h-28 bg-[#f9fffe] rounded-full flex items-center justify-center shadow-2xl">
                            <img src={bulb} className="w-[70%] h-auto"/>
                            
                        </div>
                        <h3 className="text-2xl font-medium">No. of leads generated so far</h3>
                        <h4 className="text-xl font-medium">2000</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-28 h-28 bg-[#f9fffe] rounded-full flex items-center justify-center shadow-2xl">
                            <img src={bulb} className="w-[70%] h-auto"/>
                        </div>
                        <h3 className="text-2xl font-medium">Users serviced</h3>
                        <h2 className="text-xl font-medium">2000</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-28 h-28 bg-[#f9fffe] rounded-full flex items-center justify-center shadow-2xl">
                            <img src={bulb} className="w-[70%] h-auto"/>    
                        </div>
                        <h3 className="text-2xl font-medium">Revenue amplification</h3>
                        <h4 className="text-xl font-medium">2000</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_section2;