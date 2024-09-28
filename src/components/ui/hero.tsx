import Image from "next/image";
import EmailForm from "@/components/ui/EmailForm"; // Import the EmailForm component

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex flex-col max-w-[1350px] md:mx-auto md:flex-row items-center md:gap-8 py-24 md:py-12 px-8 md:px-12">
        <div className="mb-8 md:mb-0 z-10">
          <h1 className="text-4xl md:text-[90px] mb-6 text-[#17151D] leading-tight">
            Get notified <br /> When we launch
          </h1>
          <div className="mx-auto md:mx-0 mb-6">
            <EmailForm /> {/* Insert the EmailForm here */}
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
