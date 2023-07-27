

import { Navigation,Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {

  const sliderItems = [
    {
      id: 1,
      title:"Free Delivery",
      text:"Get free standard delivery on every order with Shoe Store"
    },
    {
      id: 2,
      title:"Free Delivery",
      text:": Get free standard delivery on every order with Shoe Store"
    },
    // Add more slider items as needed
  ];
  return (
    <div className="w-full bg-black/[0.09] sm:h-12 h-16  text-center flex justify-center items-center py-3" >
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, A11y]}
        //   spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='lg:w-[968px] w-full  sm:py-0 '
        >
                {
                
                sliderItems.map((item) =>{
                    return(
                                <SwiperSlide key={item.id} className="relative flex justify-center overflow-x-hidden  w-[968px]">
                                        <p className="sm:text-16px text-[14px] lg:w-auto">
                                            <strong>{item.title}:</strong>
                                            <span className="text-slate-700">{item.text}</span>
                                        </p>
                                </SwiperSlide>
                            
                            )
                        })
                    }
        </Swiper>
    </div>
  );
};

export default Slider;
