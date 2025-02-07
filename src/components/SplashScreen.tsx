import { Rocket } from "lucide-react";
// import BlurText from './blurText';  // TBD

function SplashScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Multiple animated gradient layers for more depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 animate-gradient-slow opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-violet-500 to-fuchsia-500 animate-gradient-medium opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 via-indigo-500 to-purple-500 animate-gradient-fast opacity-30" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>

      {/* Content overlay */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-3xl mx-auto">
          {/* Animated icon */}
          <div className="animate-float mb-8 opacity-0 animate-fade-in">
            <Rocket className="w-20 h-20 text-white mx-auto animate-glow" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight opacity-0 animate-fade-in-delayed-1">
            Yash
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 animate-gradient-text">
              {" "}
              Aanand
            </span>
          </h1>

          <p className=" font-semibold text-xl md:text-2xl text-white/90 opacity-0 animate-fade-in-delayed-2">
            Welcome to the next dimension!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
