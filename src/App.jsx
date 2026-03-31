
import './App.css'
import Banner from './components/Banner'
//  import Product from './components/product'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Steps from './components/Steps'
import ToggleBTN from './components/ToogleBtn'
import Transform from './components/Transform'
import Cart from './components/Cart'
import Pricing from './components/Pricing'
import Product from './components/product'
import Products from './components/Products'
import { useState } from "react";
const productsFetch = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const promiseData = productsFetch();
function App() {
  const [active, setActive] = useState("active");
  const [cartData, setCartData] = useState([]);

  return (
   <>
      <Navbar cartData={cartData} />
      <Banner />
        <Stats />  
      <ToggleBTN 
         promiseData={promiseData}
         cartData={cartData} 
         active={active} 
         setActive={setActive} 
       /> 
       {active === "active" ? ( 
         <Products  promiseData={promiseData}cartData={cartData}setCartData={setCartData}/>) : ( 
         <Cart cartData={cartData} setCartData={setCartData} /> 
       )} 
       <Steps/> 
       <Pricing/> 
       <Transform/> 
       <Footer/> 
    </>
  ); 
}       

export default App

