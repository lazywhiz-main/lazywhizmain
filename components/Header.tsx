import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-text-high mb-4 md:mb-0">
          <span className="text-brand-500">Lazy</span>Whiz
        </Link>
        
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
            <li><Link href="/about" className="hover:text-brand-500 transition-colors">About</Link></li>
            <li><Link href="/toolkit" className="hover:text-brand-500 transition-colors">Toolkit</Link></li>
            <li><Link href="/guild" className="hover:text-brand-500 transition-colors">Guild</Link></li>
            <li><Link href="/service" className="hover:text-brand-500 transition-colors">Service</Link></li>
            <li><Link href="/works" className="hover:text-brand-500 transition-colors">Works</Link></li>
            <li><Link href="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 