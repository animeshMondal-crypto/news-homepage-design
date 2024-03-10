import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full flex justify-center items-center sm:px-28 px-6 py-10">
      <div className="w-full flex flex-col relative">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
