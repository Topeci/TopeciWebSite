/**
 * Page Panier TOPECI
 * - Liste des produits et résumé sur la même ligne en grand écran
 * - Icônes de paiement en bas du résumé
 * - Pas de livraison gratuite (message retiré)
 * - Détails de livraison gérés dans la page checkout
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "../../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import wave from "../../assets/images/wave.webp";
import paypal from "../../assets/images/paypal.png";
import orangeMoney from "../../assets/images/orange.webp";

export const Route = createFileRoute("/_home/panier")({
  component: CartPage,
});

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag size={64} className="text-gray-300 mx-auto mb-6" />
            <h1
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "WAFFLE-SOFT" }}
            >
              Votre panier est vide
            </h1>
            <p
              className="text-gray-600 mb-8"
              style={{ fontFamily: "Glacial Indifference" }}
            >
              Découvrez nos produits éducatifs et ajoutez-les à votre panier !
            </p>
            <Link
              to="/boutique"
              className="inline-flex items-center gap-2 bg-[#74C6C6] hover:bg-[#5fb3b3] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              style={{ fontFamily: "WAFFLE-SOFT" }}
            >
              <ArrowLeft size={20} />
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 w-full py-5">
      <div className="w-full mx-6">
        {/* En-tête */}
        <div className="mb-8">
          <h1
            className="text-xl font-bold text-gray-900 mb-2 font-waffle-soft"
            
          >
            Mon Panier
          </h1>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Glacial Indifference" }}
          >
            {cart.length} article{cart.length > 1 ? "s" : ""} dans votre panier
          </p>
        </div>

        {/* Boutons actions */}
        <div className="flex justify-between items-center mt-6">
          <Link
            to="/boutique"
            className="flex items-center gap-2 text-[#74C6C6] hover:text-[#5fb3b3] font-semibold transition-colors"
            style={{ fontFamily: "WAFFLE-SOFT" }}
          >
            <ArrowLeft size={20} />
            Continuer mes achats
          </Link>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 font-semibold transition-colors"
            style={{ fontFamily: "WAFFLE-SOFT" }}
          >
            Vider le panier
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Liste des produits - 3/4 de largeur */}
          <div className="lg:col-span-3">
            <div className="bg-white">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  {/* Image */}
                  <Link
                    to="/produit/$productId"
                    params={{ productId: item.id.toString() }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                  </Link>

                  {/* Infos produit */}
                  <div className="flex-1">
                    <Link
                      to="/produit/$productId"
                      params={{ productId: item.id.toString() }}
                      className="hover:text-[#74C6C6] transition-colors"
                    >
                      <h3
                        className="font-bold text-lg mb-1"
                        style={{ fontFamily: "WAFFLE-SOFT" }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Contrôles quantité */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 p-2 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 p-2 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Sous-total */}
                  <div className="text-right min-w-[120px]">
                    <p className="font-bold text-lg text-gray-900">
                      {(item.price * item.quantity).toLocaleString()} FCFA
                    </p>
                  </div>

                  {/* Bouton supprimer */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Résumé de la commande - 1/4 de largeur */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span className="font-indie-flower">Articles</span>
                  <span className="font-semibold">
                    {total.toLocaleString()} FCFA
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="text-lg font-indie-flower">
                      Sous-Total
                    </span>
                    <span className="font-semibold text-[#4E6FA7]">
                      {total.toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/paiement"
                className="block w-full bg-[#D68A54] hover:bg-[#D68A54] text-white font-glacial-indifference text-center font-bold py-2 transition-colors shadow-lg hover:shadow-xl mb-4"
                style={{ fontFamily: "WAFFLE-SOFT" }}
              >
                Passer la commande
              </Link>

              <div
                className="space-y-3 text-sm text-gray-600 mb-6"
                style={{ fontFamily: "Glacial Indifference" }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Retour sous 7 jours</span>
                </div>
              </div>

              {/* Icônes des moyens de paiement */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-center items-center gap-3 flex-wrap">
                  <img
                    src={visa}
                    alt="Visa"
                    className="h-8 w-auto object-contain transition-all"
                  />
                  <img
                    src={mastercard}
                    alt="Mastercard"
                    className="h-8 w-auto object-contain transition-all"
                  />
                  <img
                    src={orangeMoney}
                    alt="Orange Money"
                    className="h-8 w-auto object-contain transition-all"
                  />
                  <img
                    src={wave}
                    alt="Wave"
                    className="h-8 w-auto object-contain transition-all"
                  />
                  <img
                    src={paypal}
                    alt="PayPal"
                    className="h-8 w-auto object-contain transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
