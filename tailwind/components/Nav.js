import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Link from "next/link";
import Image from "next/image";

function NavItem({ location, label }) {
  return (
    <li
      className="block px-2 py-1 
  hover:bg-yellow-300 hover:text-black
    transition duration-300 ease-in-out
    transform hover:-translate-y-1 hover:scale-105"
    >
      <Link href={location}>{label}</Link>
    </li>
  );
}
function Nav() {
  const [isOpen, setOpen] = useState(false);
  const mobileRef = useRef();
  useOnClickOutside(mobileRef, () => setOpen(false));
  return (
    <div
      className="absolute top-0 left-0 w-full z-50      
      text-inherit
      px-16 py-2
      flex gap-2 justify-between items-center"
    >
      <div className="">
        <Image
          width="100%"
          height="100%"
          src="/bloom_logo_white.svg"
          alt="Bloom Co"
          className="logo"
        />
      </div>
      <nav className="">
        {/* wide nav - row */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-6">
            <NavItem location="/" label="Home" />
            <NavItem location="/about" label="About" />
            <NavItem location="/services" label="Services" />
            <NavItem location="/portfolio" label="Portfolio" />
            <NavItem location="/contact" label="Contact Us" />
          </ul>
        </div>

        {/* mobile nav - column */}
        <div className="md:hidden">
          {isOpen ? (
            <ul
              ref={mobileRef}
              className="absolute top-20 left-0 z-50 w-full
                  flex flex-col
                  p-5
                  bg-black 
                  text-white text-center text-3xl"
              onClick={() => setOpen(false)}
            >
              <NavItem location="/" label="Home" />
              <NavItem location="/about" label="About" />
              <NavItem location="/services" label="Services" />
              <NavItem location="/portfolio" label="Portfolio" />
              <NavItem location="/contact" label="Contact Us" />
            </ul>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="transition duration-400 ease-in
              transform hover:-translate-y-1 hover:text-yellow-300"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-8 h-8 svg-inline--fa fa-bars fa-w-14 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
