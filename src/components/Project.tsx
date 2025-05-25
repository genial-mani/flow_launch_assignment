import { projectInterface } from "@/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import Link from "next/link";

const Project = ({ project }: { project: projectInterface }) => {
  return (
    <div className="w-full max-w-full h-fit flex flex-col items-center justify-center pt-5 py-3 rounded-xl md:px-10 bg-[#0e0028] border-2 border-purple-800 mb-3">
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-full h-fit flex itmes-center justify-center px-2">
        <img
          src={project?.src}
          alt={project?.title}
          className="w-full max-w-sm md:max-w-4xl rounded-xl"
        />
      </motion.div>
      <div className="w-full h-fit flex flex-col itmes-center pl-5">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl my-4"
        >
          {project?.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-2 text-[14px] sm:text-lg"
        >
          {project?.desc}
        </motion.p>
        <div className="w-full max-w-full h-fit flex flex-wrap gap-2 mt-3">
          {project?.techStack?.map((tech, i) => {
            return (
              <motion.div
                key={i}
                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Icon icon={tech.icon} width="28" height="28" />
                <span className="text-sm text-slate-600">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="w-full max-w-full h-fit flex items-center justify-center gap-5 p-2 mt-4">
          {project?.liveLink && (
            <Link href={project?.liveLink} target="_blank" className="flex items-center gap-2 cursor-pointer bg-[#000] px-3 py-2 rounded-lg">
              <Icon
                icon="line-md:link"
                className=" size-5 sm:size-6"
                style={{ color: "#9410ea"}}
              />{" "}
              <p className="text-sm">Live</p>
            </Link>
          )}
          <Link href={project?.githubLink} target="_blank" className="flex items-center gap-2 cursor-pointer bg-[#000] px-3 py-2 rounded-lg">
            <Icon
              icon="line-md:github-loop"
              style={{ color: "#9410ea" }}
              className=" size-5 sm:size-6"
            />{" "}
            <p className="text-sm">Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
