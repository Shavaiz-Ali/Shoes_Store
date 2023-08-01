import BannerImages from "./Bannner/BannerImages"
import Products from "./Products/Products"
import Slider from "./Slider/Slider"


const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <BannerImages />
    </div>
  )
}

export default Home
