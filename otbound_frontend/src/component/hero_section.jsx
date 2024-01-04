import OIP from "../img/OIP.jfif"

const Hero_section = ()=>{
    return(
        <div className="md:flex py-6 justify-center items-center">
            <div className="px-4 md:mr-20 ">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Lorem ipsum dolor sit.
                </h1>
                <h1 className="text-4xl font-bold text-white mb-4">
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar, dui ut erat metus ultrices eros, non euismod nunc tortor vel dolor.
                </p>

                <button className="bg-[#269588] hover:bg-[#1d8175] text-xl text-white font-bold py-2 px-4 rounded m-4 ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Get Started
                        <i className="fi fi-rr-angle-small-right" style={{ lineHeight: 0 }} > </i>
                    </div>
                </button>
            </div>

            <div className="w-[70%] md:w-[50%] mx-auto py-5">
                <img src={OIP} alt="Your image description" style={{ width: '100%' , height: "auto"}}>
            
                </img>
            </div>
        </div>
    )
}

export default Hero_section