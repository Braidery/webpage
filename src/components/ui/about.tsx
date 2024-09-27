import Image from 'next/image';

export default function About() {
  return (
    <section className="">
      <div className="flex flex-col  max-w-[1350px] md:mx-auto md:flex-row items-center md:gap-8 py-24 md:py-2 md:px-12">
      <div className="w-[100%]">
          <Image src="/1.png" alt="App feature" width={500.56} height={300} className="" />
        </div>
        <div className="mb-8 md:mb-0">
      <h2 className="text-[70px] mb-6">What's <span className="text-[#E6A97D]">BRAIDERY</span> ?</h2>
          <p className="text-[#18181B] text-[28px] font-extralight mb-4">
            BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders
            and hair care professionals, while also providing personalized hair care recommendations and tools.
            It is a one-stop solution for everything hair-related.
          </p>
        </div>

      </div>
    </section>
  );
}
