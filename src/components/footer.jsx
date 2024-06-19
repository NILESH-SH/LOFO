import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="absolute w-full mt-10 bottom-0">
        <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-8 gap-8">
            <div className="flex gap-8 text-lg">
                <a href="#" className="text-gray-600 hover:text-gray-900"><BsTwitterX />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram /></a>
            </div>
            <a href="#" id="brand" className="flex gap-2 items-center flex-1">
                <img className="object-cover max-w-12 max-h-12" src="https://www.ncuindia.edu/wp-content/uploads/2023/01/logo-ncu-home.png" alt="Logo"/>
                <span className="text-lg font-medium font-display">Ncu</span>
            </a>
        </div>
        <div id="sub-footer" className="flex flex-col gap-6 items-center justify-center my-12">
            <div className="flex gap-2 items-center ">
                <p className="text-sm text-gray-600">The NorthCap University.</p>
            </div>
            <p className="text-sm text-gray-400">© 2024 NCU, Inc. All rights reserved.</p>
        </div>
    </footer>
  )
}
