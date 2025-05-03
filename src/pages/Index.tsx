
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-db-dark text-white">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
