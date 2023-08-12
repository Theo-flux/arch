'use client';
import React from 'react';
import { Figure, Image, FooterImage } from './logo';
import Link from 'next/link';

export const ArchBlackLogo = () => {
  return (
    <Link href={'/'}>
      <Figure>
        <Image src="/images/arch_black_logo.svg" alt="black_logo" />
      </Figure>
    </Link>
  );
};

export const ArchWhiteLogo = () => {
  return (
    <Link href={'/'}>
      <Figure>
        <FooterImage src="/images/arch_white_logo.svg" alt="white-logo" />
      </Figure>
    </Link>
  );
};
