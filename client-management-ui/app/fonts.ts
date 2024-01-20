import { Roboto, Lexend } from 'next/font/google';

const roboto = Roboto({
  weight: ['100'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lexend = Lexend({
  weight: ['100'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const fonts = {
  roboto,
  lexend,
};
