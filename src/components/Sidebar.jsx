function Sidebar({ setSidebar, sidebar }) {
  return (
    <aside className="h-screen w-[60%] bg-white absolute right-0 top-0 z-50">
      <div className="flex justify-end mb-20">
        <img
          className="cursor-pointer"
          src="/images/icon-menu-close.svg"
          alt="close"
          onClick={() => setSidebar(!sidebar)}
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

export default Sidebar;
