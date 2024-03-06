import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <div className="bg-black h-10 flex items-center justify-center">
        <p className="capitalize text-text-white">summer sale for all swim suits and free express delivery - OFF 50%</p>
      </div>
      <div className="flex items-center justify-around w-full pt-8 pb-5 border-b border-gray border-1">
        <p className="font-bold text-[24px]">Exclusive</p>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Sign Up</li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Header