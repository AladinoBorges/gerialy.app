import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'gerialy | software house by aladino borges | beta',
  description:
    'imagine what you can build with a team that refuses to see the world with the same eyes that everyone else uses.',
  icons: { icon: { url: '/gia_beta_favicon.png', href: '/gia_beta_favicon.png' } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
