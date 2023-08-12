'use client';
import React from 'react';
import { Hero, About, Featured, Welcome } from '@/components';

function HomeContainer() {
  return (
    <main>
      <Hero />
      <Welcome />
      <About />
      <Featured />
    </main>
  );
}

export default HomeContainer;
