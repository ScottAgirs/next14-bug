import { Metadata } from 'next';
// import { Suspense } from 'react';

// import { PostGrid } from '@/app/components/posts/PostGrid';
import { PostGridDumb } from '@/app/components/posts/PostGridDumb';
import { fetchPosts } from '@/lib/db';
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
  const posts = await fetchPosts(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${playfair.className} text-2xl`}>Blog</h1>
      </div>

      <h2>Blog</h2>
      <PostGridDumb posts={posts} />
      {/* <Suspense key={query + currentPage} fallback={'Blog skeleton'}>
        <PostGrid query={query} currentPage={currentPage} />
      </Suspense> */}
    </div>
  );
}
