import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { darkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú

  return (
    <div className={`flex flex-col min-h-screen transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* Pasamos estado del menú */}
      
      <main className={`flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 transition-all duration-300 
        ${menuOpen ? "mt-40" : ""}`} // Agrega margen superior cuando el menú está abierto
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};


export default Layout;
