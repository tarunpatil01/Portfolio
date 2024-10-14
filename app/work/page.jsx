"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend Study-Sync",
    title: "Project 1",
    description:
      "A responsive web application with animation made with HTML CSS.",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    live: "https://study-sync-frontend.vercel.app/",
    github: "https://github.com/tarunpatil01/study-sync-frontend",
    image: "/assets/work/thumb1.png",
  },
  {
    num: "02",
    category: "Melodfy Music Player",
    title: "Project 2",
    description:
      "I used HTML, CSS, and JavaScript to create a simple yet cool music player. It’s got all the basics - play, pause, next, previous, slide bar, Song List and a volume bar. Plus, it looks good on your phone too! 📱",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "javascript" }],
    live: "https://melodfy.freewebhostmost.com/",
    github: "https://github.com/tarunpatil01/Melodfy-Music_Player",
    image: "/assets/work/thumb2.png",
  },
  {
    num: "03",
    category: "Pass-OP Password Manager",
    title: "Project 3",
    description:
      "Created an interactive password manager that securely stores user passwords.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "MongoDB" }],
    live: "https://pass-op-password.netlify.app/",
    github: "https://github.com/tarunpatil01/PassOP-Password-Manager",
    image: "/assets/work/thumb3.png",
  },
  {
    num: "04",
    category: "TaskBuddy",
    title: "Project 4",
    description:
      "It is a Todo Website made using React and mongoDB for database.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "MongoDBs" }],
    live: "https://taskbuddy-todo.netlify.app/",
    github: "https://github.com/tarunpatil01/TaskBuddy",
    image: "/assets/work/thumb4.png",
  },
  {
    num: "05",
    category: "Balloon Shooter Game",
    title: "Python Project",
    description:
      "Balloon Shooter is a simple arcade-style game where the player shoots balloons with mouse. The objective of the game is to shoot as many balloons as possible..",
    stack: [{ name: "Python" }, { name: "PyGame-python module" }],
    live: "https://www.linkedin.com/posts/tarun-patil-73317024b_python-pygame-gamedevelopment-activity-7177602556871806976-Ecy9/?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/tarunpatil01/Balloon-Shooter-Game",
    image: "/assets/work/thumb5.png",
  },
  {
    num: "06",
    category: "Industry/Internship Paid Project",
    title: "Global Fire Services Website",
    description:
      "A website for Global Fire Services, a company that provides fire safety services.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    live: "https://global25fireservices.com",
    image: "/assets/work/thumb6.png",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentSlide = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,
        transition: { dealy: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">projects
      <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            {/* project description */}
            <p className="text-white/60">{project.description}</p>
            {/* project stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/60 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/60 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide 
                  key={index}
                  className="w-full">
                    <div className="h-[460px] rounded-xl relative group flex justify-center item-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute rounded-xl top-0 bottom-0 w-full h-full bg-black/10 z-10">
                      </div>
                      { /* image */}
                      <div className="relative rounded-xl w-full h-full">
                        <Image 
                        src={project.image}
                        fill
                        className="rounded-xl object-fit"
                        alt=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default Work;
