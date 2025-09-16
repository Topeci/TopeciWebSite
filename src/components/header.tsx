import React, { useState } from "react";
import { Menu, X, User, ShoppingCart, Sun } from "lucide-react";

void React;

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  void setIsScrolled;

  return (
    <header
      className={`bg-white dark:bg-gray-900 w-full mx-0 relative top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      {/* SUPPRESSION du container avec mx-auto et px-4 */}
      <div className="w-full py-3">
        <div className="flex items-center justify-between px-4">
          {/* Logo coloré élégant avec lien vers l'accueil */}
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <span className="font-indie-flower text-3xl font-bold text-[#DCCC41]">
              T
            </span>
            <div>
              <Sun className="text-orange-500"></Sun>
            </div>
            <span className="font-indie-flower text-3xl font-bold text-[#BE356A]">
              P
            </span>
            <span className="font-indie-flower text-3xl font-bold text-[#4E6FA7]">
              E
            </span>
            <span className="font-indie-flower text-3xl font-bold text-[#D68E54]">
              C
            </span>
            <span className="font-indie-flower text-3xl font-bold text-[purple]">
              I
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-4 py-2 rounded-full font-['Glacial_Indifference'] font-medium text-[#BE356A] dark:text-white hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-white dark:hover:text-white transition-all duration-300 group"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Icônes d'actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Icône panier */}
            <a
              href="/panier"
              className="p-2.5 text-[#4E6FA7] hover:text-[#d65454] transition-all duration-300 hover:scale-105 relative"
            >
              <ShoppingCart size={20} />
              
            </a>

            {/* Icône utilisateur - lien direct vers la page de connexion */}
            <a
              href="/login"
              className="p-2.5 text-[#4E6FA7] hover:text-[#D68E54] transition-all duration-300 hover:scale-105"
            >
              <User size={20} />
            </a>

            {/* Élément décoratif */}
            <div className="h-8 w-1 bg-gradient-to-b from-[#DCCC41] to-[#74C6C6] rounded-full opacity-70"></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 mx-4">
            <nav className="flex flex-col space-y-2 p-2">
              {navItems.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-lg font-['Glacial_Indifference'] text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-[#74C6C6] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Actions mobiles */}
              <div className="flex items-center justify-around pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/panier"
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300 relative"
                >
                  <ShoppingCart size={20} />
                  <span className="text-xs mt-1">Panier</span>
                  
                </a>

                <a
                  href="/login"
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300"
                >
                  <User size={20} />
                  <span className="text-xs mt-1">Connexion</span>
                </a>
              </div>
            </nav>

            {/* Élément décoratif */}
            <div className="h-1 mx-4 bg-gradient-to-r from-[#DCCC41] via-[#74C6C6] to-[#BE356A] rounded-full mt-4"></div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
