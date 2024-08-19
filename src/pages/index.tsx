import Head from "next/head";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Conway&apos;s Game of Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
