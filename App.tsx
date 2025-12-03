import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Metrics from './components/Metrics';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Investor from './components/Investor';
import Funding from './components/Funding';
import Sector from './components/sector';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Glossary from './components/Glossary';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <Metrics />
        <TechStack />
        <Sector />
        <Investor />
        <Funding />
        <HowItWorks />
        <FAQ />
        <Glossary />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
