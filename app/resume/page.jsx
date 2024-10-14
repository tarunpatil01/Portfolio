"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaWindows,
  FaPython,
  FaJava,
  FaAws,
  FaDatabase,
  FaNetworkWired,
  FaLock,
  FaVideo,
  FaPhotoVideo,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiDatabricks,
} from "react-icons/si";

import {
  TbApi,
  TbBrandCpp,
} from "react-icons/tb"

//about data
const about = {
  title: "About Me",
  description: `I'm a full-stack web developer and coder based in Pune, India. I specialize in creating fast, accessible, and inclusive websites and web applications.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tarun Patil",
    },
    {
      fieldName: "Email",
      fieldValue: "tarunpatil09876@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Pune, India",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9529987900",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Gaming,Coding,Music",
    },
    {
      fieldName: "Education",
      fieldValue: "B.TECH. Information Technology",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 years",
    },
  ],
};

//experience data
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 1 years of experience in web development. I have worked with various clients and companies to build websites and web applications that are fast, secure, and easy to manage.",
  items: [
    {
      company: "GlobalFire Services",
      role: "Full Stack Web Developer",
      duration: "Sept 2024 - Dec 2024",
    },
    {
      company: "AICTE, Edu Skills",
      role: "Data Engineering",
      duration: "April - June 2024",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a degree in Information Technology in Engineering. I have completed my B.Tech. in Information Technology from Pune University.",
  items: [
    {
      institution: "Online Course Youtube",
      degree: "SIGMA FULL-Stack Web-Dev by CodeWithHarry",
      duration: "2024",
    },
    {
      institution: "Unstop",
      degree: "MERN Stack Web Development",
      duration: "2024",
    },
    {
      institution: "Cybersecurity Essentials",
      degree: "Cisco Networking Academy",
      duration: "May 2024",
    },
    {
      institution: "Introduction to Networks, Switching, Routing",
      degree: "Cisco Networking Academy",
      duration: "June 2024",
    },
    {
      institution: "Vishwakrma Institute of Information Technology",
      degree: "B.Tech Inforamtion Technology",
      duration: "Running",
    },
    {
      institution: "Maharishi Junior College",
      degree: "HSC",
      duration: "2022",
    },
    {
      institution: "Maharishi Public School",
      degree: "SSC",
      duration: "2020",
    }

  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "I have experience working with the following technologies and tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <TbBrandCpp />,
      name: "Cpp",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <TbApi />,
      name: "REST API",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: < PiTreeStructure />,
      name: "DSA",
    },
    {
      icon: <FaDatabase />,
      name: "DBMS",
    },
    {
      icon: <FaNetworkWired />,
      name: "Networking",
    },
    {
      icon: <FaWindows />,
      name: "Operating System",
    },
    {
      icon: <SiDatabricks />,
      name: "Data Engineering",
    },
    {
      icon: <FaLock />,
      name: "Cybersecurity",
    },
    {
      icon: <FaVideo />,
      name: "Video Editing",
    },
    {
      icon: <FaPhotoVideo />,
      name: "Photo Editing",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { PiTreeStructure } from "react-icons/pi";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col items-center gap-2"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
