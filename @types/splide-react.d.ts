// types/splide-react.d.ts
declare module '@splidejs/react-splide' {
  import * as React from 'react';
  import { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    children?: React.ReactNode;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
  }

  export const Splide: React.FC<SplideProps>;

  export interface SplideSlideProps {
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
  }

  export const SplideSlide: React.FC<SplideSlideProps>;
}
