/**
 * 

Charte graphique : 
blanc
vert vif #DCCC41
Magenta #BE356A
Bleu #4E6FA7
Bleu cian #74C6C6
Orange #D68E54

Police d'écriture : Indie flower, Waffle soft, Glacial Indifference
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Play, Sparkles, Truck, MessageCircle, Star } from "lucide-react";
import KidTopeci from "../images/kidtopeci.png";
import LivreBaoule from "../images/livrebaoule.png";
import { Button } from "../components/ui/button";
import LivreDioula from "../images/livredioula.webp";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col max-h-screen w-full">
      <Header />

      {/* Suppression de absolute et ajout de flex-1 pour que main prenne l'espace disponible */}
      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        <section className="w-full bg-gradient-to-br from-[#74C6C6] to-[#3a5a8a] py-16 md:py-20 mt-0">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="hero-text text-center md:text-left md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-[#DCCC41] mb-6 font-['Waffle_soft']">
                Apprendre les langues africaines
                <br /> dès le plus jeune âge
              </h1>

              <ul className="hero-bullets space-y-3 mb-8">
                <li className="flex items-center text-white font-['Glacial_Indifference']">
                  <Sparkles size={20} className="mr-2 text-purple-600" />
                  Livres audio interactifs en baoulé et dioula
                </li>
                <li className="flex items-center text-white font-['Glacial_Indifference']">
                  <Sparkles size={20} className="mr-2 text-purple-600" />
                  Enrichis avec voix, chants et illustrations animées
                </li>
              </ul>

              <Link
                to="/livres"
                className="inline-block bg-[#D68E54] hover:bg-[#c57f4a] text-white font-bold py-3 px-8 rounded-full transition duration-300 font-['Waffle_soft'] shadow-lg"
              >
                Découvrir nos livres
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-70 h-70 md:w-86 md:h-86 bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] p-1 rounded-full">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl p-3">
                    <img
                      src={KidTopeci}
                      alt="Kid Topeci"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-[#BE356A] text-white p-3 rounded-full shadow-xl">
                  <Star size={32} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOUTIQUE SECTION */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#4E6FA7] mb-12 font-['Waffle_soft']">
              Notre Boutique
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={LivreBaoule}
                    alt="Mon Premier Livre Audio Baoulé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#BE356A] mb-3 min-h-[3rem] flex items-center">
                    Mon Premier Livre Audio
                  </h3>
                  <p className="text-blue-500 mb-2 font-bold text-lg">BAOULÉ</p>
                  <p className="text-gray-600 mb-6 font-bold text-xl">
                    8000 CFA
                  </p>
                  <div className="mt-auto">
                    <Button className="w-full text-white bg-[#74C6C6] hover:bg-[#5fb3b3] font-medium py-3 px-6 rounded-full transition duration-300">
                      Voir le livre
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={LivreDioula}
                    alt="Mon Premier Livre Audio Dioula"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#BE356A] mb-3 min-h-[3rem] flex items-center">
                    Mon Premier Livre Audio
                  </h3>
                  <p className="text-blue-500 mb-2 font-bold text-lg">DIOULA</p>
                  <p className="text-gray-600 mb-6 font-bold text-xl">
                    8000 CFA
                  </p>
                  <div className="mt-auto">
                    <Button className="w-full text-white bg-[#74C6C6] hover:bg-[#5fb3b3] font-medium py-3 px-6 rounded-full transition duration-300">
                      Voir le livre
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={LivreBaoule}
                    alt="Contes Africains Baoulé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#BE356A] mb-3 min-h-[3rem] flex items-center">
                    Contes Africains
                  </h3>
                  <p className="text-blue-500 mb-2 font-bold text-lg">BAOULÉ</p>
                  <p className="text-gray-600 mb-6 font-bold text-xl">
                    3000 CFA
                  </p>
                  <div className="mt-auto">
                    <Button className="w-full text-white bg-[#74C6C6] hover:bg-[#5fb3b3] font-medium py-3 px-6 rounded-full transition duration-300">
                      Voir le livre
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDÉO + AVIS SECTION */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="video-card bg-gray-100 rounded-2xl p-6 shadow-md">
                <div className="video-thumb bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] h-64 rounded-xl flex items-center justify-center relative mb-6">
                  <button
                    aria-label="Lire la vidéo"
                    className="play-btn bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <Play size={32} className="text-[#74C6C6] ml-1" />
                  </button>
                </div>
                <p className="note text-gray-700 mb-6 text-lg font-['Glacial_Indifference']">
                  <span className="text-[#BE356A] font-bold">
                    🔥 TOPECI Open Classroom arrive bientôt !
                  </span>
                  <br />
                  Une appli pour apprendre de façon ludique.
                </p>
                <Link
                  to="/newsletter"
                  className="inline-block border-2 border-[#74C6C6] text-[#74C6C6] hover:bg-[#74C6C6] hover:text-white font-medium py-2 px-6 rounded-full transition duration-300"
                >
                  Inscrivez-vous pour être informé
                </Link>
              </div>

              <div className="quotes">
                <div className="bg-[#74C6C6] bg-opacity-10 p-6 rounded-2xl mb-6">
                  <blockquote className="text-gray-700 italic text-lg">
                    "Ma fille ne lâche plus son livre TOPECI, elle apprend le
                    baoulé avec plaisir !"
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 bg-[#74C6C6] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      A
                    </div>
                    <div>
                      <p className="font-medium">Amandine K.</p>
                      <p className="text-sm text-gray-500">
                        Abidjan, Côte d'Ivoire
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D68E54] bg-opacity-10 p-6 rounded-2xl mb-8">
                  <blockquote className="text-gray-700 italic text-lg">
                    "Tonton, ce livre est tellement précieux que je le lis à mon
                    chevet..."
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 bg-[#D68E54] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      M
                    </div>
                    <div>
                      <p className="font-medium">Michel D.</p>
                      <p className="text-sm text-gray-500">Paris, France</p>
                    </div>
                  </div>
                </div>

                <ul className="perks space-y-4">
                  <li className="flex items-center">
                    <div className="bg-[#74C6C6] p-2 rounded-full mr-3">
                      <Truck size={20} className="text-white" />
                    </div>
                    <span className="text-gray-700">
                      Livraison rapide en Côte d'Ivoire et à l'international
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#74C6C6] p-2 rounded-full mr-3">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <span className="text-gray-700">
                      Assistance client Whatsapp et email
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BANNIÈRE VIOLET SECTION */}
        <section className="w-full py-8">
          <div className="max-w-2xl mx-auto px-8">
            <div className="bg-[#800080] rounded-3xl py-8 px-6 text-center">
              <div className="text-xl font-bold text-white mb-3 font-['Waffle_soft']">
                TOPECI Openclassroom arrive bientôt !
              </div>
              <div className="text-base text-white mb-6 font-['Glacial_Indifference']">
                Une appli pour apprendre de façon ludique.
              </div>
              <Button
                //to="/openclassroom"
                className="inline-block bg-white text-[#74C6C6] hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition duration-300 font-['Waffle_soft']"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/*

// Icônes supplémentaires nécessaires
function BookOpen(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function Headphones(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function Package(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
**/