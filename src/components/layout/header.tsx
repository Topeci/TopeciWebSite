/**
 * En-tête du site avec navigation responsive
 */

import { useState } from "react";
import { Menu, X, CircleUser, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "@tanstack/react-router";

import TopeciLogo from "../../assets/images/logotopeci.png";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/boutique" },
  { label: "Notre Histoire", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // Gérer le scroll pour l'effet d'ombre
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header
      className={`bg-white dark:bg-gray-900 w-full mx-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="w-full py-3">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={TopeciLogo}
              alt="Logo TOPECI"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center px-4 py-2 rounded-full font-waffle-soft font-light text-[#BE356A] dark:text-white hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-white transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icônes d'actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Icône panier */}
            <Link
              to="/panier"
              className="relative text-[#BE356A] hover:text-[#4E6FA7] transition-colors duration-300"
            >
              <ShoppingCart size={24} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Icône utilisateur */}
            <Link
              to="/auth/login"
              className="text-[#BE356A] hover:text-[#4E6FA7] transition-colors duration-300"
            >
              <CircleUser size={24} strokeWidth={2.5} />
            </Link>

            {/* Élément décoratif */}
            <div className="h-8 w-1 bg-gradient-to-b from-[#BE356A] to-[#DCCC41] rounded-full opacity-70"></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#DCCC41] hover:text-[#BE356A] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 mx-4 animate-slide-down">
            <nav className="flex flex-col space-y-2 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center px-4 py-3 rounded-lg font-waffle-soft text-[#BE356A] dark:text-gray-100 hover:bg-[#74C6C6] hover:bg-opacity-10 hover:text-[#4E6FA7] dark:hover:text-[#74C6C6] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Actions mobiles */}
              <div className="flex items-center justify-around pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                {/* Panier mobile avec badge */}
                <Link
                  to="/panier"
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300 relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <ShoppingCart size={24} />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1 font-semibold">
                    Panier {cartCount > 0 && `(${cartCount})`}
                  </span>
                </Link>

                {/* Connexion mobile */}
                <Link
                  to="/auth/login"
                  className="flex flex-col items-center p-2 text-[#4E6FA7] hover:text-[#D68E54] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CircleUser size={24} />
                  <span className="text-xs mt-1 font-semibold">Connexion</span>
                </Link>
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

// Ajoutez ces styles dans votre fichier CSS global si ce n'est pas déjà fait
// @keyframes slide-down {
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
//
// .animate-slide-down {
//   animation: slide-down 0.3s ease-out;
// }
