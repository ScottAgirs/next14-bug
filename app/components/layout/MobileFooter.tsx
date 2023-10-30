import { FullButton } from '@/app/components/data-entry/FullButton';
import { GoLink } from '@/app/components/navigation/GoLink';

export const MobileFooter = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 bg-surface pb-6">
      <div className="relative mx-auto flex h-12 max-w-md items-center justify-center">
        <FullButton
          icon="home"
          href="/"
          className="h-full flex-1 justify-center bg-transparent hover:bg-transparent"
          variant="ghost"
        />

        <FullButton
          icon="blog"
          href="/blog"
          className="h-full flex-1 justify-center bg-transparent hover:bg-transparent"
          variant="ghost"
        />

        <GoLink
          className="mb-4 aspect-square h-16 w-16 rounded-full border-2 border-surface bg-primary p-3"
          href="/scan"
        >
          <span className="sr-only">Scan</span>
        </GoLink>

        <FullButton
          icon="salad"
          variant="ghost"
          href="/products"
          className="h-full flex-1 justify-center bg-transparent hover:bg-transparent"
        />

        <FullButton
          icon="search"
          variant="ghost"
          href="/products"
          className="h-full flex-1 justify-center bg-transparent hover:bg-transparent"
        />
      </div>
    </div>
  );
};
