
import { Github } from "lucide-react";
import { wdb } from '@/components/images/index';


const FooterSection = () => {
  return (
    <footer id="footer" className="bg-db-darker border-t border-gray-800 py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-mono font-bold text-gradient">
              <img src={wdb} alt="Logo" className="h-16 w-16 inline-block mr-2" />
              Working<span className="text-white">DB</span>
            </a>
            <p className="text-gray-400 mt-1 text-sm">
              One Engine. Two Protocols. Zero Nonsense.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://github.com/nassdaq/workingdb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </a>
            <a 
              href="https://github.com/nassdaq/workingdb/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a 
              href="https://github.com/nassdaq/workingdb/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              MIT License
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} WorkingDB. All rights reserved.</p>
          <p className="text-gray-400 mb-2">
            Source code not publicly available, but will be soon and will be found on{" "}
            <a 
              href="https://github.com/nassdaq/workingdb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-db-primary hover:underline"
            >
              https://github.com/nassdaq/workingdb
            </a>
          </p>
          <p className="text-gray-400">
            Frontend created with{" "}
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-db-primary hover:underline"
            >
              Lovable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
