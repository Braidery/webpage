import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className=" hero">
      <div className="flex flex-col  max-w-[1350px] md:mx-auto md:flex-row items-center md:gap-8 py-24 md:py-12 px-8 md:px-12">
        <div className="mb-8 md:mb-0 z-10">
          <a
            href="#"
            className="text-[#17151D] hover:text-gray-900 text-[20px] inline-block mb-6"
          >
            ← Coming soon
          </a>
          <h1 className="text-4xl md:text-[90px]  mb-6 text-[#17151D] leading-tight">
            Get notified <br /> When we launch
          </h1>
          <div className=" mx-auto md:mx-0 mb-6">
            <div className="flex items-center justify-between md:max-w-[32rem] mb-8 p-2 border-[0.5px] border-black rounded-[60px]">
              <input
                type="text"
                placeholder="Enter your email to be notified"
                className="flex-grow bg-transparent outline-none px-4 py-2 text-sm md:text-[18px] font-extralight placeholder-[#000000]"
              />
              <button className="bg-[#ECAB88] text-white px-4 md:px-8 py-2 md:py-5 text-[12px] md:text-[16px] font-semibold rounded-full hover:bg-[#d5906a] transition-colors duration-300">
                Notified Me
              </button>
            </div>
            <p className="text-[24px] text-[#17151D] font-light mt-2 ml-2">
              Don't worry, we will not send spam :)
            </p>
          </div>
        </div>
        <div className="z-10">
          <Image
            src="/12.png" // Update with the correct image paths
            alt="App mockup"
            width={530.01}
            height={50.58}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
