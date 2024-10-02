"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "@/components/Stairs";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-white top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 1 }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
