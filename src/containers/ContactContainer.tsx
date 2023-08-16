'use client';
import React from 'react';
import { ContactHero, Location, Email } from '@/components';

function ContactContainer() {
  return (
    <main>
      <ContactHero />
      <Location />
      <Email />
    </main>
  );
}

export default ContactContainer;
