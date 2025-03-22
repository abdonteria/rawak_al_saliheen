import { useState } from "react";
import logo from "../assets/images/logo-4.png";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [isOPen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md  rounded-b-xl">
      <nav className="container flex items-center justify-between mx-auto py-3 lg:px-0 px-6 relative">
        <div className="w-[5rem] h-[5rem]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div>
          <ul className="lg:flex hidden items-center gap-[4rem]">
            {["الرئيسية", "الدورات", "التواصل معنا", "حولنا"].map((ele, i) => (
              <li
                key={i}
                className="cursor-pointer text-lg font-semibold hover:text-teal-500 transition relative group"
              >
                {ele}
                <div className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[2px] bg-emerald-500 transition-all"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex items-center gap-5 hidden">
          <button
            className={`px-4 py-2 border-2 transition-all  bg-teal-500 text-lg font-semibold rounded-lg 
              cursor-pointer text-white hover:border-teal-500 hover:bg-transparent hover:text-teal-500
          `}
          >
            التسجيل
          </button>
          <button className="px-4 py-2 transition-all hover:text-white  text-teal-500 text-lg font-semibold rounded-lg cursor-pointer hover:bg-teal-500">
            تسجيل الدخول
          </button>
        </div>
        <div
          className="lg:hidden text-2xl cursor-pointer w-[40px] h-[40px] flex items-center justify-center transition-all hover:bg-teal-500 hover:text-white text-teal-500 rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOPen ? <FaXmark /> : <FaBars />}
        </div>
        {isOPen && (
          <div className="lg:hidden block absolute w-[90%] bottom-[-18rem] py-3 shadow-lg rounded-lg border left-2/4 -translate-x-2/4 backdrop-blur-xl">
            <ul className="lg:hidden flex flex-col items-center space-y-5 px-4">
              {["الرئيسية", "الدورات", "التواصل معنا", "حولنا"].map(
                (ele, i) => (
                  <li
                    key={i}
                    className="w-full px-4 py-2 text-lg font-semibold hover:bg-teal-500 hover:text-white hover:px-8 border hover:border-teal-500 cursor-pointer relative group rounded-md transition-all "
                  >
                    {ele}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
