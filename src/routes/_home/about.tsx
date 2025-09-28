/**
 * Page À propos de TOPECI

 */

import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

import education from "../../assets/images/education.jpg";
import bookTopeci from "../../assets/images/booktopeci.jpg";
import jeanMarc from "../../assets/images/jeanmarc.jpg";
import cindyOrnella from "../../assets/images/ornella.jpg";
import parisKid from "../../assets/images/pariskid.jpg";
import imgMotive from "../../assets/images/imgMotive.png";

export const Route = createFileRoute("/_home/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Notre Histoire Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col items-center text-center px-3 mt-[-40px]">
          <img
            src={imgMotive}
            alt="Jouet Fière"
            className="mb-4 h-20 w-auto sm:h-32 md:h-40 lg:h-48 object-contain"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-waffle-soft text-[#D68E54] mb-6 ">
                NOTRE HISTOIRE
              </h2>
              <div className="space-y-6 text-black dark:text-gray-200 text-lg leading-relaxed font-glacial-indifference">
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
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] h-64 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={education}
                  alt="Image Ministre de l'éducation"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D68E54] mb-6 font-waffle-soft ">
              Notre Mission
            </h2>
            <p className="text-xl text-black dark:text-gray-200 font-indie-flower leading-relaxed">
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
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-waffle-soft">
                Éducation Ludique
              </h3>
              <p className="text-black dark:text-gray-200 font-indie-flower">
                Des livres audio interactifs pour apprendre en s'amusant
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#BE356A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-waffle-soft">
                Culture Africaine
              </h3>
              <p className="text-black dark:text-gray-200 font-indie-flower">
                Préservation des langues et traditions locales
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#D68E54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#BE356A] mb-3 font-waffle-soft">
                Nouvelle Génération
              </h3>
              <p className="text-black dark:text-gray-200 font-indie-flower ">
                Connecter les enfants à leurs racines culturelles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Produits Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-4">
              <img
                src={bookTopeci}
                alt="Image Livre Topeci"
                className="object-cover w-full h-80 rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-gray-200 mb-6 font-waffle-soft">
                Nos Produits
              </h2>
              <div className="space-y-6 text-black dark:text-gray-200 font-indie-flower text-lg leading-relaxed">
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

      {/* Nos Valeurs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-waffle-soft text-[#D68E54] mb-6 ">
                NOS VALEURS
              </h2>
              <div className="space-y-6 text-black dark:text-gray-200 text-lg leading-relaxed font-indie-flower">
                <ul className="list-disc pl-6 space-y-3">
                  <li>Sauvegarde des cultures africaines</li>
                  <li>
                    Respect des identités plurielles – pour que chaque enfant se
                    sente vu, compris et valorisé.
                  </li>
                  <li>
                    Transmission avec douceur et authenticité – parce
                    qu’apprendre une langue, c’est aussi recevoir une histoire.
                  </li>
                  <li>
                    Inclusion, fierté, éveil – pour nourrir l’estime de soi, la
                    curiosité et le sentiment d’appartenance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] h-64 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={parisKid}
                  alt="Image Enfant Akan"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Fondateurs Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D68E54] mb-4 font-waffle-soft">
              Notre Équipe
            </h2>
            <p className="text-xl text-black dark:text-gray-200 font-indie-flower">
              Les visionnaires derrière TOPECI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fondateur 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#74C6C6] shadow-md">
                <img
                  src={jeanMarc}
                  alt="Jean-Marc Koffi"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#BE356A] mb-2 font-waffle-soft">
                Jean-Marc Koffi
              </h3>
              <p className="text-[#74C6C6] font-bold mb-4 font-glacial-indifference ">
                Co-Fondateur
              </p>
              <p className="text-black dark:text-gray-200 font-glacial-indifference ">
                Passionné par l'éducation et la technologie, Jean-Marc apporte
                son expertise pour créer des expériences d'apprentissage
                innovantes.
              </p>
            </div>

            {/* Fondateur 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#BE356A] shadow-md">
                <img
                  src={cindyOrnella}
                  alt="Cindy-Ornella Kouakou"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#BE356A] mb-2 font-waffle-soft">
                Cindy-Ornella Kouakou
              </h3>
              <p className="text-[#74C6C6] font-bold mb-4 font-glacial-indifference ">
                Co-Fondatrice
              </p>
              <p className="text-black dark:text-gray-200 font-glacial-indifference ">
                Experte en culture africaine et en développement de contenu
                éducatif, Cindy-Ornella guide notre mission culturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
              Rejoignez notre aventure
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-glacial-indifference">
              Rejoignez-nous dans cette aventure éducative et culturelle pour
              préserver, partager et célébrer l'héritage africain avec les
              générations futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#74C6C6] hover:bg-[#5fb3b3] text-white font-bold py-3 px-8 rounded-full transition duration-300 font-waffle-soft">
                Découvrir nos produits
              </button>
              <button className="border-2 border-[#74C6C6] text-[#74C6C6] hover:bg-[#74C6C6] hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 font-waffle-soft">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
