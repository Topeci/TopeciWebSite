/**
 * Nous allons apporter des modifications importantes au niveau de Hero Section
 * elle aura une image en arriere plan import kidTopeci from "../../images/kidtopeci.png";
 * et le texte actuel sera conservé avec le bouton "Découvrir nos livres"
 * le cercle avec l'enfant sera supprimé et l'etoile supra supprimée aussi
 *
 * la section boutique
 * un titre "NOS JOUETS" en font-waffle-soft
 * sous-titre "Qui nous rendent fiers" en font-indie-flower
 * les 3 carte simple sans ombre le texte en noir centré et le prix centré en gras
 * le bouton ajouter au panier en bas de chaque carte en #DCCC41 bg avec hover #c4b33c
 *
 * la section video
 * titre "DECOUVRE NOS JOUETS" en font-waffle-soft
 * sous-titre "en vidéo " en font-indie-flower
 *
 * la section avis clients
 * titre "VOS TEMOIGNAGES" en font-waffle-soft
 * sous-titre "Nous motivent !" en font-indie-flower
 * un menu deroulant horizontal qui affichera toutes les captures photo des temoignages
 * un bouton "Écrire un avis" en #D68E54 bg avec hover #c57f4a
 *
 * La section Nos engagements
 * titre "NOS ENGAGEMENTS" en font-waffle-soft
 * sous-titre "Toujours plus proche de vous" en font-indie-flower
 * 3 cercles avec des icones et texte en dessous
 * icone 1 : livraison , texte : Livraison partout dans le monde
 * icone 2 :  , texte : Paiement securisé
 * icone 3 : store, texte : Nos points de vente
 * icone 4 : , texte : Assistance client whatsapp / email
 *
 * La section TOPECI OPEN CLASSROOM
 * sous-titre : Bientot, une application pour apprendre de facon ludique
 *
 * NB: Evite le degradé from-[#74C6C6] to-[#3a5a8a] utilise les couleurs uniforme de la charte graphique
 * garde à l'esprit que le site doit etre ludique, coloré et enfantin
 *  */

import { createFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import CookiesBanner from "../components/CookieBanner";

import {
  Play,
  Sparkles,
  Star,
  //Check,
  Camera,
  X,
  //ChevronDown,
  //ChevronUp,
  Send,
  Truck,
  CreditCard,
  Store,
  MessageCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useState, useRef, useEffect } from "react";

import livreBaoule from "../images/livrebaoule.png";
import livreDioula from "../images/livredioula.webp";
import kidTopeci from "../images/kidtopeci.png";

import VideoTopeci from "../videos/topeci_video.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  // const [showAllReviews, setShowAllReviews] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fermer le formulaire en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowReviewForm(false);
      }
    };

    if (showReviewForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showReviewForm]);

  // Données d'avis fictifs
  /* const reviews = {
    average: 4.8,
    total: 47,
    distribution: [
      { stars: 5, count: 35, percentage: 74 },
      { stars: 4, count: 8, percentage: 17 },
      { stars: 3, count: 3, percentage: 6 },
      { stars: 2, count: 1, percentage: 2 },
      { stars: 1, count: 0, percentage: 0 },
    ],
  };*/

  const sampleReviews = [
    {
      id: 1,
      author: "Amandine K.",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      comment:
        "Ma fille ne lâche plus son livre TOPECI, elle apprend le baoulé avec plaisir !",
      date: "2024-01-15",
    },
    {
      id: 2,
      author: "Michel D.",
      location: "Paris, France",
      rating: 4,
      comment:
        "Tonton, ce livre est tellement précieux que je le lis à mon chevet...",
      date: "2024-01-10",
    },
    {
      id: 3,
      author: "Sophie T.",
      location: "Lyon, France",
      rating: 5,
      comment: "Excellente qualité et contenu éducatif. Mes enfants adorent!",
      date: "2024-01-08",
    },
    {
      id: 4,
      author: "Jean M.",
      location: "Dakar, Sénégal",
      rating: 5,
      comment:
        "Une excellente initiative pour préserver nos langues africaines.",
      date: "2024-01-05",
    },
    {
      id: 5,
      author: "Fatou D.",
      location: "Bamako, Mali",
      rating: 4,
      comment: "Très bon produit, je recommande vivement !",
      date: "2024-01-03",
    },
  ];

  const ReviewForm = () => (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex justify-end">
      <div
        ref={formRef}
        className="bg-gray-50 h-full w-full max-w-md transform transition-transform duration-300 ease-in-out"
        style={{
          transform: showReviewForm ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#4E6FA7] font-waffle-soft">
              Écrire un avis
            </h3>
            <button
              onClick={() => setShowReviewForm(false)}
              className="text-gray-500 hover:text-gray-700 p-2 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700">
              Évaluation *
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="text-3xl focus:outline-none transition-transform hover:scale-110"
                >
                  {star <= (hoverRating || rating) ? (
                    <Star className="text-yellow-400 fill-current" />
                  ) : (
                    <Star className="text-gray-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700">
              Votre avis *
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent resize-none"
              rows={5}
              placeholder="Partagez votre expérience avec nos produits..."
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700">
              Ajouter une photo ou vidéo (optionnel)
            </label>
            <label className="flex flex-col items-center text-[#74C6C6] p-4 border-2 border-dashed border-[#74C6C6] rounded-lg cursor-pointer hover:bg-opacity-10 transition-colors">
              <Camera size={24} className="mb-2" />
              <span className="text-center">Cliquer pour ajouter un média</span>
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    console.log("Fichier sélectionné:", e.target.files[0].name);
                    // Ici vous pouvez gérer l'upload du fichier
                  }
                }}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700">
              Nom d'affichage *
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
              placeholder="Marie D."
              required
            />
            <p className="text-sm text-gray-500 mt-2">Affiché publiquement</p>
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700">
              Adresse Mail *
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
              placeholder="votre@email.com"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Ne sera pas affiché publiquement
            </p>
          </div>

          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Comment nous utilisons vos données :</strong> Nous vous
              contacterons uniquement à propos de l'avis que vous avez laissé,
              et seulement si nécessaire. En soumettant votre avis, vous
              acceptez les{" "}
              <Link
                to="/terms"
                className="text-[#74C6C6] hover:text-[#5fb3b3] underline"
                onClick={(e) => e.stopPropagation()}
              >
                conditions d'utilisation
              </Link>{" "}
              et la{" "}
              <Link
                to="/privacy"
                className="text-[#74C6C6] hover:text-[#5fb3b3] underline"
                onClick={(e) => e.stopPropagation()}
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#D68E54] hover:bg-[#c57f4a] text-white py-3 px-6 rounded-lg transition-colors font-semibold flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Soumettre
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-full mx-0 text-brown-800 ">
      <Header />

      <main className="flex-1 w-full mx">
        {/* HERO SECTION - MODIFIÉE */}
        <section
          className="w-full py-16 md:py-20 mt-0 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${kidTopeci})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-7xl md:text-5xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
                Apprendre, <br />
                Jouer <br />
                et grandir <br />
                dans la culture africaine
              </h1>

              <ul className="hero-bullets space-y-3 mb-8">
                <li className="flex items-center text-white font-bold font-glacial-indifference">
                  <Sparkles size={20} className="mr-2 text-[#DCCC41]" />
                  Livres audio interactifs en baoulé et dioula
                </li>
                <li className="flex items-center text-white font-bold font-glacial-indifference">
                  <Sparkles size={20} className="mr-2 text-[#DCCC41]" />
                  Enrichis avec voix, chants et illustrations animées
                </li>
              </ul>

              <Link
                to="/boutique"
                className="inline-block bg-[#D68E54] hover:bg-[#c57f4a] text-white font-extrabold py-3 px-8 rounded-full transition duration-300 font-waffle-soft shadow-lg"
              >
                Découvrir nos livres
              </Link>
            </div>
          </div>
        </section>

        {/* BOUTIQUE SECTION - MODIFIÉE */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-black mb-2 font-waffle-soft">
              NOS JOUETS
            </h2>
            <p className="text-center text-black mb-12 font-indie-flower text-lg">
              Qui rendent fiers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col border border-gray-200 h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={livreBaoule}
                    alt="Mon Premier Livre Audio Baoulé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-lg  text-black mb-2">
                    Mon Premier Livre Audio <br />
                    Baoulé - Francais
                  </h3>
                  <p className="text-black mb-3 font-bold text-lg">
                    15 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-2 px-4 rounded-full transition duration-300 text-sm uppercase">
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col border border-gray-200 h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={livreDioula}
                    alt="Mon Premier Livre Audio Dioula"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-lg text-black mb-2">
                    Mon Premier Livre Audio <br />
                    Dioula - Francais
                  </h3>
                  <p className="text-black mb-3 font-bold text-lg">
                    15 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-2 px-4 rounded-full transition duration-300 text-sm uppercase">
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col border border-gray-200 h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={livreBaoule}
                    alt="Mes cartes parlantes Bété"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-lg text-black mb-2">
                    Mes cartes parlantes <br />
                    Bété - Francais
                  </h3>
                  <p className="text-black mb-3 font-bold text-lg">
                    10 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-2 px-4 rounded-full transition duration-300 text-sm uppercase">
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION VIDÉO - MODIFIÉE */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-black mb-2 font-waffle-soft mt-[-25px]">
              DÉCOUVRE NOS JOUETS
            </h2>
            <p className="text-center text-black mb-5  font-indie-flower text-xl">
              en vidéo
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-auto max-h-96 object-cover"
                  onClick={togglePlay}
                  muted
                  playsInline
                >
                  <source src={VideoTopeci} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Overlay de contrôle */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="bg-white bg-opacity-90 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                    >
                      <Play size={40} className="text-[#74C6C6] ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION AVIS CLIENTS - MODIFIÉE */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-black mb-2 font-waffle-soft">
              VOS TEMOIGNAGES
            </h2>
            <p className="text-center text-black mb-12 font-indie-flower text-xl">
              Nous motivent !
            </p>

            {/* Menu déroulant horizontal des témoignages */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-4 pb-4">
                {sampleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4 border border-gray-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#74C6C6] rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">
                          {review.author}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={
                            star <= review.rating
                              ? "text-yellow-400 fill-current mr-1"
                              : "text-gray-300 mr-1"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton Écrire un avis */}
            <div className="text-center">
              <button
                onClick={() => setShowReviewForm(true)}
                className="bg-[#D68E54] hover:bg-[#c57f4a] text-white font-semibold py-3 px-8 rounded-full transition duration-300"
              >
                Écrire un avis
              </button>
            </div>
          </div>
        </section>

        {/* SECTION NOS ENGAGEMENTS - AJOUTÉE */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-black mb-2 font-waffle-soft">
              NOS ENGAGEMENTS
            </h2>
            <p className="text-center text-black mb-12 font-indie-flower text-xl">
              Toujours plus proche de vous
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Engagement 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={40} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Livraison partout <br />
                  dans le monde
                </h3>
              </div>

              {/* Engagement 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={40} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">
                  Paiement sécurisé
                </h3>
              </div>

              {/* Engagement 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store size={40} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Nos points de <br />
                  vente
                </h3>
              </div>

              {/* Engagement 4 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={40} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Assistance client <br />
                  WhatsApp / Email
                </h3>
                <p className="text-gray-600"></p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TOPECI OPEN CLASSROOM - MODIFIÉE */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto bg-[#c2326c] rounded-3xl py-8 px-6">
              <div className="text-xl font-bold  mb-3 font-waffle-soft">
                TOPECI Openclassroom arrive bientôt !
              </div>
              <div className="text-base mb-6 font-indie-flower">
                Bientôt, une application pour apprendre de façon ludique
              </div>
              <Button className="inline-block bg-white text-[#74C6C6] hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition duration-300 font-waffle-soft">
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
      </main>

      {showReviewForm && <ReviewForm />}
      <CookiesBanner />
      <Footer />
    </div>
  );
}
