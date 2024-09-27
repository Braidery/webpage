import Image from 'next/image';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 px-4 md:px-12 bg-[#FDF6E9]">
      <div className="md:w-1/2 mb-8 md:mb-0 z-10">
        <a href="#" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
          ← Coming soon
        </a>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Get notified <br /> When we launch
        </h1>
        <div className="max-w-md w-full mx-auto md:mx-0 relative">
          <div className="bg-[#F8E8DD] rounded-full p-1 shadow-lg flex items-center overflow-hidden">
            <Input
              type="email"
              placeholder="Enter your email to be notified"
              className="border-none rounded-l-full px-6 py-3 flex-grow bg-transparent text-gray-800 placeholder-gray-500"
            />
            <Button className="rounded-full px-6 py-3 bg-[#ECAB88] hover:bg-[#E09A77] text-white transition-all hover:scale-105">
              Notified Me
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">Don't worry, we will not send spam :)</p>
        </div>
      </div>
      <div className="md:w-1/2 relative z-10">
        <Image
          src="/braiderypic.png" // Update with the correct image paths
          alt="App mockup"
          width={400}
          height={600}
          className="w-full max-w-md mx-auto relative rounded-3xl shadow-xl"
        />
       
      </div>
    </section>
  );
}
