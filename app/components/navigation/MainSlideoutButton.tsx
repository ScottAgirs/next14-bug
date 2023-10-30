'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { SlideoutShowOptions } from '@/app/components/feedback/slideout';
import { useSlideout } from '@/app/components/feedback/slideout/slideout-right-provider';

const MainSlideoutBody = dynamic(
  () => import('@/app/components/layout/MainSlideoutBody'),
  {
    ssr: false,
  }
);

export function MainSlideoutButton({
  options,
  triggerComponent,
  triggerClx,
}: {
  options?: SlideoutShowOptions;
  triggerClx?: string;
  triggerComponent?: ReactNode;
}) {
  const slideout = useSlideout();

  return (
    <button
      className={triggerClx}
      onClick={() =>
        slideout?.show(<MainSlideoutBody />, {
          size: 'sm',
          ...options,
        })
      }
    >
      {triggerComponent}
    </button>
  );
}
