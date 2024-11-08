import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import React from "react";

// Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";
import { contacts } from "@/Data/Data";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Maverick | Contact</title>
      </Head>
      <Wrapper className="flex flex-col items-center justify-center lg:flex-row lg:pt-0">
        <motion.div
          className="text-center lg:text-left lg:w-1/2 p-8"
          initial="hidden"
          animate="show"
          exit='hidden'
          variants={smoothIn("right", 0.5)}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-sm text-WhiteGray tracking-widest font-medium uppercase mb-4">
            - Finest Transport
          </div>
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl tracking-wide text-gray-800">
            Ride To Destinations With Maximum Comfort
          </h1>
          <p className="text-gray-600 leading-7 mt-6 text-base max-w-lg mx-auto lg:mx-0">
            We care about your comfort and safety. Do you require a car? Get in
            touch with us.
          </p>
          <div className="mt-8 space-y-6">
            {contacts.map((contact) => (
              <div key={contact.id} className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600">{contact.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 py-3 px-6 border border-[#bfa37c] text-sm text-[#bfa37c] uppercase tracking-wide hover:bg-[#bfa37c] hover:text-white transition">
            + More Details
          </button>
        </motion.div>

        <motion.div
          className="mt-10 lg:mt-0 lg:w-1/2 p-8"
          initial="hidden"
          exit='hiddem'
          animate="show"
          variants={smoothIn("left", 0.5)}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-20">
            Leave a Comment
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Name</label>
              <input
                type="text"
                className="appearance-none bg-transparent border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-gray-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                className="appearance-none bg-transparent border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-gray-500 transition"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Subject</label>
              <input
                type="text"
                className="appearance-none bg-transparent border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-gray-500 transition"
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Message</label>
              <textarea
                className="appearance-none bg-transparent border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-gray-500 transition resize-none h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-red-600 text-white rounded-full uppercase tracking-wide font-medium hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Contact;
