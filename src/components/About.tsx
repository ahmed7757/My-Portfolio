import aboutImg from "../assets/Ahmed.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-neutral dark:text-current">About <span className="dark:text-neutral-500 text-primary">Me</span></h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex items-center justify-center md:justify-start">
                        <img className="rounded shadow-md shadow-primary-content w-96 h-auto" src={aboutImg} alt="" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 text-neutral dark:text-current">
                    <div className="flex justify-end lg:justify-start">
                        <p className="my-2 max-2-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About