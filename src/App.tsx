/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import FeaturedListings from './components/FeaturedListings';
import AccommodationSection from './components/AccommodationSection';
import AboutSection from './components/AboutSection';
import CommissionSection from './components/CommissionSection';
import Testimonials from './components/Testimonials';
import MembershipSection from './components/MembershipSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AIChatbot from './components/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FeaturedListings />
        <AccommodationSection />
        <AboutSection />
        <CommissionSection />
        <Testimonials />
        <MembershipSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <AIChatbot />
    </div>
  );
}
