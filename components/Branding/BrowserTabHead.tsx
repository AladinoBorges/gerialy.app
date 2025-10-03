import Head from 'next/head';

export default function BrowserTabHead({ complementaryHeader }: { complementaryHeader: string }) {
  return (
    <>
      <Head>
        <title>{`gerialy | ${complementaryHeader} | beta`}</title>
      </Head>
    </>
  );
}
