import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 text-center shadow-lg">
      <p className="text-sm text-gray-300">&copy; {year} Kofi Kwafo Awua. {t("rightsReserved")}</p>
      <div className="flex justify-center space-x-6 mt-3">
        <Link href="https://github.com/Kkwafo" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-6 h-6 hover:scale-110 transition-transform"
            src="/icons/github.png"
            alt="GitHub"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/kofi-kwafo-awua-3b4350151/" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-6 h-6 hover:scale-110 transition-transform"
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