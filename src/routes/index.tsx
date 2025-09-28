import { createFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import CookiesBanner from "../components/layout/CookieBanner";

import {
  Play,
  Sparkles,
  Star,
  Camera,
  X,
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
import jouetFiere from "../images/jouetFiere.png";
import imgVideo from "../images/imgVideo.png";
import imgAvis from "../images/imgavis.png";
import imgEngagement from "../images/imgengagement.png";

import VideoTopeci from "../videos/topeci_video.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Défilement automatique des avis
  useEffect(() => {
    if (!reviewsContainerRef.current || isPaused) return;

    const container = reviewsContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    let scrollPosition = 0;
    let direction = 1; // 1 pour droite, -1 pour gauche
    const scrollSpeed = 0.5; // pixels par frame

    const scroll = () => {
      if (!container || isPaused) return;

      scrollPosition += scrollSpeed * direction;

      // Changement de direction si on atteint les bords
      if (scrollPosition >= maxScroll) {
        scrollPosition = maxScroll;
        direction = -1;
      } else if (scrollPosition <= 0) {
        scrollPosition = 0;
        direction = 1;
      }

      container.scrollLeft = scrollPosition;

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

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
    {
      id: 6,
      author: "Paul B.",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      comment: "Produit de qualité exceptionnelle, mes enfants sont ravis !",
      date: "2024-01-20",
    },
    {
      id: 7,
      author: "Sarah T.",
      location: "Lyon, France",
      rating: 5,
      comment: "Service client excellent et livraison rapide. Merci TOPECI !",
      date: "2024-01-18",
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
    <div className="flex flex-col min-h-screen w-full mx-0 text-brown-800">
      <Header />

      <main className="flex-1 w-full mx-auto">
        {/* HERO SECTION */}
        <section
          className="w-full py-16 md:py-20 mt-0 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${kidTopeci})` }}
        >
          <div className="absolute inset-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
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

        {/* BOUTIQUE SECTION */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <img
                src={jouetFiere}
                alt="Jouet Fière"
                className="mb-4 h-24 w-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col border border-gray-200 h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={livreBaoule}
                    alt="Mon Premier Livre Audio Baoulé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Mon Premier Livre Audio <br />
                    Baoulé - Français
                  </h3>
                  <p className="text-black mb-4 font-bold text-lg">
                    15 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-3 px-4 rounded-full transition duration-300 text-sm uppercase">
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
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Mon Premier Livre Audio <br />
                    Dioula - Français
                  </h3>
                  <p className="text-black mb-4 font-bold text-lg">
                    15 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-3 px-4 rounded-full transition duration-300 text-sm uppercase">
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
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Mes cartes parlantes <br />
                    Bété - Français
                  </h3>
                  <p className="text-black mb-4 font-bold text-lg">
                    10 000 FCFA
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-[#DCCC41] hover:bg-[#c4b33c] text-black font-bold py-3 px-4 rounded-full transition duration-300 text-sm uppercase">
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION VIDÉO */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <img
                src={imgVideo}
                alt="Vidéo découverte"
                className="h-20 w-auto object-contain mb-4"
              />
            </div>

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

        {/* SECTION AVIS CLIENTS AVEC DÉFILEMENT AUTOMATIQUE */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <img
                src={imgAvis}
                alt="Témoignages"
                className="h-20 w-auto object-contain mb-4"
              />
            </div>

            {/* Conteneur des avis avec défilement automatique */}
            <div
              ref={reviewsContainerRef}
              className="relative mb-8 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex space-x-6 pb-4 min-w-max">
                {/* Dupliquer les avis pour un effet de boucle continu */}
                {[...sampleReviews, ...sampleReviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#74C6C6] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">
                          {review.author}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={
                            star <= review.rating
                              ? "text-yellow-400 fill-current mr-1"
                              : "text-gray-300 mr-1"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>

              {/* Overlay pour indiquer le défilement */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

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

        {/* SECTION NOS ENGAGEMENTS */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <img
                src={imgEngagement}
                alt="Nos Engagements"
                className="h-20 w-auto object-contain mb-4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Engagement 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Livraison partout <br />
                  dans le monde
                </h3>
              </div>

              {/* Engagement 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Paiement sécurisé
                </h3>
              </div>

              {/* Engagement 3 */}
              <a href="/salePoint" className="text-center block">
                <div className="w-20 h-20 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Nos points de <br />
                  vente
                </h3>
              </a>

              {/* Engagement 4 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#D68E54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Assistance client <br />
                  WhatsApp / Email
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TOPECI OPEN CLASSROOM */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto bg-[#c2326c] rounded-3xl py-12 px-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-waffle-soft">
                TOPECI Openclassroom arrive bientôt !
              </h2>
              <p className="text-white mb-6 font-indie-flower text-lg">
                Bientôt, une application pour apprendre de façon ludique
              </p>
              <Button className="bg-white text-[#c2326c] hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition duration-300 font-waffle-soft">
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
