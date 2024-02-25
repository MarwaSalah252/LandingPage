import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 ">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-black-600 leading-normal  ">
              Delivering Customer Feedback via their Mobile Phone.
            </h1>
            <h1 className="text-xl lg:text-xl xl:text-2xl font-medium text-black-400 leading-normal mt-6">
              No app | Works on all phones | Immediately.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              <strong className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">
                Bubbles
              </strong>
              allows brick-and-mortar businesses to gather real-time feedback
              from customers via their mobile phones. By swiftly addressing
              concerns and tracking resolutions, it prevents customer loss and
              maintains a positive reputation.
            </p>
            <div className="flex gap-8">
              <ButtonOutline>Request Demo</ButtonOutline>
              <ButtonPrimary>Login</ButtonPrimary>
            </div>
          </div>
          <div className=" flex w-full ">
            <motion.div className=" h-full w-full " variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="logo"
                quality={100}
                width={470}
                height={390}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export default Hero;
