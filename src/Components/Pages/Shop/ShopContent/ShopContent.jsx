import {Link} from "react-router-dom"
const ShopContent = ({filteredProducts}) => {
 
  return (
    <div className='lg:w-full sm:w-[90%] w-[95%] mx-auto '>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 my-5 px-7">
      {
        filteredProducts.map((item) => {
          return(
            <div key={item.id} className="relative" data-aos="fade-up">
              <Link to={`/product`}>
                <img src={item.image} alt="" className="hover:scale-[1.03] transition-all ease-in duration-300" />
              </Link>
              <div className="flex justify-between items-center z-50">
                <h2 className="flex flex-col text-[16px] font-semibold">
                  {item.name}
                  <span className="text-[14px] text-black/[0.50] font-normal">{item.subTitle}</span>
                </h2>
                <p className="text-[16px] font-semibold">{item.price}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ShopContent
