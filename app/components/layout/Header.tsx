import { Suspense } from 'react';

import { Logo } from '@/app/components/common/Logo';

import { HeaderMenu } from '@/app/components/layout/HeaderMenu';

import { MainSlideoutButton } from '@/app/components/navigation/MainSlideoutButton';

import MyAvatar from '@/app/components/user/MyAvatar';

export const Header = () => {
  return (
    <header
      data-test="main-header"
      className="sticky top-1 z-40 mx-auto mt-7 h-14 w-11/12 rounded-full bg-surface/80 shadow-xl backdrop-blur sm:max-w-lg"
    >
      <div className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_3fr_1fr] items-center justify-between px-4 sm:px-3">
        <div className="pl-2">
          <Logo />
        </div>

        <div className="flex justify-center gap-4">
          <HeaderMenu />
        </div>

        <div className="flex justify-end">
          <Suspense fallback={<div>...</div>}>
            <MainSlideoutButton
              triggerClx="rounded-full"
              triggerComponent={
                <div className="transition-all hover:rotate-2 hover:scale-105">
                  <MyAvatar />
                </div>
              }
            />
          </Suspense>
        </div>
      </div>
    </header>
  );
};
