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
      <header className="flex flex-row h-[65px] items-center px-5 lg:px-20 mx-auto justify-between border-b-2 border-shadow topnav-header-container ">
        <nav className="flex flex-row flex-shrink-0 text-lg items-center font-bold topnav-left-items ">
          <Link to="/">
            <img src={Mainlogo} className="topnav-header-logo mr-4" alt="Logo"/>
          </Link>
          <Link to="/">
            <h1 className="text-base topnav-header-name">HomeSeeker</h1> 
          </Link>

          <form className="relative flex flex-row mx-8 text-base font-normal topnav-searchbox" action="/search" method="GET">
            <input type='text' className="pl-9 pr-4 w-[150px] lg:w-[220px] py-1.5 text-sm text-[#494949] lg:text-base bg-offwhite rounded-md focus-within:outline-none topnav-searchbox-input" placeholder="Search"/>
            <button type="submit" className="absolute left-3 top-[9px] text-[#636363]"><IoSearchOutline className="topnav-search-icon"/></button>
          </form>
        </nav>

        <nav className="hidden text-sm lg:text-base font-[500] md:flex flex-row lg:items-center topnav-right-items ">
            <ul className="flex flex-row gap-2 lg:gap-5 items-center whitespace-nowrap flex-nowrap">
            <Link to="/"><li className="px-4 py-1.5 rounded-md topnav-link">Home</li></Link>
            <Link to="/about"><li className="px-3 py-1.5 rounded-md topnav-link">About</li></Link>
            <Link to="/profile"><li className="px-3 py-1.5 rounded-md topnav-link">Buy</li></Link>
            <Link to="/profile"><li className="px-3 py-1.5 rounded-md topnav-link">Rent</li></Link>
            <Link to="/profile"><li className="px-4 py-1.5 rounded-md orange-link">List your property</li></Link>
            <Link to="/sign-in"><li className="px-4 py-1.5 rounded-md topnav-link top-nav-sign-in-link">Sign in</li></Link>
            </ul>
        </nav>

        {/* Burger Menu for Small Screen */}
        <button className="md:hidden p-2 rounded-full hover:bg-[#f6f6f6] topnav-burger-btn" onClick={toggleBurgerMenu}>
          <RxHamburgerMenu className="topnav-burger-icon" size={22}/>
        </button>
        
        {burgerState && (
          <nav className="md:hidden absolute top-16 right-0 w-50 text-center bg-white shadow-md z-50">
            <ul className="flex flex-col px-5 py-3 gap-3">
            <Link to="/" onClick={() => setBurgerState(false)}><li>Home</li></Link>
            <Link to="/about" onClick={() => setBurgerState(false)}><li>About</li></Link>
            <Link to="/profile" onClick={() => setBurgerState(false)}><li>Buy</li></Link>
            <Link to="/profile" onClick={() => setBurgerState(false)}><li>Rent</li></Link>
            <Link to="/profile" onClick={() => setBurgerState(false)} className="bg-orange-500 px-3 py-1 rounded-xl"><li>List your property</li></Link>
            <Link to="/sign-in" onClick={() => setBurgerState(false)}><li>Sign in</li></Link>
            </ul>
          </nav>
        )}


      </header>
    </>
  );
}
