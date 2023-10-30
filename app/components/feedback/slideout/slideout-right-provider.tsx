'use client';

import dynamic from 'next/dynamic';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import type { SlideoutShowOptions } from '@/app/components/feedback/slideout';

const Slideout = dynamic(() => import('@/app/components/feedback/slideout'), {
  ssr: false,
});

export interface SlideoutContextProps {
  show: (
    modalShowInput: React.ReactNode,
    slideoutOptions?: SlideoutShowOptions
  ) => void;
  hide: () => void;
  showSlideout: boolean;
}

const SlideoutContext = createContext<SlideoutContextProps | undefined>(
  undefined
);

export function SlideoutProvider({ children }: { children: ReactNode }) {
  const [slideoutContent, setSlideoutContent] = useState<React.ReactNode>(null);
  const [slideoutOptions, setSlideoutOptions] =
    useState<SlideoutShowOptions>(null);
  const [showSlideout, setShowSlideout] = useState(false);

  const show = (slideoutContent: any, slideoutOptions: any) => {
    setSlideoutContent(slideoutContent);
    setSlideoutOptions(slideoutOptions);
    setShowSlideout(true);
  };

  const hide = () => {
    setShowSlideout(false);
    setTimeout(() => {
      setSlideoutContent(null);
    }, 300); // Adjust this timeout as per your transition duration
  };

  useEffect(() => {
    if (showSlideout) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [showSlideout]);

  return (
    <SlideoutContext.Provider value={{ hide, show, showSlideout }}>
      {children}

      {showSlideout && slideoutContent && (
        <Slideout setShowSlideout={setShowSlideout} options={slideoutOptions}>
          {slideoutContent}
        </Slideout>
      )}
    </SlideoutContext.Provider>
  );
}

export function useSlideout() {
  return useContext(SlideoutContext);
}
