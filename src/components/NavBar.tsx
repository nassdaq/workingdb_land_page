
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-db-darker/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-mono font-bold text-gradient">
            Working<span className="text-white">DB</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
              Demo
            </a>
            <a href="#footer" className="text-gray-300 hover:text-white transition-colors">
              Links
            </a>
            <a
              href="https://github.com/suleiman-nasdaq/workingdb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white bg-db-darker/80 border border-gray-800 px-4 py-1.5 rounded-md hover:border-db-primary transition-colors"
            >
              <Github size={18} />
              <span>Star</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-db-darker border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#footer" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Links
              </a>
              <a
                href="https://github.com/suleiman-nasdaq/workingdb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-white bg-gray-900 border border-gray-800 px-4 py-2 rounded-md hover:border-db-primary transition-colors w-full justify-center"
              >
                <Github size={18} />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
