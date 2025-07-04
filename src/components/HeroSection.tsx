import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import SplitText from "./SplitText";
import RotatingText from './RotatingText'

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="topsec"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="relative z-10 text-center px-4">
        <SplitText
          text="Yash Aanand"
          className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          // easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
          background="linear-gradient(to right, #3b82f6, #8b5cf6)" // Gradient background
        />

        <RotatingText
          texts={['Software Engineer', 'Drummer', 'Trekker']}
          mainClassName="font-semibold text-3xl text-gray-300 mb-6 mt-5 justify-center overflow-hidden"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.020}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
         
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/Yash-Aanand"
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/Yash-Aanand/"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:yash.aanand06@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
