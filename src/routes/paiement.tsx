/**
 * PAGE DE PAIEMENT TOPECI
 *
 * ZONES DE LIVRAISON :
 * Zone 1 : 1000 FCFA (Cocody, Dokui, Adjamé)
 * Zone 2 : 1500 FCFA (Plateau, Bingerville, Koumassi, Marcory, Zone 4, Abobo, Yopougon, Attécoubé)
 * Zone 3 : 2500 FCFA (Ayaman, Port-Bouët, Gonzague, KM17)
 * Zone 4 : 3000 FCFA (Bassam, Bonoua, Dabou)
 * Zone 5 : 5 EUR (Livraison partout en France)
 * Intérieur CI : 2000 FCFA (Toutes les villes de l'intérieur)
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CreditCard, Smartphone, Tag } from "lucide-react";

import TopeciLogo from "../assets/images/logotopeci.png";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";
import wave from "../assets/images/wave.webp";
import paypal from "../assets/images/paypal.png";
import orangeMoney from "../assets/images/orange.webp";

export const Route = createFileRoute("/paiement")({
  component: RouteComponent,
});

// Zones de livraison
const deliveryZones = {
  "cote-ivoire": {
    zone1: {
      label: "Zone 1 - 1 000 FCFA",
      price: 1000,
      cities: ["Cocody", "Dokui", "Adjamé"],
    },
    zone2: {
      label: "Zone 2 - 1 500 FCFA",
      price: 1500,
      cities: [
        "Plateau",
        "Bingerville",
        "Koumassi",
        "Marcory",
        "Zone 4",
        "Abobo",
        "Yopougon",
        "Attécoubé",
      ],
    },
    zone3: {
      label: "Zone 3 - 2 500 FCFA",
      price: 2500,
      cities: ["Ayaman", "Port-Bouët", "Gonzague", "KM17"],
    },
    zone4: {
      label: "Zone 4 - 3 000 FCFA",
      price: 3000,
      cities: ["Bassam", "Bonoua", "Dabou"],
    },
    interieur: {
      label: "Intérieur CI - 2 000 FCFA",
      price: 2000,
      cities: ["Autres villes de Côte d'Ivoire"],
    },
  },
  france: {
    zone5: {
      label: "France - 5 EUR",
      price: 5,
      cities: ["Toute la France"],
    },
  },
};

function RouteComponent() {
  const { cart, getCartTotal } = useCart();
  const subtotal = getCartTotal();

  const [country, setCountry] = useState("cote-ivoire");
  const [deliveryZone, setDeliveryZone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculer les frais de livraison
  const getDeliveryPrice = () => {
    if (!deliveryZone) return 0;
    if (country === "cote-ivoire") {
      return (
        deliveryZones["cote-ivoire"][
          deliveryZone as keyof (typeof deliveryZones)["cote-ivoire"]
        ]?.price || 0
      );
    }
    if (country === "france") {
      return 5; // EUR converti en FCFA (environ 3280 FCFA)
    }
    return 0;
  };

  const deliveryPrice = getDeliveryPrice();
  const total = subtotal + deliveryPrice - discount;

  const applyPromoCode = () => {
    // Logique de validation du code promo
    if (promoCode === "TOPECI10") {
      setDiscount(subtotal * 0.1);
      alert("Code promo appliqué ! -10%");
    } else if (promoCode) {
      alert("Code promo invalide");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* FORMULAIRE DE PAIEMENT - GAUCHE (50%) */}
          <div className="bg-white w-full">
            <div className="p-8 w-full">
              <h1 className="text-lg text-center font-bold text-gray-500 mb-8 font-indie-flower">
                Paiement
              </h1>

              {/* CONTACT */}
              <div className="mb-8 w-full">
                <h2
                  className="text-xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "WAFFLE-SOFT" }}
                >
                  Contact
                </h2>
                <div className="space-y-4 w-full">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email ou Numéro de téléphone *
                    </label>
                    <input
                      type="text"
                      placeholder="exemple@email.com ou +225 0712345678"
                      className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                      style={{ fontFamily: "Glacial Indifference" }}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="connect" className="w-4 h-4" />
                    <label
                      htmlFor="connect"
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "Glacial Indifference" }}
                    >
                      J'ai déjà un compte, se connecter
                    </label>
                  </div>
                </div>
              </div>

              {/* LIVRAISON */}
              <div className="mb-8 w-full">
                <h2
                  className="text-xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "WAFFLE-SOFT" }}
                >
                  Informations de livraison
                </h2>
                <div className="space-y-4 w-full">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pays *
                    </label>
                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        setDeliveryZone("");
                      }}
                      className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                      style={{ fontFamily: "Glacial Indifference" }}
                    >
                      <option value="cote-ivoire">Côte d'Ivoire</option>
                      <option value="france">France</option>
                      <option value="autre">Autre pays</option>
                    </select>
                  </div>

                  {country === "cote-ivoire" && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Zone de livraison *
                      </label>
                      <select
                        value={deliveryZone}
                        onChange={(e) => setDeliveryZone(e.target.value)}
                        className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                        style={{ fontFamily: "Glacial Indifference" }}
                        required
                      >
                        <option value="">Sélectionner une zone</option>
                        {Object.entries(deliveryZones["cote-ivoire"]).map(
                          ([key, zone]) => (
                            <option key={key} value={key}>
                              {zone.label} ({zone.cities.join(", ")})
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      placeholder="Abidjan"
                      className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                      style={{ fontFamily: "Glacial Indifference" }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse complète *
                    </label>
                    <input
                      type="text"
                      placeholder="Rue, quartier, immeuble..."
                      className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                      style={{ fontFamily: "Glacial Indifference" }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Code postal
                    </label>
                    <input
                      type="text"
                      placeholder="00225"
                      className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                      style={{ fontFamily: "Glacial Indifference" }}
                    />
                  </div>
                </div>
              </div>

              {/* MÉTHODE DE PAIEMENT */}
              <div className="mb-8 w-full">
                <h2
                  className="text-xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "WAFFLE-SOFT" }}
                >
                  Méthode de paiement
                </h2>

                {/* Sélection méthode */}
                <div className="space-y-3 mb-6 w-full">
                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-[#74C6C6] bg-[#74C6C6] bg-opacity-5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard size={24} className="text-gray-700" />
                        <span className="font-semibold">Carte bancaire</span>
                      </div>
                      <div className="flex gap-2">
                        <img src={visa} alt="Visa" className="h-6" />
                        <img
                          src={mastercard}
                          alt="Mastercard"
                          className="h-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "mobile"
                        ? "border-[#74C6C6] bg-[#74C6C6] bg-opacity-5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("mobile")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone size={24} className="text-gray-700" />
                        <span className="font-semibold">Mobile Money</span>
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={orangeMoney}
                          alt="Orange Money"
                          className="h-6"
                        />
                        <img src={wave} alt="Wave" className="h-6" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "border-[#74C6C6] bg-[#74C6C6] bg-opacity-5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <div className="flex items-center gap-3">
                      <img src={paypal} alt="PayPal" className="h-6" />
                      <span className="font-semibold">PayPal</span>
                    </div>
                  </div>
                </div>

                {/* Formulaire Carte bancaire */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 p-4 bg-gray-50 w-full">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Numéro de carte *
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                        style={{ fontFamily: "Glacial Indifference" }}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date d'expiration *
                        </label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                          style={{ fontFamily: "Glacial Indifference" }}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={3}
                          className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                          style={{ fontFamily: "Glacial Indifference" }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Formulaire Mobile Money */}
                {paymentMethod === "mobile" && (
                  <div className="space-y-4 p-4 bg-gray-50 w-full">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Opérateur *
                      </label>
                      <select
                        className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                        style={{ fontFamily: "Glacial Indifference" }}
                        required
                      >
                        <option value="">Sélectionner un opérateur</option>
                        <option value="orange">Orange Money</option>
                        <option value="mtn">MTN Mobile Money</option>
                        <option value="moov">Moov Money</option>
                        <option value="wave">Wave</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+225 07 12 34 56 78"
                        className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                        style={{ fontFamily: "Glacial Indifference" }}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* PayPal */}
                {paymentMethod === "paypal" && (
                  <div className="p-4 bg-gray-50 text-center w-full">
                    <p className="text-sm text-gray-600 mb-4">
                      Vous serez redirigé vers PayPal pour finaliser le paiement
                    </p>
                  </div>
                )}
              </div>

              {/* BOUTON DE VALIDATION */}
              <button
                className="w-full bg-[#D68E54] hover:bg-[#c57f4a] text-white font-bold py-4 transition-all shadow-lg hover:shadow-xl text-lg"
                style={{ fontFamily: "WAFFLE-SOFT" }}
              >
                Payer maintenant - {total.toLocaleString()} FCFA
              </button>
            </div>
          </div>

          {/* RÉSUMÉ DE COMMANDE - DROITE (50%) */}
          <div className="bg-[#74C6C6] w-full">
            <div className="p-8 w-full">
              {/* Logo */}
              <div className="text-center mb-6 mt-30">
                <img
                  src={TopeciLogo}
                  alt="TOPECI"
                  className="h-16 w-auto mx-auto"
                />
              </div>

              <h2
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "WAFFLE-SOFT" }}
              >
                Résumé de la commande
              </h2>

              {/* Liste des produits */}
              <div className="space-y-4 mb-6 w-full">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 bg-white bg-opacity-20 p-3 w-full"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-1">
                      <h4
                        className="font-bold text-sm mb-1"
                        style={{ fontFamily: "WAFFLE-SOFT" }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-white text-sm">
                        {item.quantity} × {item.priceDisplay}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code promo */}
              <div className="mb-6 w-full">
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Code de réduction"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 border border-white p-3 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white"
                    style={{ fontFamily: "Glacial Indifference" }}
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-white text-[#74C6C6] font-bold px-4 hover:bg-opacity-90 transition-all"
                  >
                    <Tag size={20} />
                  </button>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="space-y-3 border-t border-white border-opacity-30 pt-4 w-full">
                <div className="flex justify-between text-white w-full">
                  <span style={{ fontFamily: "Glacial Indifference" }}>
                    Sous-total
                  </span>
                  <span className="font-semibold">
                    {subtotal.toLocaleString()} FCFA
                  </span>
                </div>

                <div className="flex justify-between text-white w-full">
                  <span style={{ fontFamily: "Glacial Indifference" }}>
                    Livraison
                  </span>
                  <span className="font-semibold">
                    {deliveryPrice > 0
                      ? `${deliveryPrice.toLocaleString()} ${country === "france" ? "EUR" : "FCFA"}`
                      : "À calculer"}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-white w-full">
                    <span style={{ fontFamily: "Glacial Indifference" }}>
                      Réduction
                    </span>
                    <span className="font-semibold text-green-300">
                      -{discount.toLocaleString()} FCFA
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-white text-xl font-bold border-t border-white border-opacity-30 pt-3 w-full">
                  <span style={{ fontFamily: "WAFFLE-SOFT" }}>Total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
              </div>

              {/* Lien retour */}
              <Link
                to="/panier"
                className="block text-center text-white text-sm mt-6 hover:underline w-full"
                style={{ fontFamily: "Glacial Indifference" }}
              >
                ← Retour au panier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
