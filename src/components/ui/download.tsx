import Image from 'next/image';

export default function Download() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold mb-6">Check <span className="text-[#E6A97D]">BRAIDERY</span> ON</h2>
      <p className="text-gray-600 mb-8">
        Discover professional braiders and salons nearby, get personalized hair care routine powered by AI, shop for tailored hair care product.
      </p>
      <div className="flex space-x-4">
        <Image src="/google.png" alt="Google Play" width={200} height={60} />
        <Image src="/app.png" alt="App Store" width={200} height={60} />
      </div>
    </section>
  );
}
