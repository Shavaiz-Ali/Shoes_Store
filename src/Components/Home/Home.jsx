import ProductNavigation from "./Products/ProductNavigation"
import Slider from "./Slider/Slider"
import TextSlider from "./Slider/TextSlider"


const Home = () => {
  return (
    <div>
      <TextSlider />
      <Slider />
      <ProductNavigation />
    </div>
  )
}

export default Home
