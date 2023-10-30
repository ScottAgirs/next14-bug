import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  weight: ['400', '700'],
});

export { playfair };
