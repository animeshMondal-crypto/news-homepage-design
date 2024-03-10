import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full flex items-center justify-between mb-8">
      <img src="/images/logo.svg" alt="logo" />
      <img
        className="lg:hidden block cursor-pointer"
        src="/images/icon-menu.svg"
        alt="menu"
        onClick={() => setSidebar(!sidebar)}
      />
      <ul className="lg:flex lg:flex-row hidden gap-10">
        <li className="text-slate-800 cursor-pointer hover:text-orange-500 ">
          Home
        </li>
        <li className="text-slate-800 cursor-pointer hover:text-orange-500 ">
          New
        </li>
        <li className="text-slate-800 cursor-pointer hover:text-orange-500 ">
          Popular
        </li>
        <li className="text-slate-800 cursor-pointer hover:text-orange-500 ">
          Trending
        </li>
        <li className="text-slate-800 cursor-pointer hover:text-orange-500 ">
          Categories
        </li>
      </ul>
      {sidebar && <Sidebar setSidebar={setSidebar} sidebar={sidebar} />}
    </div>
  );
}

export default Navbar;
