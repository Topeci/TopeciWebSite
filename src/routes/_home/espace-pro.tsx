import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import "../../index.css";
export const Route = createFileRoute("/_home/espace-pro")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    structureName: "",
    contactName: "",
    registrationNumber: "",
    country: "",
    email: "",
    phone: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log("Formulaire soumis:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#4E6FA7] mb-4 font-waffle-soft">
            Espace Professionnels
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Écoles, associations, librairies & boutiques
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section Informations */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
                Espace Professionnel TOPECI
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cet espace est dédié aux structures éducatives, culturelles et
                commerciales qui souhaitent proposer les produits TOPECI. Nos
                supports sont conçus pour transmettre les langues africaines de
                manière ludique aux plus jeunes.
              </p>

              <h3 className="text-xl font-semibold text-[#D68E54] mb-4">
                Pourquoi collaborer avec nous ?
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#74C6C6] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Tarifs préférentiels sur les commandes groupées
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#74C6C6] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Produits éducatifs uniques et adaptés aux enfants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#74C6C6] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Valeur culturelle forte, portée par la diaspora
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#74C6C6] mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    Support pédagogique complet pour les éducateurs
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-[#4E6FA7] p-6 rounded-lg">
                <h4 className="font-semibold text-[#4E6FA7] mb-3">
                  Conditions d'accès à nos tarifs professionnels
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Nos conditions s'appliquent uniquement aux structures
                  professionnelles et associations disposant d'un numéro
                  d'immatriculation valide (SIRET, TVA, IDE, etc.).
                </p>
                <p className="text-gray-700 text-sm">
                  Le minimum de commande est fixé à 20 unités. Nous nous
                  réservons le droit de refuser toute demande ne correspondant
                  pas à nos valeurs ou à notre vision éducative et culturelle.
                </p>
              </div>
            </div>

            {/* Information Catalogue */}
            <div className="bg-[#D68E54] text-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                📅 Catalogue disponible à partir du 1er octobre 2025
              </h3>
              <p className="mb-4">
                Vous pouvez néanmoins remplir le formulaire dès maintenant pour
                être ajouté à la liste prioritaire et recevoir votre offre
                personnalisée dès sa mise en ligne.
              </p>
              <div className="flex items-center text-sm">
                <span className="bg-white text-[#D68E54] px-3 py-1 rounded-full font-semibold mr-3">
                  Information
                </span>
                <span>Ouverture des pré-commandes le 15 septembre 2025</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
              Nous contacter
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="structureName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom de la structure *
                </label>
                <input
                  type="text"
                  id="structureName"
                  name="structureName"
                  value={formData.structureName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                  placeholder="Nom de votre établissement ou entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prénom & nom *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                  placeholder="Votre prénom et nom"
                />
              </div>

              <div>
                <label
                  htmlFor="registrationNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Numéro d'immatriculation (SIRET, TVA, IDE, ou équivalent) *
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                  placeholder="Numéro d'identification professionnelle"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pays *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                >
                  <option value="">Sélectionnez votre pays</option>
                  <option value="ci">Côte d'Ivoire</option>
                  <option value="fr">France</option>
                  <option value="be">Belgique</option>
                  <option value="ch">Suisse</option>
                  <option value="ca">Canada</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent"
                    placeholder="+225 00 00 00 00"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="needs"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Précisez vos besoins, projets *
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-transparent resize-none"
                  placeholder="Décrivez votre structure, vos besoins en produits TOPECI, le nombre d'enfants concernés, etc."
                />
              </div>

              <div className="text-sm text-gray-500 mb-6">
                <p>Les champs marqués d'un astérisque (*) sont obligatoires.</p>
                <p className="mt-2">
                  Ce formulaire est sécurisé et protégé. Vos données sont
                  traitées conformément à notre
                  <a
                    href="/_home/politique-confidentialite"
                    className="text-[#74C6C6] hover:text-[#5fb3b3] underline ml-1"
                  >
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D68E54] hover:bg-[#c57f4a] text-white font-semibold py-4 px-6 rounded-lg transition duration-300"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>

        {/* Section Informations supplémentaires */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#4E6FA7] mb-6 font-waffle-soft">
              Types de structures éligibles
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="bg-[#74C6C6] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Établissements scolaires
                </h4>
                <p className="text-gray-600 text-sm">
                  Écoles maternelles et primaires
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#74C6C6] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Librairies</h4>
                <p className="text-gray-600 text-sm">
                  Points de vente spécialisés
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#74C6C6] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Associations
                </h4>
                <p className="text-gray-600 text-sm">
                  Structures culturelles et éducatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
