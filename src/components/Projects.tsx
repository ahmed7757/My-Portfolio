import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl dark:text-current text-primary">Projects</motion.h2>
            <div className="flex flex-col gap-6">{PROJECTS.map((Project, index) => (
                <div className="flex flex-wrap lg:justify-center" key={index}>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4">
                        <a href={Project.link} target="_blank" rel="noreferrer">
                            <img
                                src={Project.image}
                                height={150}
                                width={150}
                                alt={Project.title}
                                className="w-40 h-40 rounded"
                            />
                        </a>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:3/4">
                        <h6 className="mb-2 font-semibold  text-primary">{Project.title}</h6>
                        <p className="mb-4 text-neutral dark:text-current">{Project.description}</p>
                        {Project.technologies.map((tech, index) => (
                            <span className="mr-2 rounded dark:bg-neutral-900 bg-purple-200 text-secondary px-2 py-1 text-sm font-medium dark:text-purple-900" key={index}>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}</div>
        </div>
    )
}

export default Projects