import React from 'react';
import profilePic from '../images/profilepic.jpg';
// import BlurText from './blurText'; 
interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  return (
    <section
          id="about"
          className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
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
  );
};

export default AboutSection;