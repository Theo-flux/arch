'use client';
import React, { useLayoutEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NavSection, NavTag, ArchBlackLogo } from '@/shared';
import {
  NavWrapper,
  DesktopNavItems,
  MobileNavItems,
  Hanger,
  Line,
  CurrentPage,
  StyledLink,
  StyledLinkText,
  StyledMenu,
  Backdrop,
} from './nav.css';
import { gsap, Power4 } from 'gsap';

import './styles.css';

function Nav() {
  const path = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const backdropRef = useRef(null);
  const navItemsRef = useRef(null);
  const navItems = useRef<Array<HTMLAnchorElement>>([]);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  const openAnimation = () => {
    const openTl = gsap.timeline();

    openTl
      .to(backdropRef.current, {
        opacity: 0.5,
        x: 800,
        duration: 0.5,
        ease: Power4.easeInOut,
      })
      .to(navItemsRef.current, {
        opacity: 1,
        x: -800,
        duration: 0.8,
        ease: Power4.easeInOut,
      })
      .to(navItems.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: Power4.easeInOut,
        stagger: 0.1,
      });
  };

  const closeAnimation = () => {
    const closeTl = gsap.timeline();

    closeTl
      .to(navItems.current, {
        opacity: 0,
        x: -8,
        duration: 0.3,
        ease: Power4.easeInOut,
        stagger: 0.1,
      })
      .to(navItemsRef.current, {
        opacity: 0,
        x: 800,
        duration: 0.3,
        ease: Power4.easeInOut,
      })
      .to(backdropRef.current, {
        opacity: 0,
        x: -800,
        duration: 0.5,
        ease: Power4.easeInOut,
      });
  };

  useLayoutEffect(() => {
    openNav ? openAnimation() : closeAnimation();
  });

  return (
    <NavSection>
      <Hanger>
        <Line></Line>
        {path === '/' && <CurrentPage>HOME</CurrentPage>}
        {path === '/portfolio' && <CurrentPage>PORTFOLIO</CurrentPage>}
        {path === '/about' && <CurrentPage>ABOUT US</CurrentPage>}
        {path === '/contact' && <CurrentPage>CONTACT</CurrentPage>}
      </Hanger>
      <NavTag>
        <NavWrapper>
          <ArchBlackLogo />

          <DesktopNavItems>
            <StyledLink href={'/portfolio'}>
              <StyledLinkText className={path === '/portfolio' ? 'active' : ''}>
                Portfolio
              </StyledLinkText>
            </StyledLink>
            <StyledLink href={'/about'}>
              <StyledLinkText className={path === '/about' ? 'active' : ''}>
                About us
              </StyledLinkText>
            </StyledLink>
            <StyledLink href={'/contact'}>
              <StyledLinkText className={path === '/contact' ? 'active' : ''}>
                Contact
              </StyledLinkText>
            </StyledLink>
          </DesktopNavItems>

          <StyledMenu onClick={handleOpenNav} />
        </NavWrapper>
      </NavTag>
      <MobileNavItems ref={navItemsRef}>
        <StyledLink
          href={'/portfolio'}
          onClick={handleOpenNav}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>Portfolio</StyledLinkText>
        </StyledLink>
        <StyledLink
          href={'/about'}
          onClick={handleOpenNav}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>About us</StyledLinkText>
        </StyledLink>
        <StyledLink
          href={'/contact'}
          onClick={handleOpenNav}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>Contact</StyledLinkText>
        </StyledLink>
      </MobileNavItems>
      <Backdrop ref={backdropRef} onClick={handleOpenNav}></Backdrop>
    </NavSection>
  );
}

export default Nav;
