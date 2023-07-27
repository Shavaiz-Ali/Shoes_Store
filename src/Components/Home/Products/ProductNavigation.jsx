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
            id : 1,
            name : "Adidas",
        },
        {
            id : 1,
            name : "Men",
        },
        {
            id : 1,
            name : "Women",
        },
        {
            id : 1,
            name : "Kids",
        },
    ]
  return (
    <div className="container w-[85%] mx-auto lg:flex justify-between my-[5rem]">
      <ProductTitle />
      <ul className="flex justify-center items-end gap-12">
        {
            navItems.map((item) =>{
                return(
                    <li className="text-[16px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer" key={item.id}>{item.name}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default ProductNavigation
