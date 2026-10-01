import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full border-2 border-[#A855F7] bg-white">

      <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-10 lg:px-12">

        {/* =========================
            TOP SECTION
        ========================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2.2fr_1fr_1fr_1fr] md:gap-12">

          {/* =========================
              NEWSLETTER
          ========================= */}
          <div>

            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-[5px]"
            >
              <img
                src={logo}
                alt="ByteSpace"
                className="h-[22px] w-auto object-contain"
              />

              <span className="text-[11px] font-semibold tracking-[-0.3px] text-[#101828]">
                ByteSpace
              </span>
            </Link>

            <p className="max-w-[390px] text-[8px] leading-[14px] text-[#344054]">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* EMAIL */}
            <div className="mt-7 flex items-center gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[38px]
                  w-full
                  max-w-[280px]
                  rounded-full
                  border
                  border-[#D0D5DD]
                  px-5
                  text-[8px]
                  text-[#344054]
                  outline-none
                  placeholder:text-[#98A2B3]
                  focus:border-[#B8F500]
                "
              />

              <button
                type="button"
                className="
                  h-[38px]
                  shrink-0
                  rounded-full
                  bg-[#B8F500]
                  px-6
                  text-[8px]
                  font-medium
                  text-[#101828]
                  transition
                  hover:bg-[#A9E800]
                "
              >
                Search
              </button>

            </div>

            <p className="mt-5 max-w-[390px] text-[7px] leading-[12px] text-[#475467]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>

          </div>


          {/* =========================
              COLUMN 1
          ========================= */}
          <div>

            <h3 className="mb-5 text-[8px] font-medium text-[#344054]">
              Featured Courses
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Featured Categories
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Business
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                IT
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Design
              </Link>

            </div>

          </div>


          {/* =========================
              COLUMN 2
          ========================= */}
          <div>

            <h3 className="mb-5 text-[8px] font-medium text-[#344054]">
              Development
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Marketing
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Photography
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Finance
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Sport
              </Link>

            </div>

          </div>


          {/* =========================
              COLUMN 3
          ========================= */}
          <div>

            <h3 className="mb-5 text-[8px] font-medium text-[#344054]">
              Become a Creator
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Affiliate Program
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Contact
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                Help
              </Link>

              <Link
                to="#"
                className="text-[8px] text-[#475467] transition hover:text-[#003BE7]"
              >
                About
              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================= */}
        <div className="mt-16 border-t border-[#D0D5DD]" />


        {/* =========================
            BOTTOM
        ========================= */}
        <div className="flex flex-col gap-4 pt-5 md:flex-row md:items-center md:justify-between">

          <p className="text-[7px] text-[#475467]">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="#"
              className="text-[7px] text-[#475467] transition hover:text-[#003BE7]"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="text-[7px] text-[#475467] transition hover:text-[#003BE7]"
            >
              Terms of Service
            </Link>

            <Link
              to="#"
              className="text-[7px] text-[#475467] transition hover:text-[#003BE7]"
            >
              Cookies Settings
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}