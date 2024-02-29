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
        <h1 className="text-5xl font-bold">
          Coming Soon:
          <a href="#" className="text-brown-50">Braidery!</a>
        </h1>

        <p className="mt-3 text-2xl">
          You! Ultimate Hair Care Companion.
        </p>

         {/* Flex container for text and image */}
    <div className="flex w-full flex-col md:flex-row items-center justify-center mt-6">
          
          {/* Text on the left */}
          <div className="w-full md:w-1/2">
            <p className="text-2xl">
              Your Ultimate Hair Care Companion.
            </p>
            <p className="mt-3 text-xl">
            <a href="#" className="text-brown-50">Braidery</a>, the innovative app you've been waiting for, is currently in the works and gearing up to transform your hair care experience.
            </p>
            {/* ... More text content ... */}
          </div>

          {/* Image on the right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image src="/image/homescreen.jpeg" alt="Braidery Home Screen" width={400} height={400} />
          </div>
        </div>
        

        <section className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
  
        <h3 className="text-2xl font-bold text-center mt-8 mb-4">Why Braidery?</h3>
        <p className="text-lg text-gray-700">
          Find a Braider Near You: Discover skilled braiders in your vicinity with just a few taps. Our location-based service ensures you're matched with the best in your area.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Braider Branding & Marketplace: For braiders, Braidery is not just about booking appointments. It's about building your brand. Sell your signature hair care products, from creams to treatments, and grow your business like never before.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Manage Your Hair Routine: Dive into a personalized hair care routine, supported by expert advice and tailored product recommendations. Braidery is your partner in achieving your hair goals.
        </p>

        <ul className="list-disc space-y-2 mt-4 ml-5 text-gray-600">
          <li>Clients can effortlessly find and book hair braiding services, tailored to their specific needs and location.</li>
          <li>Hair care professionals can showcase their brand, share their portfolio, and reach a wider audience eager for their expertise.</li>
          <li>Everyone can enjoy a marketplace brimming with quality hair care products — from essential hair creams to everything you need for your hair routine.</li>
        </ul>
        
      </div>
    </section>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="flex-shrink-0">
            <Image src="/image/logo.jpeg" alt="Braidery Logo" width={200} height={600} />
          </div>

          <div className="flex flex-col items-center md:items-start text-lg md:max-w-md">
            <h2 className="text-3xl font-bold mb-4">What's <a href="#" className="text-brown-50">Braidery</a> ?</h2>
            <p>
            <a href="#" className="text-brown-50">Braidery</a> is not just an app, it's a revolution in hair care. Designed to connect you with professional hair braiders in your area, Braidery offers a unique platform for both clients and braiders.
            </p>
            {/* Continue with the rest of your text content */}
          </div>
        </div>

   

    {/* Flex container for text and image */}
    <div className="flex w-full flex-col md:flex-row items-center justify-center mt-6">
          
          {/* Text on the left */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-center mt-8 mb-4">Stay Tuned!</h3>
            <p className="mt-3 text-xl">
            Our team is working tirelessly to bring <a href="#" className="text-brown-50">Braidery</a> to life. We're pouring our passion for hair care into every feature, ensuring that <a href="#" className="text-brown-50">Braidery!</a> will be the app you wonder how you ever lived without.
            </p>
            {/* ... More text content ... */}
          </div>

          {/* Image on the right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image src="/image/app.jpeg" alt="Braidery Home Screen" width={400} height={400} />
          </div>
        </div>
         


        {/* Add any additional content you want on your landing page here */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}