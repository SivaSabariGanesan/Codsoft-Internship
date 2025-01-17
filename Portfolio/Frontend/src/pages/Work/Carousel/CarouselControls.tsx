import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls = ({ onPrevious, onNext }: CarouselControlsProps) => {
  useEffect(() => {
    // Set the interval for the automatic slide change (every 15 seconds)
    const interval = setInterval(() => {
      onNext(); // Move to the next slide automatically
    }, 15000); // 15 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [onNext]); // Run the effect when onNext changes

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrevious}
        className="p-3 rounded-full bg-black/50 border border-primary/50 text-primary hover:bg-primary/20 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="p-3 rounded-full bg-black/50 border border-primary/50 text-primary hover:bg-primary/20 transition-colors"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  );
};

export default CarouselControls;
