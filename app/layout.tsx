import '@/styles/globals.css';

import { Header } from '@/app/components/layout/Header';
import { MobileFooter } from '@/app/components/layout/MobileFooter';
import { Providers } from '@/app/providers';

import { playfair } from '@/lib/fonts';

import { classNames } from '@/utils/classNames';

export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = null;

  return (
    <html lang="en" className="pb-24" data-testid="root">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <body suppressHydrationWarning className={classNames(playfair.variable)}>
        <Providers session={session}>
          <Header />

          {children}

          <div className="md:hidden">
            <MobileFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
