import { useState } from "react";

export function FooterDashboard() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const legalContent = {
    refund: {
      title: "Politique de Remboursement",
      content: `Chez TOPECI, nous nous engageons à votre satisfaction. Si vous n'êtes pas entièrement satisfait de votre achat, vous pouvez demander un remboursement sous 14 jours suivant la réception de votre commande.

Conditions de remboursement :
• Les produits doivent être retournés dans leur état d'origine
• L'emballage doit être intact
• Les produits numériques ne sont pas remboursables
• Les frais de retour sont à la charge du client

Pour initier un remboursement, contactez notre service client.`,
    },
    privacy: {
      title: "Politique de Confidentialité",
      content: `TOPECI s'engage à protéger vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.

Données collectées :
• Informations de contact (nom, email, téléphone)
• Adresses de livraison et facturation
• Historique des commandes
• Données de navigation (cookies)

Vos droits :
• Accès à vos données personnelles
• Rectification des informations
• Suppression de votre compte
• Opposition au traitement

Pour exercer vos droits, contactez notre DPO.`,
    },
    terms: {
      title: "Conditions Générales de Vente",
      content: `Les présentes conditions régissent l'utilisation de la boutique en ligne TOPECI.

Acceptation des conditions :
En passant commande, vous acceptez sans réserve les présentes CGV.

Prix et paiement :
• Les prix sont en FCFA et TTC
• Paiement sécurisé par carte bancaire ou mobile money
• La commande est validée après paiement confirmé

Livraison :
• Délai de livraison : 2-5 jours ouvrés
• Zones de livraison : Côte d'Ivoire et international
• Suivi de commande disponible`,
    },
    legal: {
      title: "Mentions Légales",
      content: `TOPECI Shop
Société par Actions Simplifiée (SAS)
Capital social : 10 000 000 FCFA
RCCM : CI-ABJ-2023-B-12345
N° d'identification fiscale : 12345678Z

Siège social :
Plateau, Rue des Commerce
Immeuble Les Pyramides
01 BP 1234 Abidjan 01
Côte d'Ivoire

Email : contact@topecishop.com
Téléphone : +225 27 20 21 22 23

Directeur de publication : Jean-Marc KOFFI
Hébergeur : AWS Africa (Cape Town)`,
    },
    contact: {
      title: "Coordonnées",
      content: `Service Client TOPECI

📞 Support téléphonique :
+225 27 20 21 22 23
(Lun-Ven: 8h-18h, Sam: 9h-13h)

📧 Email :
contact@topecishop.com
support@topecishop.com

📍 Adresse physique :
Plateau, Rue des Commerce
Immeuble Les Pyramides
01 BP 1234 Abidjan 01
Côte d'Ivoire

🕒 Horaires d'ouverture :
Lundi - Vendredi : 8h00 - 18h00
Samedi : 9h00 - 13h00
Dimanche : Fermé`,
    },
  };

  const closeDialog = () => setOpenDialog(null);

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Liens principaux */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Informations</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => setOpenDialog("refund")}
                    className="hover:text-[#DCCC41] transition-colors text-left"
                  >
                    Politique de remboursement
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenDialog("privacy")}
                    className="hover:text-[#DCCC41] transition-colors text-left"
                  >
                    Politique de confidentialité
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenDialog("terms")}
                    className="hover:text-[#DCCC41] transition-colors text-left"
                  >
                    Conditions générales de vente
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => setOpenDialog("legal")}
                    className="hover:text-[#DCCC41] transition-colors text-left"
                  >
                    Mentions légales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenDialog("contact")}
                    className="hover:text-[#DCCC41] transition-colors text-left"
                  >
                    Coordonnées
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold mb-4">TOPECI Shop</h3>
              <p className="text-sm text-gray-300 mb-4">
                Votre boutique en ligne de produits culturels et éducatifs
                africains.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCCC41] transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCCC41] transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCCC41] transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 TOPECI Shop. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <div className="w-6 h-6 bg-gradient-to-br from-[#D68E54] to-[#DCCC41] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <span className="text-sm text-gray-400">Proudly African</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialog pour le contenu légal */}
      {openDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {legalContent[openDialog as keyof typeof legalContent].title}
                </h3>
                <button
                  onClick={closeDialog}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {
                    legalContent[openDialog as keyof typeof legalContent]
                      .content
                  }
                </pre>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeDialog}
                  className="px-6 py-2 bg-[#D68E54] hover:bg-[#DCCC41] text-white rounded-lg font-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
