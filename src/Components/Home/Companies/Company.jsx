
import { Pagination,Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Company = () => {
    const images = [
        {
            id: 1,
            image: "https://nouthemes.net/html/trueshoes/images/partner/1.png"
        },
        {
            id: 2,
            image: "https://nouthemes.net/html/trueshoes/images/partner/2.png"
        },
        {
            id: 3,
            image: "https://nouthemes.net/html/trueshoes/images/partner/3.png"
        },
        {
            id: 4,
            image: "https://nouthemes.net/html/trueshoes/images/partner/4.png"
        },
        {
            id: 5,
            image: "https://nouthemes.net/html/trueshoes/images/partner/5.png"
        },
        {
            id: 6,
            image: "https://nouthemes.net/html/trueshoes/images/partner/6.png"
        },
        {
            id: 7,
            image: "https://nouthemes.net/html/trueshoes/images/partner/7.png"
        },
        {
            id: 8,
            image: "https://nouthemes.net/html/trueshoes/images/partner/8.png"
        },
        
    ]
  return (
    <div className="bg-gray-100 w-full my-16">
        <div className="container mx-auto flex justify-center items-center">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Autoplay, A11y]}
                  spaceBetween={10}
                slidesPerView={2}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    // For screen size >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 8,
                    },
                    // For screen size >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                    // For screen size >= 1024px
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 24,
                    },
                  }}
                className=''
            >
                {
                    images.map((item) =>{
                        return(
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="Company Logo"/>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Company
