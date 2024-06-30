import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Blogs - Niraj Chaurasiya</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="https://nirajchaurasiya.com"
            className="mr-5 hover:text-white"
            target="_blank"
          >
            Visit Homepage
          </Link>
          <Link
            href="https://services.nirajchaurasiya.com"
            className="mr-5 hover:text-white"
            target="_blank"
          >
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}
