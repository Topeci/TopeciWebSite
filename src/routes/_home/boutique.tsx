/**
 * La page "Boutique" de l'application.
 * Affiche le contenu de la boutique.
 * Bannière ou section “Produits populaires / Nouveautés / Promotions”.
 * Filtres & tri (optionnel mais pratique)

Trier par prix, par nouveauté, par catégorie.
  Grille de cartes (4 colonnes ).

Chaque carte = image du produit, titre, prix, petite description.

Bouton “Voir plus” 


 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
  Eye,
  ChevronDown,
} from "lucide-react";

import kid1 from "../../images/kid1.jpg";
import LivreBaoule from "../../images/livrebaoule.png";
import LivreDioula from "../../images/livredioula.webp";


// Données de produits fictifs
const products = [
  {
    id: 1,
    name: "Livre Audio Baoulé",
    description: "Livre interactif avec audio pour apprendre le baoulé",
    price: "8000 CFA",
    image: LivreBaoule,
    category: "livre-audio",
    isNew: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Livre Audio Dioula",
    description: "Livre interactif avec audio pour apprendre le dioula",
    price: "8000 CFA",
    image: LivreDioula,
    category: "livre-audio",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Coffret Découverte",
    description: "Pack contenant 3 livres audio et un guide d'apprentissage",
    price: "20000 CFA",
    image: "https://placehold.co/300x400/BE356A/white?text=Coffret",
    category: "coffret",
    isNew: false,
    rating: 4.9,
    promotion: "-15%",
  },
  {
    id: 4,
    name: "Posters Éducatifs",
    description: "Set de 5 posters colorés avec vocabulaire de base",
    price: "5000 CFA",
    image: "https://placehold.co/300x400/D68E54/white?text=Posters",
    category: "accessoire",
    isNew: false,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Livre de Contes",
    description: "Recueil de contes traditionnels africains illustrés",
    price: "6000 CFA",
    image: "https://placehold.co/300x400/DCCC41/white?text=Contes",
    category: "livre",
    isNew: true,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Cahier d'Exercices",
    description: "Cahier d'activités pour pratiquer l'écriture",
    price: "3500 CFA",
    image: "https://placehold.co/300x400/74C6C6/white?text=Cahier",
    category: "accessoire",
    isNew: false,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Pack Famille",
    description: "4 livres audio + 2 cahiers d'activités",
    price: "25000 CFA",
    image: "https://placehold.co/300x400/4E6FA7/white?text=Pack+Famille",
    category: "coffret",
    isNew: false,
    rating: 4.8,
    promotion: "-20%",
  },
  {
    id: 8,
    name: "Cartes Mémoire",
    description: "Jeu de cartes pour mémoriser le vocabulaire",
    price: "4500 CFA",
    image: "https://placehold.co/300x400/BE356A/white?text=Cartes",
    category: "accessoire",
    isNew: true,
    rating: 4.3,
  },
];

const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "livre-audio", name: "Livres Audio" },
  { id: "livre", name: "Livres" },
  { id: "coffret", name: "Coffrets" },
  { id: "accessoire", name: "Accessoires" },
];

const sortOptions = [
  { id: "newest", name: "Nouveautés" },
  { id: "price-asc", name: "Prix croissant" },
  { id: "price-desc", name: "Prix décroissant" },
  { id: "popular", name: "Populaires" },
];

export const Route = createFileRoute("/_home/boutique")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parseInt(a.price) - parseInt(b.price);
        case "price-desc":
          return parseInt(b.price) - parseInt(a.price);
        case "popular":
          return b.rating - a.rating;
        default:
          return a.id - b.id;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bannière */}
      <section
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${kid1})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#74C6C6]/40 via-[#4E6FA7]/40 to-[#3a5a8a]/40"></div>

        {/* Contenu */}
        <div className="container mx-auto px-4 text-center text-white ">
          <h1 className="text-4xl font-bold mb-4 font-waffle-soft text-white">
            Notre Boutique
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-glacial-indifference text-white">
            Découvrez tous nos produits pour apprendre les langues africaines de
            façon ludique et interactive
          </p>
        </div>
      </section>

      {/* Filtres et tri */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          {/* Filtres mobile */}
          <div className="lg:hidden w-full">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200"
            >
              <span className="flex items-center">
                <Filter size={18} className="mr-2" />
                Filtres
              </span>
              <ChevronDown
                size={18}
                className={`transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Catégories (mobile dropdown) */}
          {showFilters && (
            <div className="lg:hidden w-full bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold mb-3">Catégories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-2 rounded-full text-sm ${
                      selectedCategory === category.id
                        ? "bg-[#74C6C6] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Catégories (desktop) */}
          <div className="hidden lg:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-['Glacial_Indifference'] ${
                  selectedCategory === category.id
                    ? "bg-[#74C6C6] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Contrôles de tri et vue */}
          <div className="flex items-center gap-4">
            {/* Sélecteur de tri */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#74C6C6] font-['Glacial_Indifference']"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>

            {/* Boutons de vue */}
            <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-[#74C6C6] text-white" : "text-gray-600"}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-[#74C6C6] text-white" : "text-gray-600"}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Grille de produits */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Image du produit */}
              <div
                className={`relative ${viewMode === "list" ? "w-1/3" : "w-full h-48"}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover ${viewMode === "list" ? "rounded-l-xl" : ""}`}
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 space-y-1">
                  {product.isNew && (
                    <span className="bg-[#D68E54] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Nouveau
                    </span>
                  )}
                  {product.promotion && (
                    <span className="bg-[#BE356A] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.promotion}
                    </span>
                  )}
                </div>
                {/* Rating */}
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                  <Star
                    size={14}
                    className="text-yellow-400 fill-current mr-1"
                  />
                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Contenu du produit */}
              <div className={`p-4 ${viewMode === "list" ? "w-2/3" : ""}`}>
                <h3 className="font-semibold text-lg mb-2 font-['Waffle_soft']">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 font-['Glacial_Indifference']">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#4E6FA7] font-bold text-lg">
                    {product.price}
                  </span>
                  {product.promotion && (
                    <span className="text-gray-400 text-sm line-through">
                      {product.promotion === "-15%" ? "9400 CFA" : "31200 CFA"}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#74C6C6] hover:bg-[#5fb3b3] text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <ShoppingCart size={16} className="mr-2" />
                    Ajouter
                  </button>
                  <Link
                    to="/produit/$productId"
                    params={{ productId: product.id.toString() }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Eye size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (optionnelle) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-['Glacial_Indifference']">
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}

        {/* Bouton Voir plus */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-[#D68E54] hover:bg-[#c57f4a] text-white font-semibold py-3 px-8 rounded-full transition duration-300 font-['Waffle_soft']">
              Voir plus de produits
            </button>
          </div>
        )}
      </section>

      {/* Section promotionnelle */}
      <section className="bg-gradient-to-r from-[#DCCC41] to-[#D68E54] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 font-['Waffle_soft']">
            Livraison Offerte dès 25000 CFA d'achat !
          </h2>
          <p className="text-lg mb-6 font-['Glacial_Indifference']">
            Profitez de la livraison gratuite sur toute la Côte d'Ivoire
          </p>
          <Link
            to="/livres"
            className="bg-white text-[#4E6FA7] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300 inline-block font-['Waffle_soft']"
          >
            Découvrir les livres
          </Link>
        </div>
      </section>
    </div>
  );
}