import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
        <title>Tarun-Patil-Portfolio</title>
        <meta name="description" content="Tarun Patil's portfolio. Full-stack web developer and coder based in Pune, India. Specializing in creating fast, accessible, and inclusive websites and web applications." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-20">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>Software Developer</span>
              <h1 className="h1 mb-6">
                Hi,I'm <br />
                <span className="text-accent">Tarun Patil</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I'm a full-stack web developer and coder based in Pune, India. I
                specialize in creating fast, accessible, and inclusive websites
                and web applications.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <img
                  className="h-10 w-10 p-0 m-0 "
                  src="/assets/resume/badge.svg"
                  alt="Badge"
                />
                <img
                  className="h-8 w-8 p-0 m-0 "
                  src="/assets/resume/cap.svg"
                  alt="Cap"
                />
                <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                as="a"
                href="/assets/resume/Tarun-Patil-Resume-New.pdf"
              >
                <a href="/assets/resume/Tarun-Patil-Resume-New.pdf">Download my resume</a>
                <FiDownload className="text-xl" />
              </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Home;
