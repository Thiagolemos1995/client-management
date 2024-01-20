import Header from './components/layout/Header';
import { fonts } from './fonts';
import { Providers } from './providers';

export const metadata = {
  title: 'Client Management System',
  description: 'A Client Management system powered by Thiago Lemos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${fonts.roboto.variable} ${fonts.lexend.variable}`}
    >
      <body style={{ background: '#c1c1c1' }}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
