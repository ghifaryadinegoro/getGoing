import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 sm:px-10 font-[sans-serif] tracking-wide sticky top-0 z-50 mx-auto w-full bg-white rounded-b-xl">
      <nav className="flex items-center gap-4 justify-between xl:px-24">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <img
                src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
                alt="logo"
                className="h-20"
              />
            </Link>
          </div>
          <div className="flex justify-between pe-2 items-center rounded-full overflow-hidden bg-white shadow-[0_0_8px_4px_rgba(255,0,0,0.15),0_0_16px_8px_rgba(255,0,0,0.1),0_0_32px_16px_rgba(255,0,0,0.05)]">
            <input
              type="text"
              placeholder="Cari negara, kota atau guide"
              className="w-[400px] py-2 px-4 outline-none"
            />
            <button className="bg-[#cc0000] text-white p-1 rounded-full focus:ring-4 focus:ring-gray-400">
              <svg
                class="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#cc0000] focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-b-xl px-8 pb-2`}
        >
          <ul className="flex flex-col md:flex-row items-end space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <Link to="/" className="text-[#ff0404] font-extrabold">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="https://getgoing.co.id/servis-kami"
                className="text-[#ff0404] font-light focus:font-bold"
              >
                Servis Kami
              </Link>
            </li>
            <li>
              <Link
                to="https://getgoing.co.id/blog"
                className="text-[#ff0404] font-light focus:font-bold"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="https://getgoing.co.id/login"
                className="text-black text-sm font-semibold tracking-[0.2em] focus:ring-red-200 focus:ring-2 px-4 py-3 rounded-full"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
