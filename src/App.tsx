import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import hashchainpic from "./images/hashchain.png";
import clusterHexpic from "./images/clusterHex.png";
import mainbg from "./images/mainbg.png";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
// import ProjectsSection from './components/ProjectsSection';
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";
// import { projects } from './data/projects'; // Move projects data to a separate file

const projects = [
  {
    id: 1,
    title: "ClusterHex",
    description:
      "A full-stack location review app with secure authentication, session management, and real-time map functionality.",
    image: clusterHexpic,
    tags: ["JavaScript", "jQuery", "MongoDB", "Node.js", "AWS"],
    link: "https://github.com/Yash-Aanand",
  },
  {
    id: 2,
    title: "HashChain",
    description:
      "A blockchain-based supply chain system ensuring transparency, traceability, and security using custom blockchain and SHA256 encryption.",
    image: hashchainpic,
    tags: ["React", "Node.js", "MySQL", "Blockchain"],
    link: "https://github.com/Yash-Aanand/HashChain",
  },
];

function App() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    resume: false,
    projects: false,
  });
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 

  // Handle scroll button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300); // Show the button when scrolled more than 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Animated Background */}
      <div className="background-wrapper overflow-hidden">
        <div className="">
          <img
            src={mainbg}
            alt="Space background"
            className="w-full h-screen object-cover opacity-20"
          />

          {/* <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Space background"
            className="w-full h-screen object-cover opacity-20"
          />  */}
        </div>
      </div>

      <div className="content-wrapper">
        {/* Navigation Bar */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* About Section */}
        <AboutSection isVisible={isVisible.about} />

        {/* Projects Section */}
        <section
          id="projects"
          className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
            isVisible.projects ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold pb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-rotation ">
              Projects
            </h2>
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-12">
              <div className="grid md:grid-cols-2 gap-6  ">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 relative z-20 -mt-12">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <ResumeSection isVisible={isVisible.resume} />

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and scaled down
            animate={{
              opacity: showScrollButton ? 1 : 0, // Animate opacity based on scroll position
              scale: showScrollButton ? 1 : 0.8, // Smooth scale change when button appears
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }, // Adjust duration for smoothness
            }}
          >
            <a
              href="#top"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:scale-110 transition-transform duration-300 animate-gradient-rotation shadow-lg text-white inline-flex items-center justify-center"
            >
              <svg
                enable-background="new 0 0 32 32"
                height="24px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                  fill="#515151"
                />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
