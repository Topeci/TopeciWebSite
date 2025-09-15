import React from "react";
import { Facebook, Linkedin, Instagram, Heart,  Sun, Music2 } from "lucide-react";
void React;
export function Footer() {
  return (
    <footer className="bg-[#74C6C6] text-black w-full mx-0 mt-auto">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Colonne 1 : Logo et slogan */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center mb-4">
              <div className="flex items-center">
                <span className="font-indie-flower text-3xl font-bold text-[#DCCC41]">
                  T
                </span>
                <div>
                  <Sun className="text-orange-500" />
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
              </div>
            </a>
            <div className="flex items-center mt-2">
              <Heart className="text-[#BE356A] mr-2" size={20} />
              <p className="font-indie-flower text-lg">
                Faites partie de la tribu TOPECI
              </p>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-indie-flower text-lg font-semibold mb-4 text-[#DCCC41]">
              Navigation
            </h3>
            <ul className="space-y-2 font-glacial-indifference">
              <li>
                <a href="/" className="hover:text-[#D68E54] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/boutique"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Boutique
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/a-propos"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/aide"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Aide & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Légal */}
          <div>
            <h3 className="font-indie-flower text-lg font-semibold mb-4 text-[#DCCC41]">
              Légal
            </h3>
            <ul className="space-y-2 font-glacial-indifference">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Politique cookies
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legal"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/cgv"
                  className="hover:text-[#D68E54] transition-colors"
                >
                  CGV
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Rejoignez-nous */}
          <div>
            <h3 className="font-indie-flower text-lg font-semibold mb-4 text-[#DCCC41]">
              Rejoignez-nous
            </h3>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.facebook.com/share/1Nv84yCbEV/?mibextid=wwXIfr"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/topeci/"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/topeci__?igsh=MTd5ZjljOGF2Z3JxMw=="
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1Nv84yCbEV/?mibextid=wwXIfr"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition flex items-center justify-center"
              >
                <Music2 size={20} />
              </a>
            </div>

            {/* Boutons connexion/inscription */}
            <div className="flex space-x-3">
              <a
                href="/login"
                className="bg-white text-[#74C6C6] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition flex-1 text-center"
              >
                Connexion
              </a>
              <a
                href="/signup"
                className="bg-[#D68E54] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#c57f4a] transition flex-1 text-center"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black border-opacity-20 py-4 w-full justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          <p className="font-glacial-indifference text-sm md:text-base">
            &copy; {new Date().getFullYear()} TOPECI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
