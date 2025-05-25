import { educationInterface } from "@/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "motion/react";

const Education = ({ education }: { education: educationInterface }) => {
  return (
    <div className="w-full max-w-full min-h-fit flex flex-wrap sm:flex-nowrap justify-center items-start sm:items-center gap-2 rounded-lg py-4 sm:py-2 px-2 border-2 border-purple-800">
      <div
        className="flex items-start justify-start sm:justify-center  w-full max-w-full sm:w-1/3 h-fit px-3"
      >
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: [-90, 30, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="flex items-center justify-center w-40 sm:w-full sm:max-w-[200px] h-fit"
        >
          <img src={education?.photo} alt={education?.institution} />
        </motion.div>
      </div>

      <div className="w-full max-w-full min-h-fit px-5 sm:px-5">
        <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl sm:text-3xl mt-2">{education?.institution}</motion.h2>
        <div className="w-full max-w-full flex flex-wrap justify-between items-center mt-2 text-sm sm:text-lg">
          <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          >{education?.program}</motion.p>
          <p>{education?.year}</p>
        </div>
        <div className="w-full max-w-full flex flex-col gap-2 mt-4 text-sm sm:text-lg">
          {education?.description?.map((desc, index) => (
            <div className="flex items-start gap-2" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 10 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="size-7"
              >
                <Icon icon="meteocons:star" width="24px" height="24px" />
              </motion.div>
              <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              >{desc}</motion.p>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <Link
            href={education?.website}
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            <p className="flex justify-center items-center text-sm sm:text-lg">Website</p>
            <div><Icon icon="dashicons:admin-site-alt3" width="24px" height="24px" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
