import { useState, useEffect } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
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
    <button
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out hover:bg-blue-600 focus:outline-none z-50 ${
        showButton ? "block" : "hidden"
      } `}
      onClick={scrollToTop}
    >
      <LiaAngleUpSolid size={20} />
    </button>
  );
};

export default ScrollToTopButton;
