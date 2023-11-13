
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from './pages/About'



export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}