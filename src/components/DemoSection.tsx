
import { useState, useEffect } from 'react';

type Command = {
  input: string;
  output: string[];
  protocol: 'telnet' | 'redis';
};

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<'telnet' | 'redis'>('telnet');
  const [visibleLines, setVisibleLines] = useState<number>(0);
  
  const telnetCommands: Command[] = [
    { 
      protocol: 'telnet',
      input: "telnet 127.0.0.1 6380",
      output: ["Connected to 127.0.0.1."]
    },
    {
      protocol: 'telnet',
      input: "set animal 0 60 3",
      output: ["dog", "STORED"]
    },
    {
      protocol: 'telnet',
      input: "get animal",
      output: ["VALUE animal 0 3", "dog", "END"]
    }
  ];
  
  const redisCommands: Command[] = [
    {
      protocol: 'redis',
      input: "redis-cli -p 6380 set planet Mars",
      output: ["OK"]
    },
    {
      protocol: 'redis',
      input: "redis-cli -p 6380 get planet",
      output: ["\"Mars\""]
    }
  ];
  
  const commands = activeDemo === 'telnet' ? telnetCommands : redisCommands;
  const totalLines = commands.reduce((acc, cmd) => acc + 1 + cmd.output.length, 0);

  useEffect(() => {
    setVisibleLines(0);
    
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < totalLines) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 300);
    
    return () => clearInterval(timer);
  }, [activeDemo, totalLines]);

  return (
    <section id="demo" className="py-20 bg-db-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-mono text-3xl font-bold mb-4">
            <span className="text-gradient">See It In Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            WorkingDB supports both Memcached and Redis protocols.
            Connect with your favorite client or directly via telnet.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6 space-x-4">
            <button
              className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
                activeDemo === 'telnet' 
                  ? 'bg-db-primary text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveDemo('telnet')}
            >
              Memcached (Telnet)
            </button>
            <button
              className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
                activeDemo === 'redis' 
                  ? 'bg-db-primary text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveDemo('redis')}
            >
              Redis Protocol
            </button>
          </div>

          <div className="terminal animate-fade-in shadow-[0_0_15px_rgba(65,71,113,0.15)]">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-gray-400 text-xs">
                {activeDemo === 'telnet' ? 'terminal - memcached protocol' : 'terminal - redis protocol'}
              </span>
            </div>
            
            <div className="font-mono text-sm text-white">
              {commands.map((command, cmdIndex) => {
                // Calculate the line number for this command
                const previousCommandsLines = commands
                  .slice(0, cmdIndex)
                  .reduce((acc, cmd) => acc + 1 + cmd.output.length, 0);
                
                const commandLineNum = previousCommandsLines;
                const showCommand = visibleLines > commandLineNum;
                
                return (
                  <div key={`cmd-${cmdIndex}`}>
                    {showCommand && (
                      <div className="terminal-line mb-1">
                        <span className="terminal-prompt">$</span>
                        <span className="terminal-output">{command.input}</span>
                      </div>
                    )}
                    
                    {command.output.map((line, lineIndex) => {
                      const outputLineNum = commandLineNum + 1 + lineIndex;
                      const showOutput = visibleLines > outputLineNum;
                      
                      return (
                        <div 
                          key={`out-${cmdIndex}-${lineIndex}`} 
                          className={`text-gray-300 ml-4 mb-1 ${showOutput ? 'block' : 'hidden'}`}
                        >
                          {line}
                        </div>
                      );
                    })}
                    
                    {showCommand && <div className="mb-3"></div>}
                  </div>
                );
              })}
              {visibleLines >= totalLines && (
                <div className="border-l-2 border-db-primary/50 h-4 ml-2 animate-pulse"></div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/suleiman-nasdaq/workingdb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-db-primary hover:text-db-light transition-colors font-mono text-sm"
            >
              <code className="mr-1">git clone</code> 
              https://github.com/suleiman-nasdaq/workingdb.git
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
