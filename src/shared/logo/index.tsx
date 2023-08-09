'use client';
import React from 'react';
import { Figure, Image, FooterImage } from './logo';

export const ArchBlackLogo = () => {
  return (
    <Figure>
      <Image src="/images/arch_black_logo.svg" alt="black_logo" />
    </Figure>
  );
};

export const ArchWhiteLogo = () => {
  return (
    <Figure>
      <FooterImage src="/images/arch_white_logo.svg" alt="white-logo" />
    </Figure>
  );
};
