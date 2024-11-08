import React from "react";
import { WrapperProps } from "@/Types";
import Link from "next/link";
import {
  IoLogoGooglePlaystore,
  IoLogoSkype,
  IoMailOpen,
} from "react-icons/io5";
const Wrapper = ({ children, className }: WrapperProps) => {
  const socialIcons =
    "text-3xl px-2 cursor-pointer text-white bg-Black rounded-full ";

  return (
    <section className={className}>
      <>
        {children}
        <div className="fixed bottom-12 right-6 hidden md:flex items-center flex-col gap-4">
          <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoLogoGooglePlaystore className={socialIcons} />
          </Link>
          <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoLogoSkype className={socialIcons} />
          </Link>
          <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoMailOpen className={socialIcons} />
          </Link>
        </div>
      </>
    </section>
  );
};

export default Wrapper;
