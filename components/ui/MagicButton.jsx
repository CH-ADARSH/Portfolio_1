"use client";

import React from "react";

const MagicButton = ({ title, position, icon, className = "", handleClick, otherClasses }) => {
    return (
        <button
            className={`relative inline-flex 
      h-10 sm:h-11 md:h-12
      overflow-hidden rounded-lg p-[1px]
      focus:outline-none md:w-60 md:mt-10 cursor-pointer ${className}`}
        >
            {/* Animated Border */}
            <span
                className="absolute inset-[-1000%] animate-spin
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />

            {/* Glow */}
            <span className="absolute inset-0 rounded-lg bg-purple-500 blur-md opacity-60" />

            {/* Content */}
            <span
                className={`"relative inline-flex items-center justify-center
        h-full w-full whitespace-nowrap
        rounded-lg bg-black
        px-6 sm:px-5 md:px-6
        text-xs sm:text-sm md:text-base
        font-medium text-white
        backdrop-blur-xl
        transition-transform duration-300 gap-3
        " ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
