import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Car from "@/components/Car";
import Stack from "@/components/Stack";

//Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function index() {
  return (
    <>
      <Head>
        <title>Maverick - Home</title>
      </Head>
      <Wrapper className="text-center flex flex-col justify-center">
        <div
          className="bg-[#ac9697] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w=[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
         w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>

        <div className="w-full h-full">
          <div>
            <motion.div
              variants={smoothIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 lg:mt-20 mt-28"
            >
              <Stack />
            </motion.div>
            <motion.h1
              variants={smoothIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Book. Perfect. {""}
              <span className="text-Red">Ride.</span>
            </motion.h1>
            <motion.p
              variants={smoothIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-Black mx-auto max-w-xl flex justify-center"
            >
              Car Dealer is most enticing, creative, modern and multipurpose
              auto dealer Premium WordPress Theme. Suitable for any car dealer
              website, business or corporate websies. Express your style on the
              road with our diverse Vehicle Color Variants, offering
              personalized choices for every journey. Enhance visuals with
              interactive points, providing details and engaging storytelling
              within your images effortlessly
            </motion.p>
            <motion.div
              variants={smoothIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 flex gap-4 justify-center z-10"
            >
              <button className="bg-Red rounded-full py-2.5 px-6 flex-none text-sm font-normal hover:bg-Black transition-all duration-300 text-white">
                Views Details
              </button>
              <button className="bg-Red rounded-full py-2.5 px-6 flex-none text-sm font-normal hover:bg-Black transition-all duration-300 text-white">
                Rent Now
              </button>
            </motion.div>
            <div className="mt-20 w-full h-full">
              <motion.div
                variants={smoothIn("left", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full h-full flex justify-center"
              >
                <Car />
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
