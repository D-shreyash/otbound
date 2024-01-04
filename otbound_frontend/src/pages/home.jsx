import Navbar from "../component/nav-bar";
import Hero_section from "../component/hero_section";
import Desk_mid_section from "../component/desktop_mid_section"
import Hero_section2 from "../component/hero_section2";
import CLient_feedback from "../component/client_feedback";
import Footer from "../component/footer";

const home = ()=>{
    return (
        <>
            <div className="bg-white">
                <div className="p-12 bg-gradient-to-r from-[#067f71] to-[#1ca293]" style={{borderRadius:"0px 0px 20% 20%"}}>
                    <Navbar/>
                    <Hero_section/>
                </div>

                <Desk_mid_section/>

                <Hero_section2/>

                <CLient_feedback/>

                <Footer/>
            </div>
          
        </>

    )
}

export default home;