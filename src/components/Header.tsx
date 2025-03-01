import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-green-900 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">My Portfolio</span>
        </Link>
        <div className="space-x-4">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/skills" className="hover:underline">
            skills
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
