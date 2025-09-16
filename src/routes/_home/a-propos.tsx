/**
 * Page À propos de TOPECI
 * Description de l'entreprise TOPECI
 * Nom des fondateurs : Jean-Marc Koffi et Cindy-Ornella Kouakou
 * Des zones sur la page pour insérer des photos liées aux produits et à l'équipe
 */

import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, BookOpen, Globe} from "lucide-react";
import education from "../../images/education.jpg";
import kidTopeci from "../../images/kidtopeci.png";
import bookTopeci from "../../images/bookTopeci.jpg";


export const Route = createFileRoute("/_home/a-propos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${kidTopeci})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#74C6C6]/40 via-[#4E6FA7]/40 to-[#3a5a8a]/40"></div>

        {/* Contenu */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-waffle-soft">
            À propos de TOPECI
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto font-glacial-indifference">
            Passionnés par la préservation et la promotion de l'identité
            culturelle africaine
          </p>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-['Waffle_soft']">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-gray-700 font-['Glacial_Indifference'] text-lg leading-relaxed">
                <p>
                  Fondée en{" "}
                  <span className="text-[#BE356A] font-bold">2024</span>, TOPECI
                  est née de la volonté de combler un besoin crucial :
                  reconnecter les enfants aux langues, aux coutumes et aux
                  traditions de l'Afrique.
                </p>
                <p>
                  Chez TOPECI, nous sommes passionnés par la préservation et la
                  promotion de l'identité culturelle africaine à travers
                  l'éducation ludique et immersive.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="bg-[#74C6C6] p-3 rounded-full">
                    <Heart className="text-white" size={24} />
                  </div>
                  <span className="text-[#4E6FA7] font-bold">
                    Fondée avec passion en 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] h-64 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <img src={education} alt="Image Ministre de l'éducation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-['Waffle_soft']">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-700 font-['Glacial_Indifference'] leading-relaxed">
              Notre mission est de créer des outils éducatifs innovants qui
              permettent aux plus jeunes de découvrir et d'apprécier la richesse
              culturelle de la Côte d'Ivoire et du continent africain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#74C6C6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-['Waffle_soft']">
                Éducation Ludique
              </h3>
              <p className="text-gray-600 font-['Glacial_Indifference']">
                Des livres audio interactifs pour apprendre en s'amusant
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#BE356A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-['Waffle_soft']">
                Culture Africaine
              </h3>
              <p className="text-gray-600 font-['Glacial_Indifference']">
                Préservation des langues et traditions locales
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#D68E54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-['Waffle_soft']">
                Nouvelle Génération
              </h3>
              <p className="text-gray-600 font-['Glacial_Indifference']">
                Connecter les enfants à leurs racines culturelles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Produits Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <img src={bookTopeci} alt="Image Livre Topeci" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-['Waffle_soft']">
                Nos Produits
              </h2>
              <div className="space-y-6 text-gray-700 font-['Glacial_Indifference'] text-lg leading-relaxed">
                <p>
                  À travers{" "}
                  <span className="text-[#BE356A] font-bold">
                    "mon premier livre audio"
                  </span>
                  , nous facilitons l'apprentissage des langues locales telles
                  que le{" "}
                  <span className="text-[#74C6C6] font-bold">Baoulé</span> et le{" "}
                  <span className="text-[#74C6C6] font-bold">Dioula</span>.
                </p>
                <p>
                  Nous offrons des histoires captivantes et des activités
                  éducatives qui éveillent la curiosité et stimulent l'esprit
                  créatif des enfants.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="bg-[#DCCC41] p-3 rounded-full">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <span className="text-[#4E6FA7] font-bold">
                    Baoulé & Dioula
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Fondateurs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-['Waffle_soft']">
              Nos Fondateurs
            </h2>
            <p className="text-xl text-gray-700 font-['Glacial_Indifference']">
              Les visionnaires derrière TOPECI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fondateur 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-white text-center">
                  <Users size={48} />
                  <p className="text-sm font-['Indie_Flower'] mt-2">
                    [Photo JM]
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#BE356A] mb-2 font-['Waffle_soft']">
                Jean-Marc Koffi
              </h3>
              <p className="text-[#74C6C6] font-bold mb-4 font-['Glacial_Indifference']">
                Co-Fondateur
              </p>
              <p className="text-gray-600 font-['Glacial_Indifference']">
                Passionné par l'éducation et la technologie, Jean-Marc apporte
                son expertise pour créer des expériences d'apprentissage
                innovantes.
              </p>
            </div>

            {/* Fondateur 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-[#BE356A] to-[#D68E54] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-white text-center">
                  <Users size={48} />
                  <p className="text-sm font-['Indie_Flower'] mt-2">
                    [Photo CO]
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#BE356A] mb-2 font-['Waffle_soft']">
                Cindy-Ornella Kouakou
              </h3>
              <p className="text-[#74C6C6] font-bold mb-4 font-['Glacial_Indifference']">
                Co-Fondatrice
              </p>
              <p className="text-gray-600 font-['Glacial_Indifference']">
                Experte en culture africaine et en développement de contenu
                éducatif, Cindy-Ornella guide notre mission culturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16 bg-gradient-to-r from-[#74C6C6] to-[#4E6FA7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Waffle_soft']">
              Nos Valeurs
            </h2>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-600 font-['Glacial_Indifference'] leading-relaxed mb-6">
                Chez TOPECI, nous sommes engagés dans la{" "}
                <span className="font-bold text-[#DCCC41]">diversité</span> et
                l'<span className="font-bold text-[#DCCC41]">inclusion</span>.
                Nous croyons que chaque enfant a le droit de s'épanouir dans sa
                propre culture et de s'ouvrir au monde qui l'entoure.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <Heart className="text-red-400" size={24} />
                </div>
                <span className="text-[#BE356A] font-bold text-lg font-waffle-soft">
                  Diversité • Inclusion • Culture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-['Waffle_soft']">
              Rejoignez notre aventure
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-['Glacial_Indifference']">
              Rejoignez-nous dans cette aventure éducative et culturelle pour
              préserver, partager et célébrer l'héritage africain avec les
              générations futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#74C6C6] hover:bg-[#5fb3b3] text-white font-bold py-3 px-8 rounded-full transition duration-300 font-['Waffle_soft']">
                Découvrir nos produits
              </button>
              <button className="border-2 border-[#74C6C6] text-[#74C6C6] hover:bg-[#74C6C6] hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 font-['Waffle_soft']">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
