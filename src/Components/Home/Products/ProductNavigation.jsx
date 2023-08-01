import ProductTitle from "./ProductTitle"


const ProductNavigation = () => {

    const navItems = [
        {
            id : 1,
            name : "All",
        },
        {
            id : 2,
            name : "Nike",
        },
        {
            id : 3,
            name : "Adidas",
        },
        {
            id : 4,
            name : "Men",
        },
        {
            id : 5,
            name : "Women",
        },
        {
            id : 6,
            name : "Kids",
        },
    ]
  return (
    <div className="container mx-auto md:w-[85%] w-[95%] flex lg:flex-row flex-col xl:flex-nowrap flex-wrap xl:justify-between justify-center mt-[4rem]">
      <ProductTitle />
      <ul className="flex lg:flex-nowrap flex-wrap lg:justify-center lg:items-end justify-start sm:gap-12 gap-4 sm:mt-0 mt-3 mx-auto">
        {
            navItems.map((item) =>{
                return(
                    <li className="sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer" key={item.id}>{item.name}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default ProductNavigation
