'use client';

import { GoLink } from '@/app/components/navigation/GoLink';
// import Text from '@/components/data-display/Text';

const renderLogo = () => (
  <div className="inline-block transition-all hover:-rotate-2 hover:scale-105">
    W
  </div>
);

export const Logo = ({
  href = '/',
  removeLink,
}: {
  href?: string;
  removeLink?: boolean;
}) => {
  if (!removeLink) return <GoLink href={href}>{renderLogo()}</GoLink>;

  return renderLogo();
};
