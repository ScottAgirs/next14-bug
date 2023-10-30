import { Metadata } from 'next';
import { Suspense } from 'react';

import { PostGrid } from '@/app/components/posts/PostGrid';
import { playfair } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Blog - Will it hurt?',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${playfair.className} text-2xl`}>Blog</h1>
      </div>

      <Suspense key={query + currentPage} fallback={'Blog skeleton'}>
        <PostGrid query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
