function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="w-full flex items-center justify-between mb-8">
      <img src="/images/logo.svg" alt="logo" />
      <img
        className="lg:hidden block cursor-pointer"
        src="/images/icon-menu.svg"
        alt="menu"
        onClick={() => setSidebarOpen(!sidebarOpen)}
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

      {sidebarOpen && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
    </div>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`fixed right-0 top-0 h-full bg-slate-100 w-64 z-50 transform ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-end mr-10 mt-10 mb-20">
        <img
          className="cursor-pointer"
          src="/images/icon-menu-close.svg"
          alt="close"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <ul className="px-10 flex flex-col justify-start gap-10">
        <li className="font-semibold text-xl text-slate-800 cursor-pointer">
          Home
        </li>
        <li className="font-semibold text-xl text-slate-800 cursor-pointer">
          New
        </li>
        <li className="font-semibold text-xl text-slate-800 cursor-pointer">
          Popular
        </li>
        <li className="font-semibold text-xl text-slate-800 cursor-pointer">
          Trending
        </li>
        <li className="font-semibold text-xl text-slate-800 cursor-pointer">
          Categories
        </li>
      </ul>
    </aside>
  );
}

export default Navbar;
