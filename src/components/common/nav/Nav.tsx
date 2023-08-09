'use client';
import React from 'react';
import { Section, NavTag, ArchBlackLogo } from '@/shared';
import { NavWrapper, Hanger, Line, CurrentPage } from './nav.css';

function Nav() {
  return (
    <Section>
      <Hanger>
        <Line></Line>
        <CurrentPage>HOME</CurrentPage>
      </Hanger>
      <NavTag>
        <NavWrapper>
          <ArchBlackLogo />
        </NavWrapper>
      </NavTag>
    </Section>
  );
}

export default Nav;
