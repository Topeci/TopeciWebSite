import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Heart,
  ArrowLeft,
  Truck,
  Shield,
  CreditCard,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Données du panier fictif
const cartItems = [
  {
    id: 1,
    name: "Livre Audio Interactif Baoulé",
    price: 8000,
    quantity: 1,
    image: "https://placehold.co/100x120/74C6C6/white?text=Livre+Baoulé",
    category: "Livre Audio",
    inStock: true,
  },
  {
    id: 2,
    name: "Livre Audio Dioula",
    price: 8000,
    quantity: 1,
    image: "https://placehold.co/100x120/4E6FA7/white?text=Livre+Dioula",
    category: "Livre Audio",
    inStock: true,
  },
  {
    id: 3,
    name: "Cahier d'Exercices",
    price: 3500,
    quantity: 2,
    image: "https://placehold.co/100x120/D68E54/white?text=Cahier",
    category: "Accessoire",
    inStock: true,
  },
];

const deliveryOptions = [
  {
    id: "standard",
    name: "Livraison Standard",
    price: 2000,
    time: "3-5 jours",
    freeThreshold: 25000,
  },
  {
    id: "express",
    name: "Livraison Express",
    price: 5000,
    time: "1-2 jours",
    freeThreshold: 30000,
  },
  {
    id: "point-relais",
    name: "Point Relais",
    price: 1500,
    time: "2-4 jours",
    freeThreshold: 20000,
  },
];

export const Route = createFileRoute("/_home/panier")({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState(cartItems);
  const [selectedDelivery, setSelectedDelivery] = useState("standard");

  // Calcul des totaux
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryPrice =
    deliveryOptions.find((opt) => opt.id === selectedDelivery)?.price || 0;
  const isDeliveryFree =
    subtotal >=
    (deliveryOptions.find((opt) => opt.id === selectedDelivery)
      ?.freeThreshold || 0);
  const total = subtotal + (isDeliveryFree ? 0 : deliveryPrice);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    // Logique pour déplacer vers la liste de souhaits
    console.log(`Déplacer l'article ${id} vers la liste de souhaits`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-[#74C6C6] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-['Waffle_soft']">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8 font-['Glacial_Indifference']">
              Découvrez nos produits et remplissez votre panier de merveilles !
            </p>
            <Link
              to="/boutique"
              className="inline-flex items-center bg-[#74C6C6] hover:bg-[#5fb3b3] text-white font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              <Sparkles size={20} className="mr-2" />
              Découvrir la boutique
            </Link>
          </div>

          {/* Suggestions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 font-['Waffle_soft']">
              Vous aimerez peut-être
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Livre Audio Baoulé",
                  price: "8000 CFA",
                  image:
                    "https://placehold.co/300x400/74C6C6/white?text=Livre+Baoulé",
                },
                {
                  name: "Pack Famille",
                  price: "25000 CFA",
                  image:
                    "https://placehold.co/300x400/4E6FA7/white?text=Pack+Famille",
                },
                {
                  name: "Posters Éducatifs",
                  price: "5000 CFA",
                  image:
                    "https://placehold.co/300x400/D68E54/white?text=Posters",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-[#4E6FA7] font-bold mb-3">
                      {product.price}
                    </p>
                    <Link
                      to="/boutique"
                      className="w-full bg-[#74C6C6] hover:bg-[#5fb3b3] text-white py-2 px-4 rounded-lg text-center block transition-colors"
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/boutique"
            className="flex items-center text-[#74C6C6] hover:text-[#5fb3b3] transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continuer mes achats
          </Link>
          
          <div className="w-10"></div> {/* Pour l'équilibrage */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-['Waffle_soft']">
                  Articles ({items.length})
                </h2>
                <button className="text-[#BE356A] hover:text-[#9c2a55] text-sm font-semibold">
                  Tout supprimer
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.category}
                      </p>
                      <p className="text-[#4E6FA7] font-bold">
                        {item.price.toLocaleString()} CFA
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Contrôle quantité */}
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-2 bg-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="p-2 text-gray-400 hover:text-[#BE356A] transition-colors"
                        >
                          <Heart size={18} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Options de livraison */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4 font-['Waffle_soft']">
                Options de livraison
              </h2>
              <div className="space-y-3">
                {deliveryOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#74C6C6] transition-colors"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={option.id}
                      checked={selectedDelivery === option.id}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                      className="text-[#74C6C6] focus:ring-[#74C6C6]"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{option.name}</span>
                        <span className="text-[#4E6FA7] font-bold">
                          {subtotal >= option.freeThreshold
                            ? "Gratuit"
                            : `${option.price.toLocaleString()} CFA`}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{option.time}</p>
                      {subtotal >= option.freeThreshold && (
                        <p className="text-green-600 text-sm font-semibold">
                          ✓ Livraison offerte
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 font-['Waffle_soft']">
                Récapitulatif
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString()} CFA</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span
                    className={
                      isDeliveryFree ? "text-green-600 font-semibold" : ""
                    }
                  >
                    {isDeliveryFree
                      ? "Gratuit"
                      : `${deliveryPrice.toLocaleString()} CFA`}
                  </span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#4E6FA7]">
                    {total.toLocaleString()} CFA
                  </span>
                </div>
              </div>

              {/* Avantages */}
              <div className="bg-[#74C6C6] bg-opacity-10 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Truck size={16} className="text-[#74C6C6] mr-2" />
                  <span className="text-sm font-semibold">
                    Livraison offerte dès 25 000 CFA
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield size={16} className="text-[#74C6C6] mr-2" />
                  <span className="text-sm font-semibold">
                    Paiement sécurisé
                  </span>
                </div>
              </div>

              {/* Bouton de validation */}
              <Link
                to="/auth/commande"
                className="w-full bg-[#D68E54] hover:bg-[#c57f4a] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Procéder au paiement
                <ArrowRight size={20} className="ml-2" />
              </Link>

              {/* Options de paiement */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm mb-2">
                  Modes de paiement acceptés :
                </p>
                <div className="flex justify-center space-x-2">
                  <CreditCard size={20} className="text-gray-400" />
                  <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                  <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Code promo */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="font-semibold mb-3">Code promo</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Entrez votre code"
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#74C6C6]"
                />
                <button className="bg-[#74C6C6] hover:bg-[#5fb3b3] text-white px-4 rounded-r-lg transition-colors">
                  Appliquer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
