import React from "react";
import { Facebook, Linkedin, Instagram, Music2 } from "lucide-react";
import TopeciLogo from "../images/logotopeci.png";
void React;

export function Footer() {
  return (
    <footer className="bg-[#74C6C6] text-black w-full mx-0 mt-auto mb-0 dark:bg-[#2a2a2a] dark:text-white">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Colonne 1 : LA MARQUE */}
          <div>
            <h3 className="font-waffle-soft text-base font-bold mb-1 text-[#BE356A]  dark:text-[#FFD700]">
              LA MARQUE
            </h3>
            <ul className="space-y-2 font-glacial-indifference">
              <li>
                <a
                  href="/"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/boutique"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  Boutique
                </a>
              </li>
              <li>
                <a
                  href="/espace-pro"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  Espace pro
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Légal */}
          <div>
            <h3 className="font-waffle-soft text-base font-bold mb-1 text-[#BE356A] dark:text-[#BE356A] ">
              LEGAL
            </h3>
            <ul className="space-y-2 font-glacial-indifference">
              <li>
                <a
                  href="cgv"
                  className=" hover:underline transition-colors text-base dark:text-pink-400 dark:hover:underline"
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  Politique cookies
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  Mentions légales & CGU
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-pink-400 dark:hover:text-orange-300"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Besoin d'aide ? */}
          <div>
            <h3 className="font-waffle-soft text-base font-bold mb-1 text-[#BE356A]  dark:text-[#BE356A] ">
              BESOIN D'AIDE ?
            </h3>

            <ul className="space-y-2 font-glacial-indifference">
              <li>
                <a
                  href="/aide-faq"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-gray-200 dark:hover:text-orange-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-gray-200 dark:hover:text-orange-300"
                >
                  Nous contacter
                </a>
              </li>
              <li>
                <a
                  href="/shipping-policy"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-gray-200 dark:hover:text-orange-300"
                >
                  Politique de livraison
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className=" hover:text-[#D68E54] transition-colors text-base dark:text-gray-200 dark:hover:text-orange-300"
                >
                  Politique remboursement & retour
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : contact */}
          <div>
            <h3 className="font-waffle-soft text-base font-bold mb-1 text-[#BE356A]  dark:text-[#BE356A] ">
              CONTACT
            </h3>
            <ul className="text-white space-y-2 font-glacial-indifference mb-4 dark:text-gray-200">
              <li className="text-base">SAV & autres questions ?</li>
              <li className="text-base">Email : contact@mon-topeci.com</li>
              <li className="text-base">Du lundi au vendredi de 8h à 18h</li>
            </ul>

            {/* Champ email et bouton */}
            <div className="mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="font-glacial-indifference text-gray-400 px-3 py-2 bg-transparent focus:outline-none text-sm border-b border-gray-300 focus:border-white max-w-[250px] dark:border-gray-500 dark:focus:border-white"
                />
                <a
                  href="#"
                  className="text-white font-semibold py-2 transition duration-300 text-sm whitespace-nowrap underline dark:text-gray-200"
                >
                  Obtenir un code →
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mb-[-15px]">
              <a
                href="https://www.facebook.com/share/1Nv84yCbEV/?mibextid=wwXIfr"
                className="text-[#BE356A]  bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/topeci/"
                className="text-[#BE356A]  bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/topeci__?igsh=MTd5ZjljOGF2Z3JxMw=="
                className="text-[#BE356A] bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1Nv84yCbEV/?mibextid=wwXIfr"
                className="text-[#BE356A]  bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black border-opacity-20 py-4 w-full dark:border-gray-600">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4">
          {/* Logo et slogan à gauche */}
          <div className="flex items-center mb-3 sm:mb-0">
            <a
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={TopeciLogo}
                alt="Logo topeci"
                className="h-8 w-auto mr-3"
              />
              <p className="font-indie-flower text-sm text-black dark:text-gray-200">
                Un jeu, une culture, un monde à découvrir
              </p>
            </a>
          </div>

          {/* Copyright à droite */}
          <p className="font-glacial-indifference text-xs text-black dark:text-gray-400">
            &copy; {new Date().getFullYear()} TOPECI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
