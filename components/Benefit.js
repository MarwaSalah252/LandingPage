import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Benefits = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const listUser = [
    {
      name: "Track customer issues and all staff actions until they are resolved.",
      number: "Closes the Feedback Loop",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Reduce unexpected online complaints – too late for the business to intervene.",
      number: "No Complaints",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Unhappy customers are contacted immediately – recovered and retained.",
      number: "Grows Customer Retention",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
    {
      name: "Data-driven insights for informed decisions and strategic planning.",
      number: "Analytics",
      icon: "/assets/Icon/your-fourth-icon.svg",
    },
  ];

  return (
    <div
      className=" mb-24 h-full text-center justify-center px-8 py-8 px-16 mx-auto h-full text-center justify-center bg-jawwalColor-700"
      id="benefits"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-5xl font-bold text-jawwalColor-800 leading-relaxed"
        >
          Benefits
        </motion.h3>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex mt-16 justify-center">
        {listUser.map((listUsers, index) => (
            <motion.div
              className="flex w-90 items-center justify-center sm:justify-between py-4 sm:py-6 w-8/12 px-4 sm: w-full mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="w-80  mx-auto h-80  rounded-xl flex flex-col gap-4 items-start justify-start sm: w-80 bg-white-500 px-8 py-8 rounded-xl w-full ">
                <div className="flex items-center justify-center bg-orange-100 w-14 h-14 mr-6 rounded-xl">
                  <img
                    src={listUsers.icon}
                    className="h-7 w-7"
                    alt={listUsers.name}
                  />
                </div>
                <div className="flex flex-col text-start gap-4">
                  <p className="text-xl text-black-600 font-medium ">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
