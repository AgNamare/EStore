import { useState } from "react";
import SignupPic from "../assets/SignupPic.png";
import OAuth from "../components/OAuth";
import {Link, useNavigate} from "react-router-dom"

function Signup() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password:""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch("/api/auth",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpData)
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");

    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
  }
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] h-[20%]">
          <img className="h-[70%]" src={SignupPic} alt="" />
        </div>
        <div className="mx-auto pt-[120px] ">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-3 text-[36px]">Create an Account</h1>
            <h3 className="mb-10">Enter your details below</h3>
            <div className="flex flex-col gap-10">
              <input className="focus:outline-none border-b-2" name="username" type="text" placeholder="Name" onChange={handleChange} />
              <input className="focus:outline-none border-b-2" name="email" type="email" placeholder="Email" onChange={handleChange}/>
              <input className="focus:outline-none border-b-2" name="password" type="password" placeholder="Password" onChange={handleChange}/>
              <button className="transition duration-300 ease-in-out focus:outline-none bg-primary py-3 rounded-md hover:bg-primaryHover text-white" type="submit">Create Account</button>
            </div>
            <OAuth />
            <div className="flex mx-auto w-full gap-3 mt-8 justify-around">
              <p>Already have an account?</p>
              <Link to="/sign-in">
                <p className="underline cursor-pointer">Log in</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup