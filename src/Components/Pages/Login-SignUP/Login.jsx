import { useState } from "react";
import {Link} from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import  {AiFillEye} from "react-icons/ai";
import  {AiFillEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("password")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Empty Email");
    } else if (password.length < 6 || password === "") {
      alert("Invalid Password");
    } else {
      navigate('/')
    }
  };

  const ShowPassword = () =>{
    if(showPass === "password"){
      setShowPass("text")
    } else{
      setShowPass("password")
    }
  }
  return (
    <div className="relative w-full h-[600px] flex justify-center items-center">
      <div className="absolute flex justify-center items-center gap-0">
        <div className="flex justify-start flex-col items-start bg-white rounded-[5px] sm:w-[450px] w-full sm:h-[450px] sm:py-5 py-6  sm:px-6 px-4 border border-black/[0.15] shadow-md shadow-black/[0.25]">
          <h1 className="text-[24px] font-semibold  border-b-2 w-[24px] border-purple-600 mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 border-b border-black/[0.15] sm:w-[400px] w-[280px] justify-start">
              <span className="text-purple-600 text-xl mb-3">
                <MdEmail />
              </span>
              <input
                className="text-[16px] font-semibold outline-none border-none mb-3 text-black/[0.50]"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-black/[0.15] sm:w-[400px] w-[100% mt-8">
              <div className="flex items-center gap-3">
                <span className="text-purple-600 text-xl mb-3">
                  <AiFillLock />
                </span>
                <input
                  className="text-[16px] font-semibold outline-none border-none mb-3 text-black/[0.50]"
                  type={`${showPass}`}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {
                showPass === "password" ? <AiFillEye onClick={ShowPassword} className="text-xl cursor-pointer"/> : <AiFillEyeInvisible onClick={ShowPassword}  className="text-xl cursor-pointer"/>
              }
            </div>
            <h1 className="text-[14px] font-semibold text-purple-600 my-2">
              Forgot Password?
            </h1>
            <button
              type="submit"
              className="flex justify-center items-center h-[50px] sm:w-[400px] w-[100%] bg-purple-600 text-white font-semibold text-[16px] rounded mt-6"
            >
              Log In
            </button>
          </form>
          <h1 className="sm:text-16px text-[14px] font-semibold  mt-6 flex gap-1 mx-auto">
            Don&lsquo;t Have an account? <Link to={"/signup"} className="text-purple-600"> Sign Up Now</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
