'use client';

import { useSession } from 'next-auth/react';

import { useSlideout } from '@/app/components/feedback/slideout/slideout-right-provider';

import { MainSlideoutMenu } from './MainSlideoutMenu';

export function MainSlideoutBody() {
  const session = useSession();
  const sessionUser = session?.data?.user;

  const slideout = useSlideout();

  const handleItemClick = () => {
    if (slideout) slideout.hide();
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-prose flex-col justify-between gap-5">
      <div>
        <div className="ml-2">
          <h2 className="mb-4 font-display text-2xl">Will it Hurt me?</h2>
        </div>

        <MainSlideoutMenu
          onClickSideEffect={handleItemClick}
          user={sessionUser}
        />
      </div>
    </div>
  );
}

export default MainSlideoutBody;
