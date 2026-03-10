import React, { useRef } from 'react';
import Hero from '@/components/hero/Hero';
import Mission from '@/components/mission/Mission';
import AboutStory from '@/components/about/AboutStory';
import ImpactStats from '@/components/impact/ImpactStats';
import DonateSection from '@/components/donate/DonateSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const handleDonateClick = () => {
    const donateEl = document.getElementById('donate');
    if (donateEl) {
      donateEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onDonateClick={handleDonateClick} />
      <Mission />
      <AboutStory />
      <ImpactStats />
      <DonateSection />
      <Footer />
    </div>
  );
}