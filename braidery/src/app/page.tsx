import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Welcome to Braidery!</title>
        <meta name="description" content="Find the perfect hairdresser with Braidery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a href="#" className="text-blue-600">Braidery!</a>
        </h1>

        <p className="mt-3 text-2xl">
          Find the perfect hairdresser
        </p>

        <div className="mt-6">
          <Image src="/image/logobraidery.jpeg" alt="Braidery Logo" width={400} height={400} />
        </div>

        {/* Add any additional content you want on your landing page here */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}