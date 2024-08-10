import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="fixed flex justify-between items-center bg-black p-5 w-full">
      <img
        src={logo}
        className="rounded-full object-cover w-32 h-32  animate-float hover:animate-spin-vertical"
      />

      <ul className="flex space-x-20 items-center font-montserrat text-white font-bold text-xl pr-3">
        <li className="hover:underline hover:underline-offset-4 cursor-pointer transition-transform duration-100 hover:scale-105">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer transition-transform duration-100 hover:scale-105">
          Slice
        </li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer transition-transform duration-100 hover:scale-105 hover:text-red-700">
          <Link to="/disclaimer">Important Disclaimer</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
