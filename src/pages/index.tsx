import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conway&apos;s Game of Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center text-4xl font-semibold">Conway&apos;s Game of Life</main>
    </>
  );
}
