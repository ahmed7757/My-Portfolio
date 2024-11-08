import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Ahmed2.jpg";
import { motion } from "framer-motion";

const container: any = (delay: any) => (
    {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    }
)

const Hero = () => {
    return (
        <div className="border-b border-neutral-950 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start min-[320px]:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ahmed Gomaa</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Front End Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-2-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 1.2 }}
                            src={profilePic}
                            className="rounded-2xl w-72 h-auto "
                            alt="Ahmed Gomaa" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
