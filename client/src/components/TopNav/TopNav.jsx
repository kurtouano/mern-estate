import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Mainlogo from "@/assets/main-icon.png";
import { useState } from "react";
import "./TopNav.css";

export default function TopNavComponent() {
  const [burgerState, setBurgerState] = useState(false);
  
  const toggleBurgerMenu = () => {
    setBurgerState(!burgerState);
  }

  return (
    <>
      <header className="flex flex-row h-16 items-center px-5 lg:px-10 mx-auto justify-between border-b-2 border-shadow topnav-header-container ">
        <nav className="flex flex-row flex-shrink-0 text-lg items-center font-bold topnav-left-items ">
          <Link to="/">
            <img src={Mainlogo} className="topnav-header-logo mr-4" alt="Logo"/>
          </Link>
          <Link to="/">
            <h1 className="text-base topnav-header-name">HomeSeeker</h1> 
          </Link>

          <form className="relative flex flex-row mx-8 text-base font-normal topnav-searchbox" action="/search" method="GET">
            <input type='text' className="pl-9 pr-4 w-[150px] lg:w-[200px] py-1 text-sm text-[#636363] lg:text-base bg-offwhite rounded-xl focus-within:outline-none topnav-searchbox-input" placeholder="Search"/>
            <button type="submit" className="absolute left-3 top-[7px] text-[#636363]"><IoSearchOutline className="topnav-search-icon"/></button>
          </form>
        </nav>

        <nav className="hidden text-sm lg:text-base font-[500] md:flex flex-row lg:items-center topnav-right-items ">
            <ul className="flex flex-row gap-2 lg:gap-5 items-center whitespace-nowrap flex-nowrap">
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/">Home</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/about">About</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/profile">Buy</Link></li>
              <li className="px-3 py-1 rounded-md topnav-link"><Link to="/profile">Rent</Link></li>
              <li className="px-3 py-1 rounded-xl orange-link"><Link to="/profile">List your property</Link></li>
              <li className="px-3 py-1 rounded-md bg-offwhite"><Link to="/sign-in">Sign in</Link></li>
            </ul>
        </nav>

        {/* Burger Menu for Small Screen */}
        <button className="md:hidden p-2 rounded-full hover:bg-[#f6f6f6] topnav-burger-btn" onClick={toggleBurgerMenu}>
          <RxHamburgerMenu className="topnav-burger-icon" size={22}/>
        </button>
        
        {burgerState && (
          <nav className="md:hidden absolute top-16 right-0 w-50 text-center bg-white shadow-md z-50">
            <ul className="flex flex-col px-5 py-3 gap-3">
              <li><Link to="/" onClick={() => setBurgerState(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setBurgerState(false)}>About</Link></li>
              <li><Link to="/profile" onClick={() => setBurgerState(false)}>Buy</Link></li>
              <li><Link to="/profile" onClick={() => setBurgerState(false)}>Rent</Link></li>
              <li><Link to="/profile" onClick={() => setBurgerState(false)} className="bg-orange-500 px-3 py-1 rounded-xl">List your property</Link></li>
              <li><Link to="/sign-in" onClick={() => setBurgerState(false)}>Sign in</Link></li>
            </ul>
          </nav>
        )}


      </header>
    </>
  );
}
