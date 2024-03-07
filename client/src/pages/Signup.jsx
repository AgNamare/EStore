import SignupPic from "../assets/SignupPic.png"

function Signup() {
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] h-[20%]">
          <img className="h-[70%]" src={SignupPic} alt="" />
        </div>
        <div className="mx-auto pt-[120px] ">
          <form action="">
            <h1 className="mb-3 text-[36px]">Create an Account</h1>
            <h3 className="mb-10">Enter your details below</h3>
            <div className="flex flex-col gap-10">
              <input className="focus:outline-none border-b-2" type="text" placeholder="Name" />
              <input className="focus:outline-none border-b-2" type="text" placeholder="Email or Phone Number" />
              <input className="focus:outline-none border-b-2" type="text" placeholder="Password"/>
              <button className="transition duration-300 ease-in-out focus:outline-none bg-primary py-3 rounded-md hover:bg-primaryHover text-white" type="submit">Create Account</button>
            </div>
            <div className="flex gap-2 w-full justify-center mt-3 py-3 border cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
              <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google Logo" />
              <span>Sign up with Google</span>
            </div>
            <div className="flex mx-auto w-full gap-3 mt-8 justify-around">
              <p>Already have an account?</p>
              <p className="underline cursor-pointer">Log in</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup