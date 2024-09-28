import Image from 'next/image';

export default function Download() {
  return (
    <section className="px-12 max-w-[1350px] mx-auto">
      <h2 className="text-[32px] md:text-[70px] font-bold mb-6 text-center">Check <span className="text-[#E6A97D]">BRAIDERY</span> ON</h2>
      <p className="md:text-[32px] text-center font-light mb-8 text-[#18181B]">
      Our app is currently in development, and we're working hard to deliver the best personalized hair care experience.
      You'll be able to discover professional braiders and salons nearby, receive AI-powered personalized hair care routines,
      and shop for tailored hair care products all in one place. 
           </p> 
        <h1 className="text-[32px] md:text-[70px] font-bold mb-6 text-center"> Stay tuned! </h1>
        <p className="md:text-[32px] text-center font-light mb-8 text-[#26262a]">
        We'll notify you as soon as the app is ready for download.
          </p> 
      <div className="flex  justify-center px-8">
        <Image src="/lo.png" alt="Google Play" width={200} height={60} />
        <Image src="/lo1.png" alt="App Store" width={200} height={60} />
      </div>
    </section>
  );
}
