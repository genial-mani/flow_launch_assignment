"use client";

import Education from "@/components/Education";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import profileData from "@/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "motion/react";
import { Certificates } from "@/components/Certificates";

export default function Home() {
  const projects = profileData.projects;
  const skills = profileData?.skills;

  return (
    <div>
      <div id="profile" className="flex flex-col sm:px-4 pb-4">
        <div className="w-full max-w-full min-h-screen flex flex-wrap sm:flex-nowrap items-center justify-center sm:px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid place-items-center relative"
          >
            <img
              src={profileData?.photo}
              alt="profile_photo"
              className="max-w-xs"
            />
            <motion.div
            className="absolute left-20 top-35"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            ><Icon icon="skill-icons:typescript" width="30px" height="30px"/></motion.div>
            <motion.div
            className="absolute right-10 top-10"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.7 }}
            ><Icon icon="devicon:nextjs" width="30px" height="30px"/></motion.div>
            <motion.div
            className="absolute bottom-30 left-20"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.9 }}
            ><Icon  icon="logos:hono" width="30px" height="30px"/></motion.div>
            <motion.div
            className="absolute left-10 top-10"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.1 }}
            ><Icon icon="skill-icons:mongodb" width="30px" height="30px"/></motion.div>
            <motion.div
            className="absolute right-10 bottom-10"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.3 }}
            ><Icon icon="skill-icons:github-dark" width="30px" height="30px"/></motion.div>
            <motion.div
            className="absolute right-20 bottom-50"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.5 }}
            ><Icon icon="skill-icons:cpp" width="30px" height="30px"/></motion.div>
          </motion.div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" w-full max-w-full text-3xl md:text-5xl p-2 text-left"
            >
              {profileData?.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[16px] sm:text-xl p-2"
            >
              {profileData?.bio}
            </motion.p>
            <div className="w-full max-w-full flex justify-center items-center gap-3 p-2">
              <Link target="_blank" href={profileData?.contact?.github}>
                <Icon
                  icon="line-md:github-loop"
                 className=" size-7 sm:size-10"
                  style={{ color: "#9410ea" }}
                />
              </Link>
              <Link
                target="_blank"
                href={`mailto:${profileData?.contact?.email}`}
              >
                <Icon
                  icon="line-md:email"
                 className=" size-7 sm:size-10"
                  style={{ color: "#9410ea" }}
                />
              </Link>
              <Link target="_blank" href={profileData?.contact?.linkedIn}>
                <Icon
                  icon="line-md:linkedin"
                 className=" size-7 sm:size-10"
                  style={{ color: "#9410ea" }}
                />
              </Link>
              <Link target="_blank" href={profileData?.contact?.twitter}>
                <Icon
                  icon="line-md:twitter-x"
                 className=" size-7 sm:size-10"
                  style={{ color: "#9410ea" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="education" className="flex flex-col pt-4">
        <h2 className="text-center text-3xl sm:text-5xl mb-4">Education</h2>
        <div className="w-full max-w-full flex flex-col gap-5 sm:px-5 px-2 py-2">
          {profileData?.academics.map((education, index) => {
            return (
              <div className="w-full max-w-full h-fit" key={index}>
                <Education education={education} />
              </div>
            );
          })}
        </div>
      </div>
      <div id="skills" className="flex flex-col mt-10 px-2 sm:px-5">
        <h2 className="text-center text-3xl sm:text-5xl md:mb-5 md:mt-20">Skills</h2>
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Programming Languages</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.languages?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className=" text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Frontend</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.frontend?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Backend</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.backend?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Databases</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.databases?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">API and Auth</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.api_and_auth?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Data Science and ML Libraries</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.data_science_ml?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Hosting and Deployment</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.hosting_and_deployment?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl mt-5 md:mt-10 mb-1 sm:mb-3">Other Tools</h2>
          <div className="flex flex-wrap gap-3 sm:gap-5 ">
            {skills?.other_tools?.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={index}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div id="projects" className="flex flex-col">
        <h2 className="text-center text-3xl sm:text-5xl mt-10 md:mt-20 mb-3 md:mb-5">Projects</h2>
        <div className="flex flex-col gap-10 px-2 sm:px-5">
          {projects.map((project, index) => (
            <div key={index}>
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
      <div id="work" className="flex flex-col">
        <h2 className="text-center text-3xl sm:text-5xl mt-10 md:mt-20 mb-3 md:mb-5">Work Experience</h2>
        <div className="w-full max-w-full flex flex-col sm:px-5 px-2">
          {profileData?.experience.map((work, index) => {
            return (
              <div className="w-full max-w-full min-h-fit" key={index}>
                <Work work={work} />
              </div>
            );
          })}
        </div>
      </div>
      <div id="certi" className="flex flex-col sm:my-20">
        <h2 className="text-center text-3xl sm:text-5xl mt-10 md:mt-20 md:mb-5">Certifications</h2>
        <div className="flex flex-col gap-4 mb-0">
          <Certificates/>
        </div>
      </div>
      <div className="w-full max-w-full min-h-fit flex items-center justify-center py-3 mb-16 sm:mb-20 text-sm sm:text-lg">
          <div className="flex items-center gap-1">
            <span>made with</span>
            <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            ><Icon icon="fluent-emoji:purple-heart" width="24px" height="24px" /></motion.div>
            <span> by </span>
            <Link href={profileData?.contact?.github} target="_blank" className="text-purple-600 font-bold">{profileData?.name}</Link>
          </div>
      </div>
    </div>
  );
}
