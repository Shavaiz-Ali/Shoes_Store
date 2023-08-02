import {AiFillStar} from "react-icons/ai"
import { EffectFade, A11y,Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testtimonials = () => {
  return (
    <div className=' p-5 m-0 w-full my-16 bg-[url("https://nouthemes.net/html/trueshoes/images/background/parallax.jpg")] bg-no-repeat bg-center bg-cover bg-fixed'>
      <Swiper
        // install Swiper modules
        modules={[EffectFade, Pagination, Autoplay, A11y]}
        //   spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className=''
        >
            <SwiperSlide className="flex justify-center items-center mt-5">
                <img src={"https://nouthemes.net/html/trueshoes/images/testimonial/1.jpg"} alt="" className="rounded-full "/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center mt-5">
                <img src={"https://nouthemes.net/html/trueshoes/images/testimonial/2.jpg"} alt="" className="rounded-full "/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center mt-5">
                <img src={"https://nouthemes.net/html/trueshoes/images/testimonial/3.jpg"} alt="" className="rounded-full "/>
            </SwiperSlide>
            <div className='mt-5 flex justify-center items-center flex-col'>
                <div className="flex justify-center mt-5">
                    <AiFillStar className="text-xl text-yellow-600"/>
                    <AiFillStar className="text-xl text-yellow-600"/>
                    <AiFillStar className="text-xl text-yellow-600"/>
                    <AiFillStar className="text-xl text-yellow-600"/>
                    <AiFillStar className="text-xl text-white"/>
                </div>
                <h1 className="sm:text-xl text-[14px] text-white">Logan May - CEO & Founder Invision</h1>
                <p className="lg:text-[24px] md:text-[16px] text-[14px] text-white sm:font-[600] font-[400] my-12 text-center">“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit <br /> cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
            </div>
    </Swiper>
    </div>
  )
}

export default Testtimonials
