import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "geria | inteligência p'ra quem gere e quem busca",
  description:
    'otimize seu processo seletivo e eleve suas candidaturas a outro nível com a força da inteligência artificial.',
  icons: { icon: { url: '/gia_beta_favicon.png', href: '/gia_beta_favicon.png' } },
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
