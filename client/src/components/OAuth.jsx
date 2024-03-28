import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";


function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async() => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider)

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name:result.user.displayName, email:result.user.email, photo: result.user.photoURL})
      })
      const data = await res.json();
      dispatch(signInSuccess(data))
    } catch (error) {
      console.log("Could not sign in with Google", error)
    }
  
  }
  return (
    <div>
      <button type="button" onClick={handleGoogleClick} className="flex gap-2 w-full justify-center mt-3 py-3 border cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google Logo" />
        <span>Continue with Google</span>
      </button>
    </div>
  )
}

export default OAuth
