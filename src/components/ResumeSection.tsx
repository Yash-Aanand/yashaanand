import React from "react";
import { FileText } from "lucide-react";

import resume from "../Yash_Aanand_Resume.pdf";
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
                  Software Developer Intern - Micromatic Grinding Technologies
                </h4>
                <p className="text-gray-400">
                  May 2025 – Aug. 2025 | Bangalore, IN
                </p>
                <div className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Reduced licensing costs by 85% by replacing legacy CNC
                      interface with a custom Windows-based HMI
                    </li>
                    <li>
                      Achieved &lt;10ms latency via real-time CNC machine
                      communication using Python and C++
                    </li>
                    <li>
                      Scaled UI to 40+ production screens simulating end-to-end
                      grinding workflows across machine types
                    </li>
                    <li>
                      Delivered a robust full-stack system with CI/CD pipelines,
                      removing dependency on legacy controllers
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-rotation border-none rounded-full" />

              <div className="experience-item">
                <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">
                  Software Engineer Intern - Parkquility
                </h4>
                <p className="text-gray-400">
                  Aug. 2023 – Sep. 2023 | Bangalore, IN
                </p>
                <div className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Shipped full-stack features with React, Java, Flask, and
                      MongoDB to accelerate client deliverables
                    </li>
                    <li>
                      Optimized Express.js and Java APIs, reducing production
                      response latency by 25%
                    </li>
                    <li>
                      Containerized services with Docker, migrated legacy JS to
                      TypeScript, and deployed via GitHub Actions
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-rotation border-none rounded-full" />

              <div className="experience-item">
                <h4 className="text-xl font-semibold text-white hover:text-blue-500 transition-colors cursor-pointer">
                  Head of Technology - National Public School RNR
                </h4>
                <p className="text-gray-400">
                  Jul. 2022 – Aug. 2023 | Bangalore, IN
                </p>
                <div className="text-gray-300 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Designed and launched a full-stack MUN platform for 500+
                      users with real-time scheduling and updates
                    </li>
                    <li>
                      Built a registration dashboard used across 5 departments
                      to track 1,000+ entries and manage event logistics
                    </li>
                    <li>
                      Automated data flow between registrants, organizers, and
                      dashboard using MySQL and backend scripts
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpotlightCard
                className="custom-spotlight-card bg-opacity-0 skill-item bg-gradient-to-r from-purple-700 to-blue-700 backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Languages
                </p>
                <p className="text-gray-300">
                  Python, TypeScript, JavaScript, SQL, C, C++, Java, Go, HTML,
                  CSS
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card skill-item bg-gradient-to-r from-purple-700 to-blue-700 backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Frameworks
                </p>
                <p className="text-gray-300">
                  React, Node.js, Next.js, Express.js, FastAPI, Flask, .NET,
                  Tailwind
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card skill-item bg-gradient-to-r from-purple-700 to-blue-700 backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Tools & Platforms
                </p>
                <p className="text-gray-300">
                  Git, Docker, GitHub Actions, AWS EC2, GCP, Vercel, Heroku, VS
                  Code
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card skill-item bg-gradient-to-r from-purple-700 to-blue-700 backdrop-blur-sm p-6 rounded-lg hover:shadow-x2 transition-all duration-300 hover:-translate-y-2"
                spotlightColor="rgba(214, 237, 240, 0.2)"
              >
                <p className="text-xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                  Libraries
                </p>
                <p className="text-gray-300">
                  OpenCV, Mediapipe, TensorFlow, pandas, scikit-learn, Vercel AI
                  SDK, Mongoose, SHA256
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
