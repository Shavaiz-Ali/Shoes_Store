import {AiOutlineCopyrightCircle} from "react-icons/ai"

const FooterBottom = () => {
  return (
    <div className="container md:w-[85%] w-[98%] mx-auto py-10 flex flex-wrap items-center justify-center">
        <h1 className="text-green-600 sm:text-[16px] text-[12px] flex flex-wrap justify-center items-center">
            <AiOutlineCopyrightCircle className="text-white sm:block hidden"/>
            CopyRight 2023 | <span className="text-white">Shoes Store | All Rights Reserved |</span>
        </h1>
        <p className="text-green-600 sm:text-[16px] text-12px">Powered By Reactjs.com</p>
    </div>
  )
}

export default FooterBottom
