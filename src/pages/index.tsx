import Head from "next/head";
import dynamic from "next/dynamic";

const DynmaicHome = dynamic(() => import("@/components/Home").then((mod) => mod.default), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Conway&apos;s Game of Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynmaicHome />
    </>
  );
}
