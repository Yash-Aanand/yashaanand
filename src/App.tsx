import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import profilePic from './images/profilepic.jpg';
import hashchainpic from './images/hashchain.png';
import clusterHexpic from './images/clusterHex.png';

// Fixed projects data
const projects = [
  {
    id: 1,
    title: "ClusterHex",
    description: "A full-stack location review app with secure authentication, session management, and real-time map functionality.",
    image: clusterHexpic,
    tags: ['JavaScript', 'jQuery', 'MongoDB', 'Node.js', 'AWS'],
    link: 'https://github.com/Yash-Aanand'
  },
  {
    id: 2,
    title: "HashChain",
    description: "A blockchain-based supply chain system ensuring transparency, traceability, and security using custom blockchain and SHA256 encryption.",
    image: hashchainpic,
    tags: ['React', 'Node.js', 'MySQL', 'Blockchain'],
    link: 'https://github.com/Yash-Aanand/HashChain'
  }
];

function App() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    resume: false,
    projects: false
  });
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle scroll button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300); // Show the button when scrolled more than 300px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Animated Background */}
      <div className="background-wrapper overflow-hidden">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
          <div className="w-full ">
            <div className="flex justify-between items-left">
              <button
                onClick={() => scrollToSection('topsec')}
                className="px-8 py-4 text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-105 transition-transform duration-300"
              >
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Y
                </h1>
              </button>

              {/* Mobile menu button */}
              <div className="sm:hidden px-4 py-4">
                <button
                  type="button"
                  onClick={() => setShowMenu(!showMenu)}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={showMenu}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  <svg
                    className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/* Icon when menu is open */}
                  <svg
                    className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex gap-2 px-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className=" rounded-lg text-gray-300 hover:text-blue-400 transition-colors my-2 px-3  hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className=" rounded-lg text-gray-300 hover:text-blue-400 transition-colors  my-2 px-3  hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('resume')}
                  className=" rounded-lg text-gray-300 hover:text-blue-400 transition-colors my-2 px-3  hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>

  {/* Mobile menu */}
  <AnimatePresence>
    {showMenu && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="sm:hidden origin-top bg-gray-900/70 backdrop-blur-md shadow-xl rounded-lg"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
          className="space-y-2 px-4 py-3"
        >
          {['About', 'Projects', 'Resume'].map((item, index) => (
            <motion.button
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-300 hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>



        {/* Hero Section */}
        <section id="topsec" className="min-h-screen relative flex items-center justify-center">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Yash Aanand
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Software Developer</p>
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/Yash-Aanand" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yash-aanand-35192b273/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yash.aanand06@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
            isVisible.about ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-rotation">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-12">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75"></div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="relative rounded-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  I grew up in Bangalore, India, and I'm currently pursuing a Bachelor's in Computer Science with Honours, at the University of Waterloo.
                </p>
                <p className="text-gray-300">
                  I have been coding from the age of 14, begining my journey to becoming a developer with simple python games. Now, I'm a passionate software developer with experience building
                  modern web applications as well as robust backend applications.
                </p>
                <p className="text-gray-300">
                  I love Drumming, and am part of a Band in my university! I have certifcations in drumming with Trinity College London. I also enjoy reading all kinds of genres, and also love to play basketball and go hiking/running.
                </p>
                <p className="text-gray-300">
                   In 2019, I was part of the winning team representing India in the International Eastercup, Berlin-Moabit. (Basketball)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
            isVisible.projects ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-rotation">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 ">
              {projects.map(project => (
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
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
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
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${isVisible.resume ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-rotation">Resume</h2>
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-12">
              {/* Experience Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">Experience</h3>
                <div className="space-y-6">
                  <div className="experience-item">
                    <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">Software Engineering Intern - Parkquility</h4>
                    <p className="text-gray-400">Aug. 2023 – Sep. 2023 | Bangalore, IN</p>
                    <div className="text-gray-300 mt-2">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed dynamic and responsive web applications using React, HTML/CSS, JavaScript, and Node.js, improving user engagement by 18%</li>
                        <li>Integrated RESTful APIs and optimized data pipelines with Express.js, reducing response times by 25%</li>
                        <li>Designed a real-time monitoring dashboard with MongoDB (Mongoose) and Flask, streamlining internal communication and improving collaboration efficiency</li>
                        <li>Refactored legacy codebases to adopt TypeScript, and containerized applications with Docker while automating deployment pipelines using Git, enhancing scalability</li>
                      </ul>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="experience-item">
                    <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">Head of Technology - National Public School RNR</h4>
                    <p className="text-gray-400">Jul. 2022 - Aug. 2023 | Bangalore, IN</p>
                    <div className="text-gray-300 mt-2">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Guided the design, development, and deployment of the Model United Nations (MUN) website using React, Tailwind, and Node.js, serving 500+ participants</li>
                        <li>Integrated MySQL for efficient event updates and account management systems, ensuring real-time data synchronization</li>
                        <li>Utilized Tailwind CSS for UI design and Node.js for backend functionality and user management</li>
                        <li>Developed an isolated dashboard using React, Tailwind CSS, and Node.js with MySQL for managing registrations, schedules, and real-time notifications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="skill-item bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">Languages</p>
                    <p className="text-gray-300"> C/C++, Java, JavaScript, Python, MongoDB (Mongoose), HTML/CSS, TypeScript, Bash, SQL</p>
                  </div>
                  <div className="skill-item bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">Frameworks</p>
                    <p className="text-gray-300">React, Node.js, Express.js, Next.js, Flask, Tailwind, FastAPI</p>
                  </div>
                  <div className="skill-item bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">Tools</p>
                    <p className="text-gray-300">Git, Docker, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, AWS</p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8 text-center">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <FileText size={20} />
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="section-overlay bg-gray-900/90 backdrop-blur-sm py-8 px-4 text-center">
          <p className="text-gray-400">© 2024 Yash Aanand. All rights reserved.</p>
        </footer>

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
       </motion.div>)}



      </div>
    </div>
  );
}

export default App;
