/**
 * Nous allons apporter des modifications à cette page au niveau de section VIDÉO + AVIS
 * Nous allons faire deux sections, une section vidéo et une section avis
 * La section vidéo en haut suivie de la section avis en dessous
 *
 * La section vidéo doit avoir un titre "Découvrez TOPECI en vidéo", centré, en gras, font-waffle-soft
 * n'affiche pas le texte topeci video, la video doit être dejà visible avant de cliquer sur play
 *
 *
 * La section avis doit avoir un titre "Avis Clients", centré, en gras, font-waffle-soft
 * La section avis doit être divisée en trois parties et disposée en grille de 3 colonnes sur desktop:
 * À gauche, une note moyenne en étoiles (5 étoiles) avec le nombre d'avis en dessous et une petite icone check
 * Au centre, l'histogramme des avis (5 étoiles, 4 étoiles, 3 étoiles, 2 étoiles, 1 étoile), il doit sous forme de liens qui
 * affichent les avis correspondants
 *
 * À droite, un bouton "Ecrire un avis" qui affiche un formulaire en slide-in (de la droite vers la gauche)
 *
 * Le formulaire doit contenir les éléments suivants :
 * Titre : Ecrire un avis
 * En bas : Evaluation par étoiles (5 étoiles)
 * Contenu : Un formulaire avec un champ texte pour l'avis
 * Section ajout video ou image (optionnel)
 * Nom d'affichage (texte : affiché publiquement "Marie D.")
 * Adresse Mail (texte : ne sera pas affiché publiquement)
 * Texte : Comment nous utilisons vos données : Nous vous contacterons uniquement à propos de l'avis que vous avez laissé, et seulement
 *  si nécessaire. En soumettant votre avis, vous acceptez les conditions, la politique de confidentialité.
 * bouton "soumettre l'avis" et "annuler"
 *
 * En bas de la section centrale, un lien "Voir tous les avis" qui affiche tous les avis
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import CookiesBanner from "../components/CookieBanner";

import {
  Play,
  Sparkles,
  Star,
  Check,
  Camera,
  X,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useState, useRef, useEffect } from "react";


import LivreBaoule from "../images/livrebaoule.png";
import LivreDioula from "../images/livredioula.webp";
import KidAkan from "../images/KidAkan.jpg";

import VideoTopeci from "../videos/topeci_video.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
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
  const reviews = {
    average: 4.8,
    total: 47,
    distribution: [
      { stars: 5, count: 35, percentage: 74 },
      { stars: 4, count: 8, percentage: 17 },
      { stars: 3, count: 3, percentage: 6 },
      { stars: 2, count: 1, percentage: 2 },
      { stars: 1, count: 0, percentage: 0 },
    ],
  };

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
    <div className="flex flex-col min-h-screen w-full mx-0">
      <Header />

      <main className="flex-1 w-full mx">
        {/* HERO SECTION */}
        <section className="w-full bg-gradient-to-br from-[#74C6C6] to-[#3a5a8a] py-16 md:py-20 mt-0">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="hero-text text-center md:text-left md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-[#DCCC41] mb-6 font-waffle-soft">
                Apprendre les langues africaines
                <br /> dès le plus jeune âge
              </h1>

              <ul className="hero-bullets space-y-3 mb-8">
                <li className="flex items-center text-white font-glacial-indifference">
                  <Sparkles size={20} className="mr-2 text-purple-600" />
                  Livres audio interactifs en baoulé et dioula
                </li>
                <li className="flex items-center text-white font-glacial-indifference">
                  <Sparkles size={20} className="mr-2 text-purple-600" />
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

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#74C6C6] to-[#4E6FA7] p-1 rounded-full">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl p-3">
                    <img
                      src={KidAkan}
                      alt="Kid Akan"
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
            <h2 className="text-3xl font-bold text-center text-[#4E6FA7] mb-12 font-waffle-soft">
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

        {/* SECTION VIDÉO */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[purple] mb-12 font-waffle-soft">
              Découvrez TOPECI en vidéo
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-lg ">
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
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
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

        {/* SECTION AVIS CLIENTS */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#4E6FA7] mb-2 font-waffle-soft">
              Avis Clients
            </h2>

            <div className="bg-white rounded-xl p-3 shadow-md mb-5">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Colonne gauche - Note moyenne */}
                <div className="text-center p-4 border-r border-gray-100 last:border-r-0">
                  <div className="text-3xl font-bold text-[#4E6FA7] mb-4">
                    {reviews.average}
                  </div>
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className={
                          star <= Math.floor(reviews.average)
                            ? "text-yellow-400 fill-current mx-1"
                            : "text-gray-300 mx-1"
                        }
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span className="text-lg">{reviews.total} avis</span>
                  </div>
                </div>

                {/* Colonne centrale - Histogramme */}
                <div className="p-3 border-r border-gray-100 last:border-r-0">
                  <div className="space-y-0 ">
                    {reviews.distribution.map((item) => (
                      <button
                        key={item.stars}
                        className="flex items-center w-full p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() =>
                          console.log(`Filtrer les avis ${item.stars} étoiles`)
                        }
                      >
                        <div className="w-16 text-sm font-semibold text-gray-700">
                          {item.stars} étoiles
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                          <div
                            className="bg-[#74C6C6] h-2 rounded-full transition-all duration-300 group-hover:bg-[#5fb3b3]"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-16 text-sm text-gray-600 text-right">
                          ({item.count})
                        </div>
                      </button>
                    ))}
                  </div>
                  <button className="w-full mt-0 text-[#74C6C6] hover:text-[#5fb3b3] font-semibold transition-colors text-center">
                    Voir tous les avis →
                  </button>
                </div>

                {/* Colonne droite - Bouton écrire un avis */}
                <div className="text-center p-2">
                  <div className="flex flex-col justify-center items-center h-full">
                    <button
                      onClick={() => setShowReviewForm(true)}
                      className="bg-[#D68E54] hover:bg-[#c57f4a] text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                    >
                      Écrire un avis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avis récents */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6">Avis récents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(showAllReviews
                  ? sampleReviews
                  : sampleReviews.slice(0, 2)
                ).map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 bg-[#74C6C6] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                        {review.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{review.author}</h4>
                            <p className="text-sm text-gray-500">
                              {review.location}
                            </p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={16}
                                className={
                                  star <= review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mt-2">{review.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(review.date).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {sampleReviews.length > 4 && (
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="flex items-center justify-center w-full mt-6 text-[#74C6C6] hover:text-[#5fb3b3] transition-colors font-semibold"
                >
                  {showAllReviews ? (
                    <>
                      <ChevronUp size={20} className="mr-2" />
                      Voir moins d'avis
                    </>
                  ) : (
                    <>
                      <ChevronDown size={20} className="mr-2" />
                      Voir tous les avis ({sampleReviews.length})
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* BANNIÈRE VIOLET SECTION */}
        <section className="w-full py-8 bg-white">
          <div className="max-w-2xl mx-auto px-8">
            <div className="bg-[#800080] rounded-3xl py-8 px-6 text-center">
              <div className="text-xl font-bold text-white mb-3 font-waffle-soft">
                TOPECI Openclassroom arrive bientôt !
              </div>
              <div className="text-base text-white mb-6 font-glacial-indifference">
                Une appli pour apprendre de façon ludique.
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