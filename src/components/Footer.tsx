import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm ">&copy; {year} Kofi Kwafo Awua. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-3 ml-6">
        <Link href="https://github.com/Kkwafo" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-6 h-6 hover:opacity-80 transition"
            src="/icons/github.png"
            alt="GitHub"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/kofi-kwafo-awua-3b4350151/" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-6 h-6 hover:opacity-80 transition"
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;