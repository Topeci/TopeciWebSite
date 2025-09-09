import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  ShoppingCart,
  Search,
  Sun,
  LogIn,
  UserPlus,
  ChevronDown,
} from "lucide-react";

void React;

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
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
                  className="flex items-center px-4 py-2 rounded-full font-['Glacial_Indifference'] font-medium text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-[#74C6C6] transition-all duration-300 group"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Icônes d'actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Icône de recherche */}
            <div className="relative">
              <button
                className="p-2.5 text-[#4E6FA7] hover:text-[#D68E54] transition-all duration-300 hover:scale-105"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-4 z-50">
                  <div className="flex items-center space-x-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-gray-100 placeholder-gray-400"
                      autoFocus
                    />
                    <button
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Icône panier */}
            <a
              href="/panier"
              className="p-2.5 text-[#4E6FA7] hover:text-[#D68E54] transition-all duration-300 hover:scale-105 relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#BE356A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </a>

            {/* Menu utilisateur */}
            <div className="relative">
              <button
                className="flex items-center p-2.5 text-[#4E6FA7] hover:text-[#D68E54] transition-all duration-300 hover:scale-105"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User size={20} />
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                  <a
                    href="/login"
                    className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] transition-all duration-300"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <LogIn size={18} className="mr-3 text-[#D68E54]" />
                    Connexion
                  </a>
                  <a
                    href="/signup"
                    className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] transition-all duration-300"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <UserPlus size={18} className="mr-3 text-[#D68E54]" />
                    S'inscrire
                  </a>
                </div>
              )}
            </div>

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

        {/* Barre de recherche mobile */}
        {isMobileSearchOpen && (
          <div className="md:hidden mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 mx-4">
            <div className="flex items-center space-x-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-gray-100 placeholder-gray-400"
                autoFocus
              />
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileSearchOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

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
                <button
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300"
                  onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                >
                  <Search size={20} />
                  <span className="text-xs mt-1">Recherche</span>
                </button>

                <a
                  href="/panier"
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300 relative"
                >
                  <ShoppingCart size={20} />
                  <span className="text-xs mt-1">Panier</span>
                  <span className="absolute top-0 left-6 bg-[#BE356A] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </a>

                <button
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300"
                  onClick={() => setIsMobileUserMenuOpen(!isMobileUserMenuOpen)}
                >
                  <User size={20} />
                  <span className="text-xs mt-1">Compte</span>
                </button>
              </div>

              {/* Menu utilisateur mobile */}
              {isMobileUserMenuOpen && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <a
                    href="/login"
                    className="flex items-center justify-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300"
                    onClick={() => {
                      setIsMobileUserMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogIn size={18} className="mr-2" />
                    Connexion
                  </a>

                  <a
                    href="/signup"
                    className="flex items-center justify-center bg-gradient-to-r from-[#D68E54] to-[#BE356A] text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300"
                    onClick={() => {
                      setIsMobileUserMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <UserPlus size={18} className="mr-2" />
                    S'inscrire
                  </a>
                </div>
              )}
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
