import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import AttaRice from "./pages/categories/AttaRice";
import BabyCare from "./pages/categories/BabyCare";
import Bakery from "./pages/categories/Bakery";
import DairyBreakfast from "./pages/categories/DairyBreakfast";
import DryFruits from "./pages/categories/DryFruits";
import Munchies from "./pages/categories/Munchies";
import PersonalCare from "./pages/categories/PersonalCare";
import Cleaning from "./pages/categories/Cleaning";
import InstantFrozen from "./pages/categories/InstantFrozen";
import ColdDrink from "./pages/categories/ColdDrink";
import SaucesSpreads from "./pages/categories/SaucesSpreads";
import SweetTooth from "./pages/categories/SweetTooth";
import TeaCoffe from "./pages/categories/TeaCoffe";
import VegetableFruits from "./pages/categories/VegetableFruits";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/admin/ProductList";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Cart from "./pages/admin/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCanceled from "./pages/PaymentCanceled";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  }
  const lightMode = () => {
    setThemeMode("light");  
  }
 useEffect(()=>{
  document.querySelector('html').classList.remove('dark', 'light')
  document.querySelector('html').classList.add(themeMode)
 })
  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/addProduct/:userid" element={<AddProduct />} />
            <Route
              path="/admin/productlist/:userid"
              element={<ProductList />}
            />
            <Route
              path="/admin/editProduct/:userid"
              element={<EditProduct />}
            />
            <Route
              path="/admin/editProduct/:userid"
              element={<EditProduct />}
            />
            <Route path="/admin/viewcart" element={<Cart />} />
          </Route>
          <Route path="/atta-Rice" element={<AttaRice />} />
          <Route path="/baby-Care" element={<BabyCare />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/cleaning" element={<Cleaning />} />
          <Route path="/cold-Drink" element={<ColdDrink />} />
          <Route path="/dary-Breakfast" element={<DairyBreakfast />} />
          <Route path="/dry-Fruits" element={<DryFruits />} />
          <Route path="/instant-frozen" element={<InstantFrozen />} />
          <Route path="/munchies" element={<Munchies />} />
          <Route path="/personal-care" element={<PersonalCare />} />
          <Route path="/sauces-spreads" element={<SaucesSpreads />} />
          <Route path="/sweet-tooth" element={<SweetTooth />} />
          <Route path="/tea-coffe" element={<TeaCoffe />} />
          <Route path="/vegetable-fruits" element={<VegetableFruits />} />
          <Route
            path="/:categories/:productName/:productId"
            element={<ProductDetails />}
          />
          <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
          <Route path="/paymentcanceled" element={<PaymentCanceled/>}/>
        </Routes>

      </BrowserRouter>

      </ThemeProvider>

  );
}
