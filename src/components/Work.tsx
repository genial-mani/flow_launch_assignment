import { workInterface } from "@/interfaces"
import Skill from "./Skill"
import { motion } from "motion/react"

const Work = ({work}: {work: workInterface}) => {
  return (
    <div className="w-full max-w-full min-h-fit flex flex-col justify-center px-2 sm:px-5 py-5 rounded-xl mb-5 border-2 border-purple-800">
        <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="sm:text-3xl mb-2">{work?.company}</motion.h2>
        <div className="flex flex-wrap justify-between items-center mb-5 text-sm sm:text-lg"><p>{work?.position}</p> <p>{work?.duration}</p></div>
        <div className="flex flex-wrap gap-2 sm:gap-5 mb-4">{work?.techStack?.map((tech, i)=>{
            return (
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                key={i}>
                    <Skill skill={tech}/>
                </motion.div>
            )
        })}</div>
        <p className="text-sm sm:text-lg ">{work?.desc}</p>
    </div>
  )
}

export default Work