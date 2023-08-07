// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Header from './Components/Home/Header/Header'
import Navbar from './Components/Home/Navbar/Navbar'
import TextSlider from './Components/Home/Slider/TextSlider'
import Home from "./Components/Home/Home"
import ProductDetails from "./Components/Pages/productDetails/ProductDetails"
import Cart from "./Components/Pages/Cart/Cart"
import Footer from "./Components/Home/Footer/Footer"
import Shop from "./Components/Pages/Shop/Shop"
// import 'aos/dist/aos.css'; // Import AOS styles
// import AOS from 'aos'; // Import AOS library
import { useEffect } from "react"
function App() {
// useEffect(() => {
//  AOS.init(); // Initialize AOS
// })
  return (
    <>
      <Router> 
        <Header />
        <Navbar />
        <TextSlider />
        <Routes>
          {/* Nav Links Routing goes Here  */}
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/shop" element={<Shop/>}/>
          {/* Nav Links Routing ends Here  */}

          <Route exact path="/product/:id" element={<ProductDetails />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
