import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Courses", to: "/search" },
  { label: "Creators", to: "/creator/1" },
];

const desktopLink = ({ isActive }) =>
  `text-[16px] font-normal text-white transition hover:opacity-70 ${isActive ? "opacity-100" : "opacity-80"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#003BE7]">
      <div className="nav-grid mx-auto w-full max-w-[1440px] overflow-hidden">

        {/* MAIN BAR */}
        <div className="flex h-[88px] items-center justify-between px-6 md:grid md:h-[120px] md:grid-cols-[1fr_auto_1fr] md:grid-rows-[120px] md:px-[120px]">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center gap-1.5 justify-self-start"
          >
            <img
              src={logo}
              alt="ByteSpace"
              className="h-[28px] w-auto md:h-[37px]"
            />

            <span className="text-[16px] font-bold text-white md:text-[18px]">
              ByteSpace
            </span>
          </Link>


          {/* CENTER MENU */}
          <div className="hidden items-center gap-[26px] md:flex">

            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={desktopLink}
              >
                {item.label}
              </NavLink>
            ))}

          </div>


          {/* RIGHT SIDE */}
          <div className="hidden items-center justify-self-end md:flex">

            <Link
              to="/login"
              className="text-[16px] text-white opacity-80 transition hover:opacity-100"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="ml-[26px] text-[16px] text-white opacity-80 transition hover:opacity-100"
            >
              Join Us
            </Link>

            {/* SHOPPING BAG */}
            <button
              type="button"
              aria-label="Shopping bag"
              className="ml-[34px] flex items-center justify-center text-white transition hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 8H18L19 21H5L6 8Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M9 8V6C9 4.343 10.343 3 12 3C13.657 3 15 4.343 15 6V8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >

              {menuOpen ? (
                <>
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 17H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              )}

            </svg>
          </button>

        </div>


        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#003BE7] md:hidden">

            <div className="px-6 py-4">

              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 py-3 text-[16px] text-white"
                >
                  {item.label}
                </Link>
              ))}


              {/* MOBILE AUTH LINKS */}
              <div className="flex gap-6 pt-4">

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-[16px] text-white"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="text-[16px] text-white"
                >
                  Join Us
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}