import { useState } from "react";
import SignupPic from "../assets/SignupPic.png";
import OAuth from "../components/OAuth";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice";

function SignIn() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password:""
  });

  const {loading, error} = useSelector((state=>state.user))

  const dispatch = useDispatch();

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signIn",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      signInSuccess(data)
    } catch (error) {
      dispatch(signInFailure(error.message));
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
            <h1 className="mb-3 text-[36px]">Log in to Exclusive</h1>
            <h3 className="mb-10">Enter your details below</h3>
            <div className="flex flex-col gap-10">
              <input className="focus:outline-none border-b-2" name="email" type="email" placeholder="Email" onChange={handleChange} />
              <input className="focus:outline-none border-b-2" name="password" type="password" placeholder="Password" onChange={handleChange}/>
              <button className="transition duration-300 ease-in-out focus:outline-none bg-primary py-3 rounded-md hover:bg-primaryHover text-white" type="submit">Log In</button>
            </div>
            <OAuth />
            <div className="flex mx-auto w-full gap-3 mt-8 justify-around">
              <p>Don't have an Account?</p>
              <Link to="/sign-up"><p className="underline cursor-pointer">Sign Up</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
