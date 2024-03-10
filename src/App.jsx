import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const [bar, setSidebarOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center sm:px-28 px-6 py-10">
      <div className="w-full flex flex-col relative">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Content />
        {sidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
        )}
      </div>
    </div>
  );
}

export default App;
