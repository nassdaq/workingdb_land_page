
import { Database, Zap, Code, Terminal, Rocket, Star } from "lucide-react";

const features = [
  {
    title: "Dual Protocol Support",
    description: "Speak Redis & Memcached protocols with a single engine. No need to choose or migrate.",
    icon: <Database className="text-db-primary" size={24} />,
  },
  {
    title: "Persistence Engine",
    description: "Built-in persistence ensures your data survives restarts. No more data loss on power failures.",
    icon: <Zap className="text-db-primary" size={24} />,
  },
  {
    title: "Blazing-Fast",
    description: "Written in safe and efficient Rust for maximum performance with minimal resource usage.",
    icon: <Rocket className="text-db-primary" size={24} />,
  },
  {
    title: "String-based Key-Value Storage",
    description: "Simple but powerful key-value storage with Time To Live (TTL) support built-in.",
    icon: <Code className="text-db-primary" size={24} />,
  },
  {
    title: "Partitioned In-Memory Tables",
    description: "Intelligently partitioned tables for scalable, high-performance data access patterns.",
    icon: <Database className="text-db-primary" size={24} />,
  },
  {
    title: "Telnet-Compatible",
    description: "Connect and test instantly using telnet from your terminal. Zero dependencies required.",
    icon: <Terminal className="text-db-primary" size={24} />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-db-dark to-db-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-mono text-3xl font-bold mb-4">
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need in a modern key-value database, 
            without the complexity that slows you down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="font-mono font-bold ml-2">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
