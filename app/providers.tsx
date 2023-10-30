'use client';

import { Toaster } from 'sonner';

import { ModalProvider } from '@/app/components/feedback/modal-or-leaflet/provider';
import { SlideoutProvider } from '@/app/components/feedback/slideout/slideout-right-provider';

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <>
      <Toaster className="dark:hidden" />
      <Toaster theme="dark" className="hidden dark:block" />

      <ModalProvider>
        <SlideoutProvider>{children}</SlideoutProvider>
      </ModalProvider>
    </>
  );
}
