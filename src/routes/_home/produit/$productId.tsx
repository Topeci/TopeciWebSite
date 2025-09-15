import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  HeadphonesIcon,
  Shield,
  Check,
  Plus,
  Minus,
} from "lucide-react";

// Données de produit fictif (normalement vous récupéreriez cela via le paramètre productId)
const product = {
  id: 1,
  name: "Livre Audio Interactif Baoulé",
  description:
    "Découvrez la beauté de la langue baoulé à travers ce livre audio interactif spécialement conçu pour les enfants et les adultes débutants. Chaque page prend vie avec des illustrations colorées, des narrations authentiques par des locuteurs natifs, et des effets sonores captivants.",
  longDescription: `
Ce livre audio innovant combine tradition et technologie pour offrir une expérience d'apprentissage immersive. Chaque histoire est enrichie de chants traditionnels et de dialogues quotidiens qui aident à la mémorisation naturelle du vocabulaire.

**Caractéristiques principales :**
- 40 pages illustrées avec des dessins vibrants
- 2 heures d'audio natif de qualité studio
- 15 chansons traditionnelles baoulé
- 10 activités interactives
- Guide de prononciation inclus
- Matériel durable et adapté aux enfants
  `,
  price: "8000 CFA",
  originalPrice: "9500 CFA",
  image: "https://placehold.co/600x800/74C6C6/white?text=Livre+Baoulé",
  images: [
    "https://placehold.co/600x800/74C6C6/white?text=Vue+1",
    "https://placehold.co/600x800/4E6FA7/white?text=Vue+2",
    "https://placehold.co/600x800/BE356A/white?text=Vue+3",
    "https://placehold.co/600x800/D68E54/white?text=Vue+4",
  ],
  category: "Livre Audio",
  rating: 4.8,
  reviewCount: 47,
  inStock: true,
  stock: 15,
  promotion: "-16%",
  features: [
    "Audio natif de qualité studio",
    "Illustrations interactives",
    "Chants traditionnels",
    "Activités éducatives",
    "Papier résistant et écologique",
  ],
  specifications: {
    dimensions: "21 x 21 cm",
    pages: "40 pages",
    poids: "450 g",
    age: "3-10 ans",
    langues: "Baoulé, Français",
  },
};

const relatedProducts = [
  {
    id: 2,
    name: "Livre Audio Dioula",
    price: "8000 CFA",
    image: "https://placehold.co/300x400/4E6FA7/white?text=Livre+Dioula",
    category: "Livre Audio",
  },
  {
    id: 3,
    name: "Coffret Découverte",
    price: "20000 CFA",
    image: "https://placehold.co/300x400/BE356A/white?text=Coffret",
    category: "Coffret",
    promotion: "-15%",
  },
  {
    id: 4,
    name: "Posters Éducatifs",
    price: "5000 CFA",
    image: "https://placehold.co/300x400/D68E54/white?text=Posters",
    category: "Accessoire",
  },
];

export const Route = createFileRoute("/_home/produit/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

//  const { productId } = Route.useParams();

  // Ici vous récupéreriez le produit réel basé sur productId
  // Pour l'exemple, nous utilisons le produit fictif

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              to="/boutique"
              className="hover:text-[#74C6C6] transition-colors"
            >
              Boutique
            </Link>
            <span>/</span>
            <Link
              to={`/boutique?category=${product.category.toLowerCase()}`}
              className="hover:text-[#74C6C6] transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Produit principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galerie d'images */}
          <div>
            {/* Image principale */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>

            {/* Miniatures */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-2 border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#74C6C6]"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vue ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div>
            {/* En-tête */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 font-['Waffle_soft']">
                {product.name}
              </h1>

              {/* Note et avis */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} avis)
                  </span>
                </div>
              </div>

              {/* Prix */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-[#4E6FA7]">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="ml-2 text-lg text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.promotion && (
                  <span className="ml-2 bg-[#BE356A] text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {product.promotion}
                  </span>
                )}
              </div>
            </div>

            {/* Description courte */}
            <p className="text-gray-600 mb-6 font-['Glacial_Indifference']">
              {product.description}
            </p>

            {/* Caractéristiques */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Ce produit comprend :</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-[#74C6C6] mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sélecteur quantité */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantité :</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 p-2 rounded-l-lg hover:bg-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="bg-white px-4 py-2 border-y border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 p-2 rounded-r-lg hover:bg-gray-300 transition-colors"
                >
                  <Plus size={16} />
                </button>
                <span className="ml-4 text-sm text-gray-600">
                  {product.inStock
                    ? `${product.stock} disponibles`
                    : "Rupture de stock"}
                </span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-[#74C6C6] hover:bg-[#5fb3b3] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <ShoppingCart size={20} className="mr-2" />
                Ajouter au panier
              </button>
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <Truck size={24} className="text-[#4E6FA7] mx-auto mb-2" />
                <p className="text-sm text-gray-600">Livraison rapide</p>
              </div>
              <div className="text-center">
                <HeadphonesIcon
                  size={24}
                  className="text-[#4E6FA7] mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Support 7j/7</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="text-[#4E6FA7] mx-auto mb-2" />
                <p className="text-sm text-gray-600">Garantie qualité</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs détaillées */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-semibold text-sm border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-[#74C6C6] text-[#74C6C6]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "description" && "Description détaillée"}
                  {tab === "specifications" && "Spécifications"}
                  {tab === "reviews" && "Avis clients"}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line font-['Glacial_Indifference']">
                  {product.longDescription}
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="font-semibold text-gray-700 capitalize">
                      {key}:
                    </span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="text-center py-8">
                  <p className="text-gray-500">Aucun avis pour le moment.</p>
                  <button className="mt-4 bg-[#74C6C6] hover:bg-[#5fb3b3] text-white py-2 px-6 rounded-lg transition-colors">
                    Soyez le premier à noter ce produit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Produits similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 font-['Waffle_soft']">
            Produits similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#4E6FA7] font-bold">
                      {relatedProduct.price}
                    </span>
                    {relatedProduct.promotion && (
                      <span className="bg-[#BE356A] text-white px-2 py-1 rounded-full text-xs">
                        {relatedProduct.promotion}
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/produit/${relatedProduct.id}`}
                    className="mt-3 inline-block w-full bg-gray-100 hover:bg-gray-200 text-center py-2 rounded-lg transition-colors"
                  >
                    Voir le produit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
