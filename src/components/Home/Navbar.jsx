import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [showSidebar, setShowSiderbar] = useState(false);
  const handleSidebar = () => {
    setShowSiderbar(!showSidebar);
  };
  return (
    <div>
      {/* navbar  */}
      <div className="px-5 py-3 flex items-center justify-between bg-default">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <Link to="/">
            <img
              src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/logo.png"
              alt=""
              className="w-[200px]"
            />
          </Link>
        </div>

        {/* nav link  */}

        <div className="flex items-center justify-center gap-7">
          <Link className="flex items-center justify-center gap-2 hover:text-yellow-500">
            <span>HOME</span>
            <IoIosArrowDown />
          </Link>
          <Link className="flex items-center justify-center gap-2 hover:text-yellow-500">
            <span>ROOMS</span>
            <IoIosArrowDown />
          </Link>
          <Link className="flex items-center justify-center gap-2 hover:text-yellow-500">
            <span>SHOP</span>
            <IoIosArrowDown />
          </Link>
          <Link className="flex items-center justify-center gap-2 hover:text-yellow-500">
            <span>BLOG</span>
            <IoIosArrowDown />
          </Link>
        </div>

        {/* nav link end  */}
        <div className="flex items-center justify-center gap-5">
          <button className="items-center hover:bg-black hover:text-white hidden lg:flex justify-center uppercase w-[250px] gap-3 bg-white py-3 px-5">
            <span className="text-xl">Book Now</span>
            <BsArrowUpRight />
          </button>

          <button className="" onClick={(e) => handleSidebar(e)}>
            <p className="w-16 h-1 border-b-2 border-slate-700 bg-slate-500"></p>
            <p className="w-12 h-1 border-b-2 my-2 border-slate-700 bg-slate-500 hover:w-16 duration-300"></p>
            <p className="w-16 h-1 border-b-2 border-slate-700 bg-slate-500"></p>
          </button>
        </div>
      </div>
      {/* hidden sidebar  */}
      {showSidebar && <Sidebar setShowSidebar={setShowSiderbar} />}
    </div>
  );
};

export default Navbar;
