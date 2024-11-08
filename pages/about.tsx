import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";
import React from "react";

//Count Up
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountIp";
import { useInView } from "react-intersection-observer";

//Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <Head>
        <title>Maverick | About</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col gap-12 items-center justify-center mb-12 min-h-screen lg:flex-row lg:mb-0 pt-28 lg:pt-10">
          <motion.div
            variants={smoothIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image src={"/about.jpg"} alt="" width={500} height={400} />
          </motion.div>
          <motion.div
            variants={smoothIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl"
          >
            <div className="uppercase font-medium text-sm text-WhiteGray">
              -Finest Transport
            </div>
            <div className="font-semibold text-3xl mt-8">
              We Value Our Clients And Want Them To Have A Nice Experience
            </div>
            <p className="text-Black text-sm mt-8 leading-7">
              The car features a modern and sophisticated design, with bold and
              stylish lines. Its sleek body is crafted from high-quality
              materials, giving it a luxurious and premium feel. Sharp LED
              lighting pairs with a streamlined grille, enhancing its elegance
              and presence on the road.
            </p>
            <button className="flex-none rounded-full bg-Red px-6 mt-4 py-2.5 text-sm font-normal hover:bg-Black transiton-all duration-300 text-white">
              Read More
            </button>
            <div
              ref={ref}
              className="flex justify-center mt-12 gap-12 flex-wrap"
            >
              {countUpItems.map((item) => (
                <div key={item.id} className="text-center">
                  <div className="text-Red text-3xl">
                    {inView && (
                      <MyCountUp start={0} end={item.number} duration={3} />
                    )}
                    +
                  </div>
                  <div className="text-Black mt-2 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
