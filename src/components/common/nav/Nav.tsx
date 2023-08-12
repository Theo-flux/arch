'use client';
import React, { useLayoutEffect, useState, useRef } from 'react';
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

function Nav() {
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
        <CurrentPage>HOME</CurrentPage>
      </Hanger>
      <NavTag>
        <NavWrapper>
          <ArchBlackLogo />

          <DesktopNavItems>
            <StyledLink href={'/'}>
              <StyledLinkText>Portfolio</StyledLinkText>
            </StyledLink>
            <StyledLink href={'/'}>
              <StyledLinkText>About us</StyledLinkText>
            </StyledLink>
            <StyledLink href={'/'}>
              <StyledLinkText>Contact</StyledLinkText>
            </StyledLink>
          </DesktopNavItems>

          <StyledMenu onClick={handleOpenNav} />
        </NavWrapper>
      </NavTag>
      <MobileNavItems ref={navItemsRef}>
        <StyledLink
          href={'/'}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>Portfolio</StyledLinkText>
        </StyledLink>
        <StyledLink
          href={'/'}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>About us</StyledLinkText>
        </StyledLink>
        <StyledLink
          href={'/'}
          ref={(el: HTMLAnchorElement) => navItems.current.push(el)}
        >
          <StyledLinkText>Contact</StyledLinkText>
        </StyledLink>
      </MobileNavItems>
      <Backdrop ref={backdropRef}></Backdrop>
    </NavSection>
  );
}

export default Nav;
