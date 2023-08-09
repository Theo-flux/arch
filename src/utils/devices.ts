'use client';
export const size = {
  xs: '320px',
  sm: '375px',
  base: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '2560px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  base: `(min-width: ${size.base})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};

export const radius = {
  sm: `0.1875rem`,
  md: `0.375rem`,
};

export const transition = `transition-property: all;
      transition-duration: 300ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`;

export const shadow = ` box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);`;
