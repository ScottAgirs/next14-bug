import { GoLink } from '@/app/components/navigation/GoLink';

export const HeaderMenu = () => {
  const menuItemClx =
    'text-xs uppercase font-semibold font-sans hover:text-primary transition-colors';

  return (
    <>
      <GoLink className={menuItemClx} href="/blog">
        Blog
      </GoLink>
      <GoLink className={menuItemClx} href="/scan">
        Scan
      </GoLink>
      <GoLink className={menuItemClx} href="/products">
        Products
      </GoLink>
    </>
  );
};
