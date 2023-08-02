import ProductTitle from "../Products/ProductTitle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductData } from "../../../Constants/Constants";

const BestSales = () => {
  const navigate = useNavigate();
  let swiperInstance;

  const handleproductdetails = (item) => {
    navigate(`/product/${item.id}`, {
      state: { item }
    });
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="container mx-auto md:w-[85%] w-[95%]">
      <div className="flex lg:flex-row flex-col sm:justify-between justify-center items-center">
        <ProductTitle title={"Best Sales"} subTitle={"Top Sales"} className="mx-auto"/>
        <div className="flex justify-start items-end gap-4">
          <button
            className="sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, A11y, Navigation, Pagination]} // Add required modules
        onSwiper={(swiper) => (swiperInstance = swiper)} // Save the swiper instance
        // slidesPerView={4}
        spaceBetween={24}
        autoplay={{ delay: 3000 }}
        
        breakpoints={{
            // For screen size >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            // For screen size >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // For screen size >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            // For screen size >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        className="my-5"
      >
        {ProductData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div key={item.id} className="relative">
                <Link
                  to={"/product"}
                  onClick={() => handleproductdetails(item)}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="hover:scale-[1.03] transition-all ease-in duration-300"
                  />
                </Link>
                <div className="flex justify-between items-center z-50">
                  <h2 className="flex flex-col text-[16px] font-semibold">
                    {item.name}
                    <span className="text-[14px] text-black/[0.50] font-normal">
                      {item.subTitle}
                    </span>
                  </h2>
                  <p className="text-[16px] font-semibold">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BestSales;
