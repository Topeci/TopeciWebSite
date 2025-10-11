/**
 * La page "Profil"
 * Espace :Nom, Prénom, Email
 * fontionnalité : Modifier le profil (illustrer par l'icone stylo), un dialog avec l'arriere plan transparent
 * et une petite note sur le formulaire "Cette adresse e-mail est utilisée pour la connexion et les mises à jour des commandes."
 * bouton annuler et enregistrer
 *
 * Espace : Adresses
 * Adresses par défaut cote d'ivoire :
 * ajouter l'adresse : cliquer (ceci est mon adresse par défaut)
 * modifier l'adresse :
 * - (pays/région : NB: selection de tout les pays de A-Z)
 * - prénom , nom, entreprise, adresse, appartement (facultatif), code postal, ville, télphone(indicatif, choix du pays)
 * lien supprimer, annuler, bouton enregister
 */

import { createFileRoute } from "@tanstack/react-router";

import { HeaderDashboard } from "../../components/layout/headerDashboard";
import { FooterDashboard } from "../../components/layout/footerDashboard";



export const Route = createFileRoute("/dashboard/commande")({
  component: RouteComponent,
});



function RouteComponent() {
  
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderDashboard />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <h2 className="font-bold text-2xl md:text-3xl font-waffle-soft mb-6 md:mb-8 text-[#BE356A]">
          Commandes
        </h2>
      </main>

      <FooterDashboard />


      
    </div>
  );
}
