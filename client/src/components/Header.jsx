import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-DarkBlue shadow-md p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-Cyan">Mitch</span>
            <span className="text-OffWhite">Estate</span>
          </h1>
        </Link>
        <form className="bg-OffWhite text-sm sm:text-base px-3 py-1 rounded-md flex items-center">
          <input
            type="text"
            className="bg-OffWhite text-sm w-24 sm:w-64 focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="text-DarkGray ml-1" />
        </form>
        <ul className="flex gap-5 text-sm sm:text-base text-OffWhite transition-all duration-3000">
          <Link to="/">
            <li className="hidden sm:inline hover:text-Cyan">Home</li>
          </Link>
          <Link to="about">
            <li className="hidden sm:inline hover:text-Cyan">About</li>
          </Link>
          <Link to="sign-in">
            <li className="hover:text-Cyan">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
