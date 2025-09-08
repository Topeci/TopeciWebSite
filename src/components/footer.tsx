/**
 * Ceci est le Footer du site web de la TOPECI
 * Il contient des informations de copyright et des liens vers les réseaux sociaux des icones pour representer les 
 * reseaux sociaux(facebook, twitter, instagram, tiktok)
 * 
  * Liens utiles:
Aide
Livraison
Assistance
Conditions générales

2025 TOPECI. Tous droits réservés.

Rejoingnez-nous 
sous titré Indie flower: faites partie de la tribu TOPECI

Charte graphique : 
blanc
vert vif #DCCC41
Magenta #BE356A
Bleu #4E6FA7
Bleu cian #74C6C6
Orange #D68E54

Police d'écriture : Indie flower, Waffle soft, Glacial Indifference
 */

import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Heart,
  Music2,
  Truck,
  HeadphonesIcon,
  FileText,
  Sun,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#74C6C6] text-black w-full mt-auto">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et réseaux sociaux */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <div className="flex items-center">
                <span className=".font-waffle-soft text-3xl font-bold text-[#DCCC41]">
                  T
                </span>
                <div>
                  <Sun className="text-orange-500"></Sun>
                </div>
                <span className=".font-waffle-soft text-3xl font-bold text-[#BE356A]">
                  P
                </span>
                <span className=".font-waffle-soft text-3xl font-bold text-[#4E6FA7]">
                  E
                </span>
                <span className=".font-waffle-soft text-3xl font-bold text-[#D68E54]">
                  C
                </span>
                <span className=".font-waffle-soft text-3xl font-bold text-[purple]">
                  I
                </span>
              </div>
            </a>
            <div className="flex space-x-4">
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
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className=".font-waffle-soft text-lg font-semibold mb-6 text-[#DCCC41]">
              Liens utiles
            </h3>
            <ul className="space-y-3 .font-glacial-indifference ">
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-[#D68E54] transition"
                >
                  <Truck size={16} className="mr-2" />
                  Livraison
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-[#D68E54] transition"
                >
                  <HeadphonesIcon size={16} className="mr-2" />
                  Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-[#D68E54] transition"
                >
                  <FileText size={16} className="mr-2" />
                  Conditions générales
                </a>
              </li>
            </ul>
          </div>

          {/* Rejoignez-nous */}
          <div className="md:text-left">
            <h3 className=".font-waffle-soft text-lg font-semibold mb-4 text-[#DCCC41]">
              Rejoignez-nous
            </h3>
            <div className="flex justify-center md:justify-start mb-3">
              <Heart className="text-[#BE356A] mr-2" size={24} />
            </div>
            <p className=".font-indie-flower text-lg">
              Faites partie de la tribu TOPECI
            </p>
            <p className=".font-glacial-indifference  mt-2 text-sm">
              Découvrez une communauté de passionnés et bénéficiez d'avantages
              exclusifs.
            </p>
          </div>

          {/* Newsletter */}
          <div className=" md:text-left">
            <h3 className=".font-waffle-soft text-lg font-semibold mb-4 text-[#DCCC41]">
              Newsletter
            </h3>
            <p className=".font-glacial-indifference  mb-4 ">
              Inscrivez-vous pour être le premier à découvrir les nouveautés,
              produits exclusifs et promotions TOPECI
            </p>

            <div className="flex">
              <button className="bg-[#BE356A] text-white px-6 py-2 rounded-full transition hover:bg-[#9c2a55] font-semibold whitespace-nowrap">
                INSCRIPTION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black border-opacity-20 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Glacial_Indifference'] text-sm md:text-base">
            &copy; {new Date().getFullYear()} TOPECI. Tous droits réservés.
          </p>
          <p className="font-['Glacial_Indifference'] text-sm md:text-base mt-2 md:mt-0">
            Assistance : +225 01 72 61 61 33 • +225 01 72 37 37 32
          </p>
        </div>
      </div>
    </footer>
  );
}
