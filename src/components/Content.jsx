function Content() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div className="lg:col-span-2 row-start-1">
        <img
          className="md:block hidden"
          src="/src/assets/images/image-web-3-desktop.jpg"
          alt="img"
        />
        <img
          className="sm:hidden block"
          src="/src/assets/images/image-web-3-mobile.jpg"
          alt="img"
        />
      </div>
      <div className="flex flex-col justify-start items-start bg-black p-5 gap-5 lg:row-span-2 lg:row-start-1 row-start-4">
        <h1 className="text-orange-300 text-4xl font-bold">New</h1>
        <div className="border-b-2 border-slate-500 pb-8">
          <h1 className="text-white text-xl font-semibold mb-3 cursor-pointer hover:text-orange-300">
            Hydrogen VS Electric Cars
          </h1>
          <p className=" text-slate-300">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="border-b-2 border-slate-500 pb-8">
          <h1 className="text-white text-xl font-semibold mb-3 cursor-pointer hover:text-orange-300">
            The Downsides of AI Artistry
          </h1>
          <p className=" text-slate-300">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold mb-3 cursor-pointer hover:text-orange-300">
            Is VC Funding Drying Up?
          </h1>
          <p className=" text-slate-300">
            Private funding by VC firms is doen 50% YOY. We take a look at what
            it means.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-6xl font-bold">The Bright Future of Web 3.0?</h1>
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="text-slate-800 text-justify mb-5">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fullfilling the promise?
        </p>
        <button className="uppercase px-10 py-3 bg-orange-500 text-white hover:bg-black">
          read more
        </button>
      </div>
      <div className="flex gap-5">
        <img
          className="sm:h-44 h-32"
          src="/src/assets/images/image-retro-pcs.jpg"
          alt="img"
        />
        <div className="flex flex-col sm:gap-3">
          <h1 className="font-bold sm:text-5xl text-2xl text-slate-400">01</h1>
          <h1 className="font-bold cursor-pointer hover:text-orange-500 text-[15px]">
            Reviving Retro PCs
          </h1>
          <p className="text-slate-800 text-justify text-[16px]">
            What happens when old PCs are given modern updates?
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <img
          className="sm:h-44 h-32"
          src="/src/assets/images/image-top-laptops.jpg"
          alt="img"
        />
        <div className="flex flex-col sm:gap-3">
          <h1 className="font-bold sm:text-5xl text-2xl text-slate-400">02</h1>
          <h1 className="font-bold cursor-pointer hover:text-orange-500 text-[15px]">
            Top 10 Laptops of 2022
          </h1>
          <p className="text-slate-800 text-justify text-[16px]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <img
          className="sm:h-44 h-32"
          src="/src/assets/images/image-gaming-growth.jpg"
          alt="img"
        />
        <div className="flex flex-col sm:gap-3">
          <h1 className="font-bold sm:text-5xl text-2xl text-slate-400">03</h1>
          <h1 className="font-bold cursor-pointer hover:text-orange-500 text-[15px]">
            The Growth of Gaming
          </h1>
          <p className="text-slate-800 text-justify text-[16px]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
