import { Metadata } from 'next';
// import { Suspense } from 'react';

// import { ProductsList } from '@/app/components/products/ProductsList';
import { playfair } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Products - Will it hurt?',
};

export default async function ProductsPage({
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
        <h1 className={`${playfair.className} text-2xl`}>Products</h1>
      </div>

      <h2>ProductsList</h2>
      {/* <Suspense key={query + currentPage} fallback={'Blog skeleton'}>
        <ProductsList query={query} currentPage={currentPage} />
      </Suspense> */}
    </div>
  );
}
