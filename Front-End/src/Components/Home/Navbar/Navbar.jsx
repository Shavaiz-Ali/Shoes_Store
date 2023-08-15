import {useState, useEffect} from "react";
import { NavbarPc } from "../../.././Constants/Constants";
import { motion } from "framer-motion";
import {FaBarsStaggered} from "react-icons/fa6";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {MdClose} from "react-icons/md"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.users.products);
    const [showMenu, setshowMenu] = useState(true);
    const [mobileNav, setMobilenav] = useState(false);
    const [searchBox, setSearchBox] = useState(true);
    const [mobSearchbox, setMobSearchbox] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false)
    useEffect(() =>{
        let responsiveNavbar = () =>{
            if(window.innerWidth <= 980){
                setshowMenu(false)
                setSearchBox(false)
            } else{
                setshowMenu(true)
                setSearchBox(true)
            }
        }
        responsiveNavbar();
        window.addEventListener("resize", responsiveNavbar);
    })
    const handleScroll = () => {
        if (window.scrollY > 200) {
          setStickyMenu(true);
        } else {
          setStickyMenu(false);
        }
      };
    
      useEffect(() => {
        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
          // Detach scroll event listener when component unmounts
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
        <nav className={`w-full h-20 bg-white flex justify-between items-center ${stickyMenu ? "lg:sticky top-0 bg-white z-50 transition-all duration-300 ease-in border-b border-black/[0.25]" : ""}`}>
        {/* navbar Pc  */}
         <div className="logo sm:ml-[20px] ml-[5px]">
            <img className="sm:w-[140px] w-[90px]" src="http://nouthemes.net/html/trueshoes/images/logo.png" alt="Logo" />
         </div>
           { showMenu && 
                <ul className="flex justify-center items-center gap-8">
                    {
                        NavbarPc.map((item, index) =>{
                            return(
                                <Link to={item.Link} key={index} className="text-[16px] text-black font-bold uppercase hover:bg-green-400 hover:text-white hover:px-8 hover:py-1 transition-all duration-500 ease-in-out rounded-[50px] cursor-pointer">{item.name}
                                     {/* {dropdown && (
                                        <DropDown />
                                     )} */}
                                </Link>
                            )
                        })
                    }
                </ul>
            }
            <div className="flex justify-center items-center sm:gap-4 gap-2 sm:mr-[20px] mr-[5px]">
               { 

                searchBox ?
                <input className="w-[200px] h-[40px] rounded-[50px] text-[12px] text-slate-400 bg-gray-200 border-0 outline-none px-6" type="text" placeholder="Search Products"/> : 
                
                <div className="bg-black sm:h-[50px] h-[40px] sm:w-[50px] w-[40px] text-white rounded-full flex justify-center items-center cursor-pointer">           
                        <AiOutlineSearch  className="text-[24px] font-semibold cursor-pointer" onClick={() => setMobSearchbox(true)}/>
                </div>

               }
               {
                mobSearchbox && (
                    <div className={`fixed left-0 ${mobSearchbox ? "bottom-0" : "bottom-[-600px]"}  z-50 w-[100vw] bg-black/[0.75] h-[100vh] flex justify-center items-center transition-all duration-500 ease-in lg:hidden`}>
                        <AiOutlineSearch  className="text-[30px] font-semibold cursor-pointer bg-white h-[50px] pl-2 rounded-tl rounded-bl"/>
                        <input type="text" placeholder="Search here" className="h-[50px] sm:w-[50%] w-[85%] outline-none border-0 px-4 rounded-tr rounded-br"/>
                        <MdClose className=" absolute text-[30px] font-semibold cursor-pointer top-[20px] right-[30px] text-white" onClick={() => setMobSearchbox(false)}/>
                     </div>
                )
               }
                <Link to={"/cart"}>
                    <div className="relative bg-black sm:h-[50px] h-[40px] sm:w-[50px] w-[40px] text-white rounded-full flex justify-center items-center cursor-pointer">           
                        <AiOutlineShoppingCart  className="text-[24px] font-semibold cursor-pointer"/>
                        <div className="num bg-green-500 sm:h-5 sm:w-5 h-4 w-4 rounded-full text-center text-white sm:text-[14px] text-[12px] absolute top-[0px] right-[-5px] flex justify-center items-center border border-white">{products.length > 0 ? products.length : 0}</div>
                    </div>
                </Link>
                <span className="bg-green-400 sm:h-[50px] h-[40px] sm:w-[50px] w-[40px] text-white rounded-full flex justify-center items-center cursor-pointer lg:hidden  transition-all duration-500 ease-in-out" onClick={() => setMobilenav(true)}>
                    <FaBarsStaggered className="text-[24px] font-semibold cursor-pointer"/>
                </span>
                {/* navbar mobile */}
                    {
                        mobileNav && (
                                <motion.div
                                    initial={{ right:-300, opacity: 0 }}
                                    animate={{ right: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="fixed top-0 w-[250px] h-screen bg-white shadow-xl border-r border-black/[0.15] text-gray-200 z-[50] lg:hidden"
                                >
                                        <ul className="text-gray-200 flex flex-col mx-10 my-5 gap-2">
                                        {
                                            NavbarPc.map((item, index) =>{
                                                return(
                                                    <Link to={item.Link} key={index} className="font-semibold items-center text-lg text-black cursor-pointer" onClick={() => setMobilenav(false)}>{item.name}
                                                    </Link>
                                                )
                                            })
                                        }
                                        <span className="bg-green-400 h-[50px] w-[50px] text-white rounded-full flex justify-center items-center cursor-pointer lg:hidden  transition-all duration-500 ease-in-out  absolute top-[10px] right-[30px] " onClick={() => setMobilenav(false)}>
                                            <MdClose className="text-[24px] font-semibold cursor-pointer"/>
                                        </span>
                                        </ul>
                                </motion.div>
                        )
                    }
            </div>
        </nav>
  )
}

export default Navbar
