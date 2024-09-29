import Image from 'next/image';

export default function Download() {
  return (
    <section className="px-12 max-w-[1350px] mx-auto">
      <h2 className="text-[32px] md:text-[70px] font-bold mb-6 text-center">
        Check <span className="text-[#E6A97D]">BRAIDERY</span> ON
      </h2>
      <p className="md:text-[32px] text-center font-light mb-8 text-[#18181B]">
        Discover professional braiders and salons nearby, get personalized hair
        care routine powered by AI, shop for tailored hair care product.
      </p>
      <div className="flex  justify-center px-8">
        <Image src="/lo.png" alt="Google Play" width={200} height={60} />
        <Image src="/lo1.png" alt="App Store" width={200} height={60} />
      </div>
    </section>
  );
}
