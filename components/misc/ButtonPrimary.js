import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "font-medium tracking-wide py-2 px-5 sm:px-8 text-white-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize transition-all hover:shadow-jawwalColor-md bg-jawwalColor-500 outline-none rounded-l-full rounded-r-full capitalize transition-all hover:shadow-jawwalColor border border-jawwalColor-500" +
        addClass
      }
    >
      {children}
    </button>
  );

};

export default ButtonPrimary;
