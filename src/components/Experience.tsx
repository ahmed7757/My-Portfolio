import { Experiences } from "../constants"
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 px-14">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl dark:text-current text-primary">Experience</motion.h2>
            <div className="flex flex-col gap-6">{Experiences.map((experience, index) => (
                <div className="flex flex-wrap items-center gap-6 justify-between" key={index}>
                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                        className="font-semibold text-2xl text-neutral dark:text-current"
                    >{experience.type}</motion.h2>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:3/4 flex flex-col justify-center">
                        <h6 className="mb-2 font-semibold  text-primary">{experience.title}</h6>
                        <p className="mb-4 text-neutral dark:text-current">{experience.description}</p>
                        <div className="flex flex-wrap gap-4">
                            {experience.technologies.map((tech, index) => (
                                <span className=" rounded dark:bg-neutral-900 bg-purple-200 text-secondary px-2 py-1 text-sm font-medium dark:text-purple-900" key={index}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}</div>
        </div>
    )
}

export default Experience