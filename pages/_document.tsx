import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/gia_beta_favicon.png' />
        <meta
          name='description'
          content='imagine what you can build with a team that refuses to see the world with the same eyes that everyone else uses.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
