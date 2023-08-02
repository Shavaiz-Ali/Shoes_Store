import { BlogPostData } from "../../../Constants/Constants"
import ProductTitle from "../Products/ProductTitle"


const Blog = () => {
  return (
    <div className="container mx-auto md:w-[85%] w-[95%] my-16">
      <div className="flex justify-between justify-center items-center my-3">
         <ProductTitle title={"News"} subTitle={"Our Story"} className={"mx-0"}/>
            <li className="sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600     active:text-green-600 cursor-pointer list-none">View all Post</li>
      </div>
      <div className="lg:flex justify-center items-center gap-8">
        {
            BlogPostData.map((item) =>{
                return(
                    <div className="flex flex-col" key={item.id}>
                        <img src={item.image} alt={"Blog Post"} className="hover:scale-[1.03] transition-all duration-500 ease-in"/>
                        <h1 className="text-[14px] font-[600] my-2">{item.title}</h1>
                        <h1 className="sm:text-[14px] text-[13px] uppercase text-[#8d8d8d] font-[500] ">By: <span className="text-green-600">Alena Studio</span> - {item.date}</h1>
                        <p className="uppercase text-[12px] text-black/[0.50] my-2  font-normal">{item.description}</p>
                        <li className="sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer list-none lg:mt-0 mb-5">{item.button}</li>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Blog
