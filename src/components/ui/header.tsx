import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-lg"></div>
        <span className="font-bold text-xl">BRAIDERY</span>
      </div>
      <nav className="flex space-x-6">
        <Link href="#about">
          <a className="text-gray-600 hover:text-gray-900">About</a>
        </Link>
        <Link href="#services">
          <a className="text-gray-600 hover:text-gray-900">Services</a>
        </Link>
        <Link href="#testimonials">
          <a className="text-gray-600 hover:text-gray-900">Testimonials</a>
        </Link>
      </nav>
      <Link href="#contact">
        <button className="bg-[#ECAB88] text-white px-4 py-2 rounded hover:bg-[#E09A77] transition-all">
          Contact Us
        </button>
      </Link>
    </header>
  );
}
