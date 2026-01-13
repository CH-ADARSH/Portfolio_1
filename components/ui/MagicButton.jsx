"use client";

import React, { useEffect, useState } from "react";

const MagicButton = ({
    title,
    position = "right",
    icon,
    className = "",
    handleClick,
    otherClasses = "",
}) => {
    const [mounted, setMounted] = useState(false);

    // Prevent SSR hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={handleClick}
            className={`relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] cursor-pointer focus:outline-none ${className}`}
        >
            {/* Animated border */}
            <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* Glow */}
            <span className="absolute inset-0 rounded-lg bg-purple-500 blur-md opacity-60" />

            {/* Content */}
            <span
                className={`relative inline-flex items-center justify-center h-full w-full whitespace-nowrap rounded-lg bg-black px-6 text-sm font-medium text-yellow-50 backdrop-blur-xl transition-transform duration-300 gap-3 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
