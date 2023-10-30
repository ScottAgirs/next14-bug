'use client';

import Link, { LinkProps } from 'next/link';
import React from 'react';

export const GoLink = ({
  children,
  href,
  ...rest
}: LinkProps & {
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
  target?: React.HTMLAttributeAnchorTarget;
}) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};
