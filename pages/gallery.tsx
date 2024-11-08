import Wrapper from "@/components/Wrapper";
import { gallery } from "@/Data/Data";
import Head from "next/head";
import Image from "next/image";
import React from "react";

//animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Maverick | Gallery</title>
      </Head>
      <Wrapper className="flex flex-col justify-center text-center pt-40">
        <div>
          <motion.div
           variants={smoothIn('down' , 0.5)}
           initial= 'hidden'
           animate= 'show'
           exit='hidden'
           transition={{duration: 1 , ease: 'easeInOut'}}
          className="uppercase font-semibold text-sm text-WhiteGray tracking-widest">
            - All Collection
          </motion.div>
          <motion.div
           variants={smoothIn('left' , 0.5)}
           initial= 'hidden'
           animate= 'show'
           exit='hidden'
           transition={{duration: 1 , ease: 'easeInOut'}}
          className="container grid lg:grid-cols-2 gap-8 py-8">
            {gallery.map((gallery) => (
              <div 
              key={gallery.id} >
                <div
                  key={gallery.id}
                  className="relative overflow-hidden rounded-xl group"
                >
                  <div>
                    <Image
                      src={gallery.image}
                      width={480}
                      height={380}
                      alt="Gallery"
                      className="w-full transition-shadow duration-300 transform hover:scale-125 hover:rotate-2"
                    />
                  </div>
                  <div className="absolute bottom-5 uppercase bg-Black/60 text-[1rem] tracking-widest text-WhiteGray text-left overflow-hidden ml-0 w-max">
                    <div className="px-3  py-2">{gallery.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default Gallery;
