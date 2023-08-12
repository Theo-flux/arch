'use client';
import React from 'react';
import { About, Featured, Welcome } from '@/components';

function HomeContainer() {
  return (
    <main>
      <Welcome />
      <About />
      <Featured />
    </main>
  );
}

export default HomeContainer;
