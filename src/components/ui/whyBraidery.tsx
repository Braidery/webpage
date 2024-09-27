import Image from 'next/image';

export default function WhyBraidery() {
  return (
    <section className="my-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Why <span className="text-[#E6A97D]">BRAIDERY</span> ?</h2>
      <p className="text-gray-600 mb-8">
        BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care recommendations and tools. It’s a one-stop solution for everything hair-related.
      </p>
      <ul className="space-y-4 text-left md:text-center">
        {[
          "Find professional braiders and salons nearby",
          "Try New Styles",
          "AI Powered Recommendations",
          "Hair Routine Management",
          "Showcase for Braiders",
          "Small Business Integration"
        ].map((item, index) => (
          <li key={index} className="flex items-center justify-start md:justify-center text-gray-800">
            <div className="w-6 h-6 bg-[#E6A97D] rounded-full mr-3"></div>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Image src="/homescreen.jpeg" alt="App feature" width={300} height={300} className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}
