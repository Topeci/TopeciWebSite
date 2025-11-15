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
  CheckCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

import LivreBaoule from "../../assets/images/livrebaoule.png";
import LivreDioula from "../../assets/images/livredioula.png";
import carteBete from "../../assets/images/cartebete.png";

// Données de produits
const products = [
  {
    id: 1,
    name: "Cartes Parlantes Bété - Français",
    description: "Cartes éducatives pour apprendre le bété de façon ludique",
    price: 20000,
    priceDisplay: "20 000 FCFA",
    image: carteBete,
    category: "carte",
    isNew: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Livre Audio Baoulé - Français",
    description: "Livre interactif avec audio pour apprendre le baoulé",
    price: 16500,
    priceDisplay: "16 500 FCFA",
    image: LivreBaoule,
    category: "livre-audio",
    isNew: false,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Livre Audio Dioula - Français",
    description: "Livre interactif avec audio pour apprendre le dioula",
    price: 16500,
    priceDisplay: "16 500 FCFA",
    image: LivreDioula,
    category: "livre-audio",
    isNew: false,
    rating: 4.7,
  },
];

const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "livre-audio", name: "Livres Audio" },
  { id: "carte", name: "Cartes Parlantes" },
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
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  const { addToCart } = useCart();

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "popular":
          return b.rating - a.rating;
        case "newest":
          return b.isNew ? 1 : -1;
        default:
          return a.id - b.id;
      }
    });

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        priceDisplay: product.priceDisplay,
        image: product.image,
      },
      1
    );

    // Afficher l'animation de confirmation
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Message de succès global */}
      {addedProductId && (
        <div className="fixed top-4 right-4 z-50 bg-[#D68E54] text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
          <CheckCircle size={24} />
          <div>
            <p className="font-bold">Produit ajouté au panier !</p>
            <Link
              to="/panier"
              className="text-sm underline hover:text-green-100"
            >
              Voir le panier
            </Link>
          </div>
        </div>
      )}

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
                className={`transform transition-transform ${showFilters ? "rotate-180" : ""}`}
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
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`px-3 py-2 rounded-full text-sm transition-colors ${
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
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#74C6C6] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
                style={{ fontFamily: "Glacial Indifference" }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Contrôles de tri et vue */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Sélecteur de tri */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 lg:flex-none bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#74C6C6]"
              style={{ fontFamily: "Glacial Indifference" }}
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
                className={`p-2 transition-colors ${viewMode === "grid" ? "bg-[#74C6C6] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                aria-label="Vue grille"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? "bg-[#74C6C6] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                aria-label="Vue liste"
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
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              {/* Image du produit */}
              <div
                className={`relative ${viewMode === "list" ? "md:w-1/3" : "w-full h-64"} overflow-hidden group`}
              >
                <Link
                  to="/produit/$productId"
                  params={{ productId: product.id.toString() }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300`}
                  />
                </Link>
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isNew && (
                    <span className="bg-[#D68E54] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      Nouveau
                    </span>
                  )}
                </div>
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white bg-opacity-95 px-2 py-1 rounded-full flex items-center shadow-md">
                  <Star
                    size={14}
                    className="text-yellow-400 fill-current mr-1"
                  />
                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>
                </div>

                {/* Animation ajout panier */}
                {addedProductId === product.id && (
                  <div className="absolute inset-0 bg-opacity-90 flex items-center justify-center animate-fade-in">
                    <div className="text-[#BE356A] text-center">
                      <CheckCircle size={48} className="mx-auto mb-2" />
                      <p className="font-bold">Ajouté !</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contenu du produit */}
              <div
                className={`p-5 ${viewMode === "list" ? "md:w-2/3 flex flex-col justify-between" : ""}`}
              >
                <div>
                  <Link
                    to="/produit/$productId"
                    params={{ productId: product.id.toString() }}
                    className="hover:text-[#74C6C6] transition-colors"
                  >
                    <h3
                      className="font-bold text-lg mb-2 text-gray-800"
                      style={{ fontFamily: "WAFFLE-SOFT" }}
                    >
                      {product.name}
                    </h3>
                  </Link>
                  <p
                    className="text-gray-600 text-sm mb-4"
                    style={{ fontFamily: "Glacial Indifference" }}
                  >
                    {product.description}
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-[#4E6FA7] font-bold text-xl">
                      {product.priceDisplay}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-[#DCCC41] hover:bg-[#c9bb3a] text-gray-800 py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center font-medium shadow-md hover:shadow-lg"
                      style={{ fontFamily: "Glacial Indifference" }}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Ajouter
                    </button>
                    <Link
                      to="/produit/$productId"
                      params={{ productId: product.id.toString() }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      aria-label={`Voir détails de ${product.name}`}
                    >
                      <Eye size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p
              className="text-gray-500 text-lg"
              style={{ fontFamily: "Glacial Indifference" }}
            >
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

// Ajoutez ces styles dans votre fichier CSS global
// @keyframes slide-in {
//   from {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }
//
// @keyframes fade-in {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
//
// .animate-slide-in {
//   animation: slide-in 0.3s ease-out;
// }
//
// .animate-fade-in {
//   animation: fade-in 0.3s ease-out;
// }
