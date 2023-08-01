import { Pagination,Autoplay, A11y } from 'swiper/modules';

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
      image: "https://nouthemes.net/html/trueshoes/images/slider/3.jpg",
      date: "MARCH 2022",
      brand: "NIKE SB DUNK LOW PRO",
      title: "SUBA",
      text:"Supa wanted something that was going to rep his East Coast roots and, more specifically, his hometown of",
      button: "Purchase Now",
      textcolor:"text-white",
      titleColor: "text-white",
      borderColor:"border-white",
      width: "[10%]"
    },
    {
      id: 2,
      image: "https://nouthemes.net/html/trueshoes/images/slider/2.jpg",
      date: "BEST ITEMS",
      brand: "THIS SUMMER",
      title: "RECOVERY",
      text:``,
      button: "Purchase Now",
      textcolor:"text-black",
      titleColor: "text-[#ec4c76]",
      borderColor:"border-black",
      width: "[10%]"
    },
    // Add more slider items as needed
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay, A11y]}
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className=''
    >
        {
            sliderItems.map((item) =>{
                return(
                <SwiperSlide key={item.id}>
                    <div className={` w-full h-screen flex justify-center items-center`} style={{
                        backgroundImage: `url(${item.image})`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         }}>
                        <div className="container sm:w-[80%] w-[95%] mx-auto flex flex-col">
                            <p className={`${item.textcolor} sm:text-[1.3rem] text-[1rem] font-normal`}>{item.date}</p>
                            <p className={`${item.textcolor} sm:text-[1.3rem] text-[1rem] font-normal`}>{item.brand}</p>
                            <p className={`font-semibold border-b-2 ${item.borderColor} w-${item.width} mt-2`}></p>
                            <h1 className={`sm:text-[74px] text-[45px] ${item.titleColor} font-bold tracking-widest`}>{item.title}</h1>
                            <p className={`${item.textcolor} text-[18px] my-2`}>Supa wanted something that was going to rep his East Coast roots <br /> and, more specifically, his hometown of <br /> New York In a Big City</p>
                            <button className='text-[18px] text-white bg-[#2AC37D] py-3 px-6 rounded-[50px] w-[200px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'>{item.button}</button>
                        </div>
                    </div>
                </SwiperSlide>
                )
            })
        }
    </Swiper>
  );
};

export default Slider;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, A11y } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// // Helper function to calculate brightness of a color
// const getBrightness = (hexColor) => {
//   const rgbColor = hexColor.match(/[A-Za-z0-9]{2}/g).map((hex) => parseInt(hex, 16));
//   const brightness = (rgbColor[0] * 299 + rgbColor[1] * 587 + rgbColor[2] * 114) / 1000;
//   return brightness;
// };

// const Slider = () => {
//   const sliderItems = [
//     // Your slider items here...
//   ];

//   return (
//     <Swiper
//       modules={[Pagination, Autoplay, A11y]}
//       slidesPerView={1}
//       autoplay={{ delay: 3000 }}
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       className='mt-5'
//     >
//       {sliderItems.map((item) => {
//         const textColor = getBrightness(item.image) < 128 ? 'text-white' : 'text-black';

//         return (
//           <SwiperSlide key={item.id}>
//             <div
//               className={`w-[100%] h-screen flex justify-center items-center`}
//               style={{
//                 backgroundImage: `url(${item.image})`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <div className="container w-[80%] mx-auto flex flex-col">
//                 <p className={`${textColor} text-[1.3rem] font-normal`}>{item.date}</p>
//                 <p className={`${textColor} text-[1.3rem] font-normal`}>{item.brand}</p>
//                 <p className={`${textColor} font-semibold border-b-2 border-white w-[10%] mt-2`}></p>
//                 <h1 className={`${textColor} text-[60px] font-bold`}>{item.title}</h1>
//                 <p className={`${textColor} text-[18px] my-5`}>{item.text}</p>
//                 <button className={`${textColor} bg-[#2AC37D] py-3 px-6 rounded-[50px] w-[200px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out`}>
//                   {item.button}
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default Slider;
