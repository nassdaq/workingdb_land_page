
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center items-center px-4 pt-20">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gradient">Working</span>DB
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-200">
          One Engine. Two Protocols.{" "}
          <span className="text-white font-semibold">Zero Nonsense.</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          A blazing-fast, Rust-powered key-value store that speaks both Redis and 
          Memcached protocols — with full persistence between restarts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#demo" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
            <Terminal size={16} />
            Try It Locally
            <ArrowRight size={16} />
          </a>
          
          <a 
            href="https://github.com/suleiman-nasdaq/workingdb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-mono text-gray-400">
          <div className="flex items-center gap-2 bg-db-darker/80 px-3 py-1 rounded-full border border-gray-800">
            <div className="w-2 h-2 bg-db-primary rounded-full animate-pulse"></div>
            Rust-based
          </div>
          <div className="flex items-center gap-2 bg-db-darker/80 px-3 py-1 rounded-full border border-gray-800">
            <div className="w-2 h-2 bg-db-primary rounded-full animate-pulse"></div>
            Protocol-flexible
          </div>
          <div className="flex items-center gap-2 bg-db-darker/80 px-3 py-1 rounded-full border border-gray-800">
            <div className="w-2 h-2 bg-db-primary rounded-full animate-pulse"></div>
            Dev-loved
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-60">
          <a href="#features" className="text-gray-400 hover:text-white">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
