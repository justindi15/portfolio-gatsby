import React from 'react';
import { PageProps } from 'gatsby';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Work from '@/sections/Work';
import Experience from '@/sections/Experience';

const Home: React.FC<PageProps> = () => (
  <main>
    <Nav />
    <Hero />
    <About />
    <Experience />
    <Work />
    <Contact />
    <Footer />
  </main>
);

export default Home;
