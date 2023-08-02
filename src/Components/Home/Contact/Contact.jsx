import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault()
    if(name.length && email.length && message.length > 0){
        alert("Message Send Successfully")
        setName("")
        setEmail("")
        setMessage("")
    }
  };
  return (
    <div
      className="container my-16 sm:mx-[30px] sm:w-[400px] w-auto flex flex-col justify-center items-center"
      onSubmit={(e) => HandleSubmit(e)}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-[600]">Contact Us</h1>
        <p className="text-center  text-[14px] text-black/[0.50] font-normal">
          Learn about our company profile, communityimpact, sustainable
          motivation, and more.
        </p>
      </div>
      {/* form goes here  */}
      <form action="" className="flex flex-col justify-center items-start my-5">
        <label htmlFor="name" id="name"  className="text-[14px] font-[300]">
          NAME*
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="bg-gray-300 sm:w-[400px] w-[270px] h-[50px] outline-none px-4 mt-2 text-black/[0.50] focus:border border-green-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        //   required
        />
        <label htmlFor="email" id="email" className="text-[14px] font-[300] mt-6">
          EMAIL*
        </label>
        <input
          name="email"
          type="text"
          id="email"
          className="bg-gray-300 sm:w-[400px] w-[270px] h-[50px] outline-none px-4 mt-1 text-black/[0.50] focus:border border-green-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        //   required
        />
        <label htmlFor="message"  id="message" className="text-[14px] font-[300] mt-6">
          YOUR MESSAGE*
        </label>
        <textarea
          name="message"
          id="message"
          cols="10"
          rows="3"
          className="bg-gray-300 sm:w-[400px] w-[270px] outline-none px-4 py-6 mt-1 text-black/[0.50] focus:border border-green-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        //   required
        ></textarea>

        <button
          name="name"
          type="submit"
          className="text-[18px] text-white bg-[#2AC37D] py-3 px-6 rounded-[50px] w-[200px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out mx-auto cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
