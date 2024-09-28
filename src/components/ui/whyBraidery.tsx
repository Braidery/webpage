import Image from 'next/image';

export default function WhyBraidery() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 md:px-12">
      <div className='mb-6'>
      <h2 className=" text-[30px] md:text-[70px] font-bold mb-6">Why <span className="text-[#E6A97D]">BRAIDERY</span> ?</h2>
        <p className="text-[#18181B] text-[24px] md:text-[36px] font-extralight mb-8">
        Braidery helps you build a fun, personalized hair regimen with the power of AI, guiding you step by step to reach your hair goals. Whether it’s tracking progress, recommending products, or offering quick style tips,
        Braidery makes managing your hair enjoyable and easy.
        Plus, with seamless braider bookings and automatic product refills, your hair routine is always on track and hassle-free!
        </p>
      </div>
      <div className='grid lg:grid-cols-2 max-w-6xl mx-auto'>
      <div className='flex justify-center items-center'>
      <ul className="space-y-4 text-left justi">
        {[
          "Find professional braiders and salons nearby",
          "Try New Styles",
          "AI Powered Recommendations",
          "Hair Routine Management",
          "Showcase for Braiders",
          "Small Business Integration"
        ].map((item, index) => (
          <li key={index} className="flex gap-6 text-gray-800 items-center">
            <div className="">
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className='text-[#E6A97D]'
              >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481l-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z" />
              </svg>
            </div>
            <div className='md:text-[26px] font-thin'>
            {item}
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="md:block hidden">
        <Image src="/welcome.png" alt="App feature" width={340} height={100} className="mx-auto" />
      </div>
      </div>
     
    </section>
  );
}
