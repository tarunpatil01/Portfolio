import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: { 
    top: "0%",
   },
   animate: { 
    top: "100%",
   },
  exit: { 
    top: ["100%", "0%"],
   },
};

const reverseIndex = (index) =>  6 - index - 1;

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the staris.
    Each div will have the same animation defiinned by the stairAnimation object.
    The delay for each div is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for eaech subsquent step.
     */}
    
      
        {[...Array(6)].map((_, index) => {
          return (
          <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white relative "
              style={{ zIndex: 50 }} // Adjust z-index for debugging
            />
          );
        })}
      
    </>
  );
};

export default Stairs;
