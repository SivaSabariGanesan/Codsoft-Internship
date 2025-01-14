import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import { useCarousel } from './useCarousel';
import { slideVariants } from './animations';

interface CarouselProps {
  projects: Project[];
}

const Carousel = ({ projects }: CarouselProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const {
    currentIndex,
    direction,
    handlePrevious,
    handleNext,
    handleDragStart,
    handleDragEnd
  } = useCarousel({ totalItems: projects.length });

  // Set up the 15s automation
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Automatically go to the next slide every 15 seconds
    }, 15000); // 15 seconds

    return () => {
      clearInterval(intervalId); // Clear interval on unmount to prevent memory leaks
    };
  }, [handleNext]);

  return (
    <div 
      ref={slideRef}
      className="relative h-[600px] mb-16 select-none"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <CarouselSlide
            project={projects[currentIndex]}
            isActive={true} // Keep active state handling as before
          />
        </motion.div>
      </AnimatePresence>

      <CarouselControls
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Carousel;
