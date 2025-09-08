import React, { useState } from "react";
import {
  Menu,
  X,
  LogIn,
  Sun,
  Book,
  ShoppingCart,
  Info,
  Phone,
  Home,
} from "lucide-react";

void React; // Évite TS6133 tout en gardant l'import et la logique

const navItems = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Nos Livres", href: "/livres", icon: Book },
  { label: "Boutique", href: "/boutique", icon: ShoppingCart },
  { label: "À propos", href: "/a-propos", icon: Info },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  void setIsScrolled; // Évite TS6133 sans modifier la logique

  // Effet pour détecter le défilement (à ajouter avec useEffect si nécessaire)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <header
      className={`bg-white dark:bg-gray-900 w-full relative top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo coloré élégant */}
          <div className="flex items-center">
            <span className="font-['Indie_Flower'] text-3xl font-bold text-[#DCCC41]">
              T
            </span>
            <div>
              <Sun className="text-orange-500"></Sun>
            </div>
            <span className="font-['Indie_Flower'] text-3xl font-bold text-[#BE356A]">
              P
            </span>
            <span className="font-['Indie_Flower'] text-3xl font-bold text-[#4E6FA7]">
              E
            </span>
            <span className="font-['Indie_Flower'] text-3xl font-bold text-[#D68E54]">
              C
            </span>
            <span className="font-['Indie_Flower'] text-3xl font-bold text-[purple]">
              I
            </span>
          </div>

          {/* Desktop Navigation - Élégant et harmonieux */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-4 py-2 rounded-full font-['Glacial_Indifference'] font-medium text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-[#74C6C6] transition-all duration-300 group"
                >
                  <Icon
                    size={18}
                    className="mr-2 text-[#D68E54] group-hover:text-[#BE356A] transition-colors duration-300"
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Login Button - Design élégant */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="flex items-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] hover:from-[#BE356A] hover:to-[#D68E54] text-white font-waffle-soft font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <LogIn size={18} className="mr-2" />
              Connexion
            </button>

            <button className="flex items-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] hover:from-[#BE356A] hover:to-[#D68E54] text-white font-waffle-soft font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <LogIn size={18} className="mr-2" />
              S'inscrire
            </button>

            {/* Petit élément décoratif */}
            <div className="h-8 w-1 bg-gradient-to-b from-[#DCCC41] to-[#74C6C6] rounded-full opacity-70"></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-[#74C6C6] bg-opacity-10 text-[#4E6FA7] hover:bg-opacity-20 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Design soigné */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col space-y-2 p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-lg font-['Glacial_Indifference'] text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-[#74C6C6] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} className="mr-3 text-[#D68E54]" />
                    {item.label}
                  </a>
                );
              })}
              <button className="flex items-center justify-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] text-white .font-waffle-softfont-semibold py-3 px-5 rounded-lg transition-all duration-300 mt-2">
                <LogIn size={18} className="mr-2" />
                Connexion
              </button>

              <button className="flex items-center justify-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] text-white .font-waffle-softfont-semibold py-3 px-5 rounded-lg transition-all duration-300 mt-2">
                <LogIn size={18} className="mr-2" />
                S'inscrire
              </button>
            </nav>

            {/* Élément décoratif en bas du menu mobile */}
            <div className="h-1 mx-4 bg-gradient-to-r from-[#DCCC41] via-[#74C6C6] to-[#BE356A] rounded-full mt-4"></div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
