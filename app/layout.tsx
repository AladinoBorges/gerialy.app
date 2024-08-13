import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'ger.ia | gestão eficiente de vagas e candidaturas',
  description: 'gerir vagas e candidaturas com inteligência artificial',
  icons: { icon: { url: '/beta logo.png', href: '/beta logo.png' } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
