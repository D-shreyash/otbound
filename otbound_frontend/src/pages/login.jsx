import { Link } from "react-router-dom";
import client from "../img/client.jfif"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { authWithGoogle } from "../common/firebase";
import googleIcon from "../img/google.png"

const login = ({type}) =>{

    const routeForBackend = async(serverroute,formData)=>{
        const response = await axios.post("http://localhost:3000"+serverroute,formData)
            .then(() => { 
                toast.success("login sucess");
            })
            .catch((err) => {
                console.error(err.response.data); // Log any errors
                return toast.error(err.response.data.error); // Display a general error message
            });
    }

    const handleFormSubmit = async(y) =>{
       
       try{
            y.preventDefault();

            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

            const form = new FormData(formElement);
            let formData = {};

            for (let [key, value] of form.entries()) {
                formData[key] = value;
            }

            let{name,email,password} = formData;
            
            
            if(type=="sign-up"){
                if(name.length<3 ){
                    return toast.error( "Fullname must be at least 3 letters long" );
                }
                console.log(formData);
                if(email.length == 0){
                    return toast.error("Please enter Email");
                }
            }
            if(!emailRegex.test(email)){
                return toast.error("please enter a valid email");
            }
            if(!passwordRegex.test(password)){
                return toast.error("Password should be 6 to 20 characters long with numeric, 1 lowercase, and 1 uppercase letter");
            }
            
            const serverroute = type == "sign-in"?"/signin":"/signup";
            routeForBackend(serverroute,formData);
       }
       catch(error){
            console.log(error);
            console.log("error in form data ");
        }
    }

    const handleGoogleAuth = (e) =>{
        e.preventDefault();
        authWithGoogle()
        .then((user)=>{
            let name = user.displayName;
            let email = user.email;

            const formData = {name,email};
            console.log(formData);
            routeForBackend("/gooleAuth",formData);
        })
        .catch((err)=>{
            toast.error("trouble in login with goggle");
        })
    }

    return (
        <div className="md:flex" >
            <div className="w-full h-[50%] md:w-[50%] md:h-screen" style={{background:`url(${client})`,backgroundSize :"cover"}}>
                <Link to={'/'}>
                    <h1 className="absolute text-2xl font-bold p-6">
                        Techno
                    </h1>
                </Link>
            <div className="w-full h-full flex flex-col p-16 items-center justify-center bg-[#1d8175] bg-opacity-70">              
                <div>
                    <h1 className="text-white text-3xl font-medium py-5">
                        Welcome to Company name
                    </h1>
                    <p className="text-white text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            </div>

            <Toaster/>
            <form id="formElement" className="bg-[#008374] w-full h-[50%] md:w-[50%] md:h-screen flex flex-col p-16 items-center justify-center ">
                <h1 className="text-2xl text-white font font-medium p-4 mb-5"> {type=="sign-in"?'Sign In':'Sign Up'}</h1>
                {
                    type == "sign-up"?
                    <input type="text" name="name" placeholder="Enter your name" className="w-[50%] h-8 rounded-md p-4 " />
                    :" "
                }
                <input type="email" name="email" placeholder="Enter work email" className="w-[50%] h-8 rounded-md p-4 m-7" />
                <input type="password" name="password" placeholder="Enter Password" className="w-[50%] h-8 rounded-md p-4 " />
                <button className="bg-[#24b7a5] hover:bg-[#1e9587] text-white font-bold py-2 px-4 rounded-md m-5 w-[50%] h-9 flex items-center justify-center"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    {type=="sign-in"?'Sign In':'Sign Up'}
                </button>
                <div className="flex flex-wrap items-center justify-center">
                    <h1 className="text-white text-xl">{type=="sign-in"?'You Don’t have an account?':'You have an account?'}</h1>
                    <Link to={type=="sign-in"?'/signup':'/signin'} className="text-[#24b7a5] font-medium text-xl">{type=="sign-in"?'Sign Up':'Sign In'}</Link>
                </div>
                <div><h1 className="text-white text-xl">or</h1></div>
                
                <button className="bg-[#24b7a5] hover:bg-[#1e9587] text-white flex py-2 px-4 rounded-md m-5 w-[50%] h-9  items-center justify-center"
                    onClick={handleGoogleAuth}
                >
                    <img src={googleIcon} className="w-5 "/>
                    continue with goggle 
                </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute hidden md:block md:w-[50%] bottom-0 right-0">
                <path fill="#00796b" fillOpacity="1" d="M0,256L40,218.7C80,181,160,107,240,112C320,117,400,203,480,229.3C560,256,640,224,720,224C800,224,880,256,960,229.3C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default login;