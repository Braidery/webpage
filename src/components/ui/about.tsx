import Image from 'next/image';

export default function About() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold mb-6">What's <span className="text-[#E6A97D]">BRAIDERY</span> ?</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-600 mb-4">
            BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders
            and hair care professionals, while also providing personalized hair care recommendations and tools.
            It is a one-stop solution for everything hair-related.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <Image src="/homescreen.jpeg" alt="App feature" width={300} height={300} className="w-full" />
        </div>
      </div>
    </section>
  );
}
