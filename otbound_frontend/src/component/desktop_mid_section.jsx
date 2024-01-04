const Desk_mid_section= ()=>{
    return(
        <div className="p-16">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#cdc8fd] w-[10px] h-[8px] rounded-full"></div>
                    <div className="bg-[#cdc8fd] w-[25px] h-[8px] rounded-full"></div>
                    <h1 className="text-2xl font-medium ">
                    Lorem ipsum dolor amet, consectetur adipiscing
                    </h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar, dui ut pharetra luctus, erat metus ultrices eros, non euismod nunc tortor vel dolor. Quisque molestie rutrum dui, non pharetra neque tincidunt vel. Suspendisse tempus rhoncus pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc et lacinia elit. Suspendisse hendrerit in dui eu laoreet. Sed tincidunt ut lectus id tristique. Morbi sodales porta dui et lobortis.</p>
                <button className="bg-[#269588] hover:bg-[#1d8175] text-[1rem] text-white font-medium py-2 px-4 rounded m-4 ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Lorem ipsum dolor sit amet
                        <i className="fi fi-rr-angle-small-right" style={{ lineHeight: 0,paddingLeft:'20px' }} > </i>
                    </div>
                </button>

                <h2 className="text-2xl font-medium">More than 280,000+ businesses trust EasyLeadz for their prospecting needs</h2>
            </div>

            <div className="flex justify-between py-10 md:mx-10">
                <i className="fi fi-rr-angle-small-left text-4xl" ></i>
                <i className="fi fi-brands-microsoft text-4xl" ></i>
                <i className="fi fi-brands-microsoft-edge text-4xl"></i>
                <i className="fi fi-brands-microsoft-explorer text-4xl"></i>
                <i className="fi fi-rs-head-vr text-4xl"></i>
                <i className="fi fi-brands-meta text-4xl"></i>
                <i className="fi fi-brands-facebook text-4xl"></i>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#cdc8fd] w-[10px] h-[8px] rounded-full"></div>
                    <div className="bg-[#cdc8fd] w-[25px] h-[8px] rounded-full"></div>
                    <h1 className="text-2xl font-medium">Choose from our industry-ready prospecting tools!</h1>
                </div>

                {/* tool one */}
                <div className="md:flex bg-white items-center justify-center ">
                    <div className="P-4 md:w-[30%] my-10">
                        <h1 className="text-xl font-medium">Best for lead generation on LinkedIn</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpulvinar, dui ut pharetra luctus, erat metus ultrices eros,non euismod nunc tortor vel dolor. Quisque molestie rutrumdui.</p>
                    </div>
                    <div className="h-40 w-0.5 bg-[#cdc8fd] hidden md:block rounded-full mx-4 " ></div>
                    <div className="flex gap-20 flex-wrap items-center justify-center my-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-computer text-white text-4xl"></i>
                            </div>
                            <h1>Reveal Contacts</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i>
                                
                            </div>
                            <h1>Install Tool</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-brands-linkedin text-white text-4xl"></i>
                            </div>
                            <h1>Go to Linkedin</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-discover text-white text-4xl"></i> 
                            </div>
                            <h1>Search Profile</h1>
                        </div>
                    </div>
                </div>


                {/* tool two  */}
                <div className="md:flex bg-white items-center justify-center ">
                    <div className="flex gap-20 flex-wrap items-center justify-center my-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i>
                            </div>
                            <h1>Go to EasyProspect</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i>
                                
                            </div>
                            <h1>Search by filters</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i>
                            </div>
                            <h1>Export list</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i> 
                            </div>
                            <h1>Search Profile</h1>
                        </div>
                    </div>

                    <div className="h-40 w-0.5 bg-[#cdc8fd] hidden md:block rounded-full mx-4 " ></div>

                    <div className="P-4 md:w-[30%] my-10">
                        <h1 className="text-xl font-medium">Connect with directors of over 15 lakh SME’sin India</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpulvinar, dui ut pharetra luctus, erat metus ultrices eros,non euismod nunc tortor vel dolor. Quisque molestie rutrumdui.</p>
                    </div>

                </div>

                {/* tool three */}
                <div className="md:flex bg-white items-center justify-center ">
                    <div className="P-4 md:w-[30%] my-10">
                        <h1 className="text-xl font-medium">Build applications using our API</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpulvinar, dui ut pharetra luctus, erat metus ultrices eros,non euismod nunc tortor vel dolor. Quisque molestie rutrumdui.</p>
                    </div>
                    <div className="h-40 w-0.5 bg-[#cdc8fd] hidden md:block rounded-full mx-4 " ></div>
                    <div className="flex gap-20 flex-wrap items-center justify-center my-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-computer text-white text-4xl"></i>
                            </div>
                            <h1>Reveal Contacts</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-download text-white text-4xl"></i>
                                
                            </div>
                            <h1>Install Tool</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-brands-linkedin text-white text-4xl"></i>
                            </div>
                            <h1>Go to Linkedin</h1>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#269588] w-20 h-20 rounded-full flex items-center justify-center">
                                <i className="fi fi-rr-discover text-white text-4xl"></i> 
                            </div>
                            <h1>Search Profile</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desk_mid_section;