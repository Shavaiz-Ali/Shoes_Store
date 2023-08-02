import BannerImages from "./Bannner/BannerImages"
import BestSales from "./BestSales/BestSales"
import Blog from "./BlogPost/Blog"
import Company from "./Companies/Company"
import Contact from "./Contact/Contact"
import FooterHeader from "./Footer/FooterHeader"
import Products from "./Products/Products"
import Slider from "./Slider/Slider"
import Testtimonials from "./Testimonials/Testtimonials"


const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <BannerImages />
      <BestSales />
      <Testtimonials />
      <Blog />
      <Company />
      <Contact />
      <FooterHeader />
    </div>
  )
}

export default Home
