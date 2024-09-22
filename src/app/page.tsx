import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justi justify-center py-16">
      {/* Head component for setting the page's head elements */}
      <Head>
        <title>Welcome to BRAIDERY!</title>
        <meta
          name="description"
          content="Find the perfect hairdresser with BRAIDERY"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Import Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
       {/*<link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />*/}
      </Head>

      {/* Main content area */}
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 md:px-20 text-center font-montserrat py-12">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-brown-90 mt-8">
          Coming Soon:
          <a
            href="#"
            className="text-brown-50 hover:text-orange-50 transition-colors duration-300"
          >
            {' '}
            BRAIDERY!
          </a>
        </h1>

        <p className="mt-3 text-2xl text-gray-50">
          Your Ultimate Hair Care Companion.
        </p>


          {/* Logo and Description Section */}
          <div className="flex flex-col md:flex-row items-center justi justify-items-center gap-14 w-full mt-36">
          <div className="flex-shrink-0">
            <Image
              src="/image/logo.jpeg"
              alt="BRAIDERY Logo"
              width={200}
              height={600}
              className="rounded-full shadow-md"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-lg md:max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-brown-90">
              What's{' '}
              <a
                href="#"
                className="text-brown-50 hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>
              ?
            </h2>
            <p className="text-gray-50 leading-relaxed">
              <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>{' '}
              is not just an app; it's a comprehensive hair care platform designed to 
              connect individuals with expert braiders and hair care professionals, while also providing personalized hair care routine and recommendations tools.
              It’s a one-stop solution for everything hair-related.
            </p>
            {/* Additional text content can be added here */}
          </div>
        </div>

        {/* Flex container for text and image */}
        <div className="flex w-full flex-col md:flex-row items-center mt-36">
          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pr-8">
            <p className="text-xl text-gray-30">
              <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>
              , the innovative app you've been waiting for, is currently in the
              works and gearing up to transform your hair care experience.
            </p>
            {/* Additional text content can be added here */}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-8">
            <Image
              src="/image/homescreen.jpeg"
              alt="BRAIDERY Home Screen"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        

        {/* Why BRAIDERY Section */}
        {/* Why BRAIDERY Section */}
       {/*<section className="py-12 px-4 mt-16 bg-gray rounded-xl shadow-md">
          {/* This section can be used for additional content or features 
        </section>*/}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-brown-90 text-center mt-8 mb-8">
            
              Why{' '}
              <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>?
            </h3>
            <p className="text-lg text-gray-50 leading-relaxed">
              <strong>Braidery</strong> is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care recommendations and tools. It’s a one-stop solution for everything hair-related, offering features that help users:
            </p>

<ul className="list-disc space-y-2 mt-6 ml-5 text-gray-30">
  <li><strong>Find Braiders Nearby:</strong> Easily discover professional braiders and salons in your area, view their portfolios, check availability, and book appointments.</li>
  
  <li><strong>Try New Styles:</strong> Explore a variety of braiding and hairstyle options, get inspiration, and virtually try on styles to see what works for you before committing.</li>
  
  <li><strong>AI-Powered Recommendations:</strong> Receive personalized hair care product and style suggestions based on your unique hair type, condition, and goals (such as length or scalp health).</li>
  
  <li><strong>Hair Routine Management:</strong> Build and manage a personalized hair care routine, set goals, track progress, and get reminders to help you stay on top of your regimen.</li>
  
  <li><strong>Showcase for Braiders:</strong> Braiders can create profiles, showcase their best work, provide hair care advice, and connect with clients looking for their services.</li>
  
  <li><strong>Small Business Integration:</strong> Small businesses can launch their stores within the app, selling hair care products like extensions, oils, and treatments, with AI-driven product recommendations to help users achieve their hair goals.</li>
</ul>

<p className="text-lg text-gray-50 mt-4 leading-relaxed">
  Overall, <strong>Braidery</strong> is your everyday companion for maintaining healthy, beautiful hair through easy access to services, products, and personalized care.
</p>   

        {/* Stay Tuned Section */}
        <div className="flex w-full flex-col md:flex-row items-center justify-center mt-36">
          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold text-brown-90 text-center md:text-left mt-8 mb-4">
              Stay Tuned!
            </h3>
            <p className="mt-3 text-xl text-gray-50 leading-relaxed">
              Our team is working tirelessly to bring{' '}
              <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>{' '}
              to life. We're pouring our passion for hair care into every
              feature, ensuring that{' '}
              <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY!
              </a>{' '}
              will be the app you wonder how you ever lived without.
            </p>
            {/* Additional text content can be added here */}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
           
            <Image
              src="/image/dashbord.jpeg"
              alt="BRAIDERY App Screen"
              width={300}
              height={300}
              className="rounded-l shadow-lg"
            />
          </div>
        </div>

        {/* Additional content can go here */}
      </div>
      </main>

      {/* Footer */}
      <footer className="flex h-24 w-full items-center justify-center border-t mt-16">
        <p className="text-gray-30">
          &copy; {new Date().getFullYear()}
          {' '}
          <a
                href="#"
                className="text-brown-50 font-semibold hover:text-orange-50 transition-colors duration-300"
              >
                BRAIDERY
              </a>/ Sandrine Cyuzuzo Gamman. All rights reserved.
        </p>
      </footer>
    </div>
  );
}