import { useState } from "react";
import {Link} from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  let regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Empty Email");
    } else if (!regx.test(email)) {
      alert("Invalid Email");
    } else if (password.length < 6 || password === "") {
      alert("Invalid Password");
    }  else if(password !== Confirmpassword){
        alert("password did't Match")
    }
    else {
      alert("Login successful");
    }
  };

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1656164847621-4665c4c397da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlJTIwbmlrZSUyMGJyYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')] no-repeat bg-cover">
      <div className="absolute flex justify-center items-center gap-0">
        <div className="flex justify-start flex-col items-start bg-white  border-0 rounded-[5px] sm:w-[450px] w-full sm:h-[450px] sm:py-5 py-6  sm:px-6 px-4">
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
            <div className="flex items-center gap-3 border-b border-black/[0.15] sm:w-[400px] w-[100%] justify-start mt-8">
              <span className="text-purple-600 text-xl mb-3">
                <AiFillLock />
              </span>
              <input
                className="text-[16px] font-semibold outline-none border-none mb-3 text-black/[0.50]"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 border-b border-black/[0.15] sm:w-[400px] w-[100%] justify-start mt-8">
              <span className="text-purple-600 text-xl mb-3">
                <AiFillLock />
              </span>
              <input
                className="text-[16px] font-semibold outline-none border-none mb-3 text-black/[0.50]"
                type="password"
                placeholder="Confirm Password"
                value={Confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
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
            Already Have an account? <Link to={"/login"} className="text-purple-600"> Log in Now</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;







   