/**
 * Page des points de vente
 * Points de vente en ligne et physiques :
 * Librairie France (Toutes la Côte d'Ivoire)
 * Sococe (Abidjan)
 * FNAC (Cap Sud Abidjan, Cap Nord Abidjan)
 * Amazon (Livraison internationale)
 */


import { createFileRoute } from "@tanstack/react-router";

import salePoint from "../../assets/images/salepoint.png";
import imgJumia from "../../assets/images/imgjumia.png";
import imgTepeci from "../../assets/images/imgtepeci.png";
//import librairieFrance from "../../../assets/images/librairieFrance.jpg";


export const Route = createFileRoute("/_home/salePoint")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="flex flex-col items-center text-center mb-12">
          <img
            src={salePoint}
            alt="Points de vente"
            className="mb-6 h-24 w-auto object-contain"
          />
        </div>

        {/* Section Boutique en ligne */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-[#D68E54] mb-8 font-waffle-soft">
            Boutique en ligne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Carte Jumia */}
            <a
              href="https://www.jumia.ci"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={imgJumia}
                    alt="Jumia Côte d'Ivoire"
                    className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Jumia CI
                </h3>
                <p className="text-gray-600 mb-4">
                  Achetez nos produits TOPECI sur la plus grande plateforme
                  e-commerce de Côte d'Ivoire
                </p>
                <div className="bg-orange-50 text-orange-600 py-2 px-4 rounded-lg text-sm font-medium">
                  Livraison partout en Côte d'Ivoire
                </div>
              </div>
            </a>

            {/* Carte Boutique TOPECI */}
            <a
              href="https://www.topeci.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={imgTepeci}
                    alt="Boutique TOPECI"
                    className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Boutique TOPECI
                </h3>
                <p className="text-gray-600 mb-4">
                  Commandez directement sur notre boutique officielle avec
                  livraison internationale
                </p>
                <div className="bg-[#74C6C6] bg-opacity-20 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  Livraison mondiale
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Section Points de vente physiques */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-[#D68E54] mb-8 font-waffle-soft">
            Points de vente physiques
          </h2>
          
        </div>

        

        {/* Section Informations supplémentaires */}
        <div className="bg-[#4E6FA7] bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-6 font-waffle-soft">
            Informations importantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">🛒 Commandes en ligne</h4>
              <ul className="text-sm space-y-1">
                <li>• Paiement sécurisé par carte bancaire</li>
                <li>• Livraison sous 2-5 jours ouvrés</li>
                <li>• Suivi de commande disponible</li>
                <li>• Service client réactif</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                🏪 Points de vente physiques
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Paiement en espèces et mobile money</li>
                <li>• Produits disponibles immédiatement</li>
                <li>• Conseils personnalisés en magasin</li>
                <li>• Horaires variables selon les fêtes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous avez des questions sur nos points de vente ?
          </p>
          <a
            href="https://wa.me/2250700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            📱 Nous contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
