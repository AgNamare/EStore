function Footer() {
  return (
    <div className="mt-auto bg-black pt-10 flex flex-col">
        <div className="flex justify-center py-10">
          <div className="flex justify-between w-[100%] mx-[200px] text-white">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-[24px]">Exclusive</h2>
              <h3 className="cursor-pointer text-[18px]">Subscribe</h3>
              <p>Get 10% off your first order</p>
              <div className="flex items-center p-2 border w-fit border-white rounded-sm">
                <input className=" bg-inherit focus:outline-none w-[150px]" type="text" placeholder="Enter your email"/>
                <span className="material-icons text-gray-500">send</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="pb-2 text-[20px]">SUPPORT</h2>
              <p>Makunda Hayese, 1234 Ronald <br/> Ngala Street, Nairobi, 00100, <br/> Kenya</p>
              <p>makundahayese@gmail.com</p>
              <p>+254789234678</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="pb-2 text-[20px]">Account</h2>
              <p className="cursor-pointer">My Account</p>
              <p className="cursor-pointer">Login / Register</p>
              <p className="cursor-pointer">Cart</p>
              <p className="cursor-pointer">Wishlist</p>
              <p className="cursor-pointer">Shop</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="pb-2 text-[20px]">Quick Link</h2>
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Terms Of Use</p>
              <p className="cursor-pointer">FAQ</p>
              <p className="cursor-pointer">Contact</p>
            </div>
          </div>
        </div>
        <div className="text-white text-center border-t-2 border-white border-opacity-10">
          <p className="mt-5 opacity-25"> Copyright Rimel 2022. All rights reserved</p>
        </div>
    </div>
  )
}
export default Footer