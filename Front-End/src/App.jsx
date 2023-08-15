// import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./LoaderBar.css"; // Import the CSS for LoaderBar
import Header from "./Components/Home/Header/Header";
import Navbar from "./Components/Home/Navbar/Navbar";
import TextSlider from "./Components/Home/Slider/TextSlider";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Pages/productDetails/ProductDetails";
import Cart from "./Components/Pages/Cart/Cart";
import Footer from "./Components/Home/Footer/Footer";
import Shop from "./Components/Pages/Shop/Shop";
import Login from "./Components/Pages/Login-SignUP/Login";
import SignUp from "./Components/Pages/Login-SignUP/SignUp";
import ScrollToTopButton from "./Components/Home/ScrollToTop/ScrolltoTop";
// import LoadingBar from "react-top-loading-bar"; // Import the LoaderBar component

function App() {
  // const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
      /> */}
        <Header />
        <Navbar />
        <TextSlider />
        <ScrollToTopButton />
        <Routes>
          {/* Nav Links Routing goes Here  */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          {/* Nav Links Routing ends Here  */}
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />

          {/* routing for sign up and signin form */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
