import React from "react";
import { FileText } from "lucide-react";

import resume from "../Yash_Resume.pdf";
import SpotlightCard from "./SpotlightCard";

interface ResumeSectionProps {
  isVisible: boolean;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ isVisible }) => {
  return (
    <section
      id="resume"
      className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-rotation">
          Resume
        </h2>
        <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-12">
          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
              Experience
            </h3>
            <div className="space-y-6">
              <div className="experience-item">
                <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">
                  Software Engineering Intern - Parkquility
                </h4>
                <p className="text-gray-400">
                  Aug. 2023 – Sep. 2023 | Bangalore, IN
                </p>
                <div className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Developed dynamic and responsive web applications using
                      React, HTML/CSS, JavaScript, and Node.js, improving user
                      engagement by 18%
                    </li>
                    <li>
                      Integrated RESTful APIs and optimized data pipelines with
                      Express.js, reducing response times by 25%
                    </li>
                    <li>
                      Designed a real-time monitoring dashboard with MongoDB
                      (Mongoose) and Flask, streamlining internal communication
                      and improving collaboration efficiency
                    </li>
                    <li>
                      Refactored legacy codebases to adopt TypeScript, and
                      containerized applications with Docker while automating
                      deployment pipelines using Git, enhancing scalability
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-rotation border-none rounded-full"></hr>

              <div className="experience-item">
                <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">
                  Head of Technology - National Public School RNR
                </h4>
                <p className="text-gray-400">
                  Jul. 2022 - Aug. 2023 | Bangalore, IN
                </p>
                <div className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Guided the design, development, and deployment of the
                      Model United Nations (MUN) website using React, Tailwind,
                      and Node.js, serving 500+ participants
                    </li>
                    <li>
                      Integrated MySQL for efficient event updates and account
                      management systems, ensuring real-time data
                      synchronization
                    </li>
                    <li>
                      Utilized Tailwind CSS for UI design and Node.js for
                      backend functionality and user management
                    </li>
                    <li>
                      Developed an isolated dashboard using React, Tailwind CSS,
                      and Node.js with MySQL for managing registrations,
                      schedules, and real-time notifications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
              Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpotlightCard
                className="custom-spotlight-card bg-opacity-0 skill-item bg-gradient-to-r from-purple-700 to-blue-700  backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Languages
                </p>
                <p className="text-gray-300">
                  {" "}
                  C/C++, Java, JavaScript, Python, MongoDB (Mongoose), HTML/CSS,
                  TypeScript, Bash, SQL
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card skill-item bg-gradient-to-r from-purple-700 to-blue-700  backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Frameworks
                </p>
                <p className="text-gray-300">
                  React, Node.js, Express.js, Next.js, Flask, Tailwind, FastAPI
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card skill-item bg-gradient-to-r from-purple-700 to-blue-700  backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Tools
                </p>
                <p className="text-gray-300">
                  Git, Docker, Google Cloud Platform, VS Code, Visual Studio,
                  PyCharm, IntelliJ, AWS
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8 text-center flex-wrap flex justify-center gap-4">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <FileText size={20} />
              View Full Resume
            </a>
            <a
              href={resume}
              download="Yash_Resume.pdf" // Add the download attribute
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <FileText size={20} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
