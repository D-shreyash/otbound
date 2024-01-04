import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Login type="sign-in"/>}/>
      <Route path="/signup" element={<Login type="sign-up"/>}/>
    </Routes>
  )
}

export default App;