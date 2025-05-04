import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Mainlogo from "@/assets/main-icon.png";
import "./TopNav.css";

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

          <form className="relative flex flex-row mx-8 text-base font-normal topnav-searchbox" action="/search" method="GET">
            <input type='text' className="pl-9 pr-4 py-1 bg-offwhite rounded-xl focus-within:outline-none topnav-searchbox-input" placeholder="Search..."/>
            <button type="submit" className="absolute left-3 top-[7px]"><IoSearchOutline className="topnav-search-icon"/></button>
          </form>
        </nav>

        <nav className="flex flex-row text-base max-w-4xl items-center topnav-right-items">
            <ul className="flex flex-row gap-5 items-center">
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/">Home</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/about">About</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/profile">Buy</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/profile">Rent</Link></li>
              <li className="px-3 py-1 rounded-xl orange-link"><Link to="/profile">List your property</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/profile">Sign in</Link></li>
            </ul>
        </nav>

      </header>
    </>
  );
}
