import { Button } from "../../components/ui/button"
import Image from "next/image"
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center text-center sm:text-left"  >
        
        {/* left side div */}
        <div className="text-3xl px-10 w-1/2">
            <Image 
              src={"/image/facebook.svg"}
              width={300} height={100} 
              alt="facebook login"
            />
            <p className="ml-8 -mt-3">
              Facebook helps you connect and share
              with the people in your life.
            </p>
        </div>
        
        {/* right side div */}
        <div className="bg-white flex flex-col p-5 rounded-xl shadow w-1/3 ">
            <input className="my-2 border border-1  border-gray-300 p-3 rounded-md focus: outline-1 outline-blue-600   "
             type="text" placeholder="Email address or phone number" />
            <input className="my-2 border border-1  border-gray-300 p-3 rounded-md focus: outline-1 outline-blue-600  " 
            type="password" placeholder="password" />
            {/* first button */}
            <Button className="bg-blue-600 my-2 hover:bg-blue-700">Login</Button>
            <p className="text-blue-500 my-2 text-center hover:underline cursor-pointer">forgotten password?</p>
            <span className="my-2">
              <hr />
            </span>
            
            <Button className="bg-green-600 w-fit mx-auto hover:bg-green-700 ">Create New Account</Button>
            
        </div>

      
    </div>
  )
}
