import React from "react"
import { Spotlight } from "./ui/Spotlight"
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
    return (
        <div className="">
            <div className="relative">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen
                 fill-white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill-white" />
                <Spotlight className="top-18 left-80 h-[80vh] w-[50vw] fill-blue-950" />
            </div>
            <div
                className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:32px_32px]",
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                    )} />
                {/* Radial gradient for the container to give a faded look */}

                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest sm:text-xs text-xl text-center text-blue-100 max-w-80">
                            Web Developer</h2>

                        <TextGenerateEffect
                            className="text-center text-[35px] md:text-5xl lg:text-6xl "
                            words="hello what are you waiting for? let's build something amazing together."
                        />
                        <p className="text-center dark:text-white text-black md:tarcking-wider 
                        mb-4 text-sm md:text-lg lg:text-2xl">
                            Hi, I&apos;m Adarsh, a React developer based in India.
                        </p>
                        <a href="#projects">
                            <MagicButton title="See my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
