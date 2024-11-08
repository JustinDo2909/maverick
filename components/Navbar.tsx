import { navLinks } from "@/Data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoLogoGooglePlaystore, IoMailOpen } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const socialIcons = 'text-3xl px-2 cursor-pointer text-white bg-Black rounded-full '
  const isActive = (path: string) =>
    pathname === path ? "text-Red" : "text-Black";

  return (
    <header className={`fixed w-full top-0 left-0 z-20 backdrop-blur-sm bg-opacity-80 bg-white shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-tr w-full">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-3xl text-Black">
            Maverick <span className="text-Red text-[48px]">.</span>
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.path}
                href={navLink.path}
                className={`text-sm uppercase font-medium ${isActive(
                  navLink.path
                )}`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <HiOutlineMenuAlt4
              className="text-Black cursor-pointer w-6 h-6"
              onClick={() => setShowMenu(true)} // Open the menu
            />
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showMenu ? 40 : 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="bg-gradient-to-t from-neutral-300 to-pink-600 fixed top-0 right-0 w-16 h-16 rounded-full"
      ></motion.div>

      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showMenu ? -30 : 0 }}
        transition={{ duration: 0.5 }}
        className={`h-screen md:hidden flex flex-col justify-center ${
          showMenu ? "" : "hidden"
        }`}
      >
        {navLinks.map((navLink) => (
          <Link
            key={navLink.label}
            href={navLink.path}
            className={`px-3 py-2 flex justify-center text-xl uppercase font-semibold ${isActive(
              navLink.path
            )}`}
            onClick={() => setShowMenu(false)} // Close the menu on link click
          >
            {navLink.label}
          </Link>
        ))}
        <div className="mt-6 flex justify-center items-center flex-row gap-4">
          <Link href={'https://www.googleplay.com'} target={'_blank'}>
          <IoLogoGooglePlaystore className={socialIcons}/>
          </Link>
          <Link href={'https://www.googleplay.com'} target={'_blank'}>
          <IoLogoSkype className={socialIcons}/>
          </Link>
          <Link href={'https://www.googleplay.com'} target={'_blank'}>
          <IoMailOpen className={socialIcons}/>
          </Link>
        </div>
        <HiX
          className="absolute text-Black top-11 right-5 w-6 h-6 cursor-pointer"
          onClick={() => setShowMenu(false)} // Close the menu on X click
        />
      </motion.nav>
    </header>
  );
};

export default Navbar;
