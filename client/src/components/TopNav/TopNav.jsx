import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Mainlogo from "@/assets/main-icon.png";

export default function TopNavComponent() {
  return (
    <>
      <header className="bg-transparent flex flex-row w-full h-16 px-12 justify-between border-b-2 border-shadow topnav-header-container ">
        <nav className="flex flex-row text-lg max-w-4xl items-center font-bold topnav-left-items ">
          <Link to="/">
            <img src={Mainlogo} className="topnav-header-logo mr-5" alt="Logo"/>
          </Link>
          <Link to="/">
            <h1 className="topnav-header-name">HomeSeeker</h1> 
          </Link>

        </nav>
        <nav className="flex flex-row text-base max-w-4xl items-center topnav-right-items ">
            <ul className="flex flex-row gap-8">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/profile">Buy</Link></li>
              <li><Link to="/profile">Rent</Link></li>
              <li><Link to="/profile">List your property</Link></li>
              <li><Link to="/profile">Sign in</Link></li>
            </ul>
        </nav>

      </header>
    </>
  );
}
