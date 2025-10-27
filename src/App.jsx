import React from 'react';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import ClinicFinder from './components/ClinicFinder';
import Engagement from './components/Engagement';

function App() {
  return (
    <div className="min-h-screen font-inter bg-white text-[#0A1B3D]">
      <Hero />
      <ServicesOverview />
      <ClinicFinder />
      <Engagement />
      <footer className="border-t border-[#E3EBFF]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-[#183157]/70">
          © {new Date().getFullYear()} FPOP — Member Association of IPPF. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
