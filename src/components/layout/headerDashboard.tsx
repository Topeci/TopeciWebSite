import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import TopeciLogo from "../../assets/images/logotopeci.png";

export function HeaderDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Données utilisateur simulées
  const user = {
    name: "Jean-Marc KOFFI",
    email: "jeanmarc.koffi@topecishop.com",
    phone: "+225 07 08 07 09 08",
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
         
          {/* Logo coloré élégant avec lien vers l'accueil */}
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={TopeciLogo}
              alt="Logo topeci"
              className="h-10 w-auto md:h-12"
            />
          </a>

          {/* Navigation - Cachée sur mobile */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link
              to="/dashboard/boutique"
              className="text-gray-700 dark:text-gray-300 hover:text-[#D68E54] dark:hover:text-[#DCCC41] font-medium transition-colors relative group"
            >
              Boutique
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D68E54] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/dashboard/commandes"
              className="text-gray-700 dark:text-gray-300 hover:text-[#D68E54] dark:hover:text-[#DCCC41] font-medium transition-colors relative group"
            >
              Commandes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D68E54] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Côté droit - Profil et menu mobile */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* Menu déroulant profil */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#D68E54] to-[#DCCC41] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Menu déroulant */}
              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                    {/* En-tête avec infos utilisateur */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                      <p className="font-semibold text-gray-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {user.phone}
                      </p>
                    </div>

                    {/* Options du menu */}
                    <div className="p-2">
                      <Link
                        to="/dashboard/profile"
                        className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Profil</span>
                      </Link>

                      <Link
                        to="/dashboard/parametres"
                        className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Paramètres</span>
                      </Link>

                      <button
                        onClick={() => {
                          // Logique de déconnexion
                          setIsProfileOpen(false);
                        }}
                        className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors w-full text-left"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Se déconnecter</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Menu burger mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/dashboard/boutique"
                className="text-gray-700 dark:text-gray-300 hover:text-[#D68E54] dark:hover:text-[#DCCC41] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link
                to="/dashboard/commandes"
                className="text-gray-700 dark:text-gray-300 hover:text-[#D68E54] dark:hover:text-[#DCCC41] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Commandes
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
