import comma_img from "../img/inverted-commas.png"
import bg_img from "../img/th.jfif"
const CLient_feedback = () =>{
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium p-8 ">Over 280,000+ companies prefer Mr. E by EasyLeadz</h1>

            <div style={{background:`url(${bg_img})`, backgroundSize: 'cover'}}>
            <div className=" flex items-center w-full h-full bg-[#1d8175] bg-opacity-80 p-10">  
                <div className="w-10 h-10 rounded-full bg-[#1d8175] flex items-center justify-center">
                    <i className="fi fi-rr-arrow-small-left text-white text-2xl"></i>
                </div>
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-medium text-white p-6">Happy Clients</h1>
                    <div className="flex flex-col items-center justify-center w-[50%] bg-white p-8">
                       <div className="flex flex-col items-center justify-center p-4">
                            <div className="w-20 h-20 rounded-full bg-[#25b3a2] flex items-center justify-center">
                                <i class="fi fi-rr-user text-white text-5xl"></i>
                            </div>
                            <h2 className="text-3xl italic font-medium">Client name</h2>
                       </div>

                        <img src={comma_img} alt="" className="mr-auto" />
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since</p>
                        <img src={comma_img} alt="" className="transform rotate-180 ml-auto" />
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1d8175] flex items-center justify-center">
                    <i className="fi fi-rr-arrow-small-right text-white text-2xl"></i>
                </div>
            </div>  
            </div>
        </div>
    )
}

export default CLient_feedback;