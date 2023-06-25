import phootologo120x120 from "../../src/assets/phootologo120x120.png"

export default function Navbar() {
  return (
    <header className="fixed z-20 w-full h-10 bg-blue-500 top-0 left-0">
    <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img style={{
          width:40+'px',
          height:40+'px',
        }} src={phootologo120x120} alt="" />
        <span className="font-semibold text-md md:text-lg lg:text-xl tracking-tight">
        
        </span>
      </div>
      <div className="block">
        {/** lg:hidden */}
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
    </header>
  );
}