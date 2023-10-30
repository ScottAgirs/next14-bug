'use client';

import { GoLink } from '@/app/components/navigation/GoLink';

const commonMenuItems = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/products',
    text: 'Products',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/contribute',
    text: 'Contribute',
  },
];

const dashboardMenuItems = [
  {
    href: '/dashboard',
    text: 'Dashboard',
  },
  {
    href: '/dashboard/articles',
    text: 'Articles',
  },
  // {
  //   href: '/dashboard/recipes',
  //   text: 'Recipes',
  // },
];

export function MainSlideoutMenu({ onClickSideEffect, user }: any) {
  const linkClassName =
    'px-3 py-2 hover:bg-text/5 block rounded-xl transition-colors text-sm';

  return (
    <div className="mx-auto flex w-full max-w-prose flex-col justify-between gap-5">
      <div>
        <ul className="mt-3 space-y-0.5">
          {commonMenuItems.map(item => (
            <li key={item.href}>
              <GoLink
                onClick={() => {
                  if (onClickSideEffect) onClickSideEffect();
                }}
                className={linkClassName}
                href={item.href}
              >
                {item.text}
              </GoLink>
            </li>
          ))}

          {user &&
            dashboardMenuItems.map(item => (
              <li key={item.href}>
                <GoLink
                  onClick={() => {
                    if (onClickSideEffect) onClickSideEffect();
                  }}
                  className={linkClassName}
                  href={item.href}
                >
                  {item.text}
                </GoLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
