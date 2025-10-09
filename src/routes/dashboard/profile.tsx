/**
 * La page "Profil"
 * Espace :Nom, Prénom, Email
 * fontionnalité : Modifier le profil (illustrer par l'icone stylo), un dialog avec l'arriere plan transparent
 * et une petite note sur le formulaire "Cette adresse e-mail est utilisée pour la connexion et les mises à jour des commandes."
 * bouton annuler et enregistrer
 *
 * Espace : Adresses
 * Adresses par défaut cote d'ivoire :
 * ajouter l'adresse : cliquer (ceci est mon adresse par défaut)
 * modifier l'adresse :
 * - (pays/région : NB: selection de tout les pays de A-Z)
 * - prénom , nom, entreprise, adresse, appartement (facultatif), code postal, ville, télphone(indicatif, choix du pays)
 * lien supprimer, annuler, bouton enregister
 *
 */

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeaderDashboard } from "../../components/layout/headerDashboard";
import { FooterDashboard } from "../../components/layout/footerDashboard";

export const Route = createFileRoute("/dashboard/profile")({
  component: RouteComponent,
});

// Types pour les données
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

interface Address {
  id: string;
  isDefault: boolean;
  country: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  apartment?: string;
  postalCode: string;
  city: string;
  phoneCode: string;
  phoneNumber: string;
}

function RouteComponent() {
  // États pour les données utilisateur
  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: "Jean-Marc",
    lastName: "KOFFI",
    email: "jeanmarc.koffi@topecishop.com",
  });

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      isDefault: true,
      country: "CI",
      firstName: "Jean-Marc",
      lastName: "KOFFI",
      company: "TOPECI Shop",
      address: "Plateau, Rue des Commerce",
      apartment: "Bâtiment A, étage 2",
      postalCode: "01 BP",
      city: "Abidjan",
      phoneCode: "+225",
      phoneNumber: "0708070908",
    },
  ]);

  // États pour les modales
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
    isDefault: false,
    country: "CI",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    phoneCode: "+225",
    phoneNumber: "",
  });

  // Liste des pays (exemple)
  const countries = [
    { code: "CI", name: "Côte d'Ivoire" },
    { code: "FR", name: "France" },
    { code: "US", name: "États-Unis" },
    { code: "CA", name: "Canada" },
    { code: "BE", name: "Belgique" },
    { code: "CH", name: "Suisse" },
    { code: "SN", name: "Sénégal" },
    { code: "ML", name: "Mali" },
    { code: "BF", name: "Burkina Faso" },
    { code: "GN", name: "Guinée" },
    // Ajouter tous les pays A-Z...
  ];

  const phoneCodes = [
    { code: "+225", country: "Côte d'Ivoire" },
    { code: "+33", country: "France" },
    { code: "+1", country: "États-Unis/Canada" },
    { code: "+32", country: "Belgique" },
    { code: "+41", country: "Suisse" },
    { code: "+221", country: "Sénégal" },
    { code: "+223", country: "Mali" },
    { code: "+226", country: "Burkina Faso" },
    { code: "+224", country: "Guinée" },
    // Ajouter tous les indicatifs...
  ];

  // Gestionnaires pour le profil
  const handleEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  const handleSaveProfile = () => {
    // Ici, on ferait un appel API pour sauvegarder
    setIsEditProfileOpen(false);
  };

  // Gestionnaires pour les adresses
  const handleAddAddress = () => {
    setNewAddress({
      isDefault: addresses.length === 0,
      country: "CI",
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      company: "",
      address: "",
      apartment: "",
      postalCode: "",
      city: "",
      phoneCode: "+225",
      phoneNumber: "",
    });
    setIsAddAddressOpen(true);
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      // Modification d'une adresse existante
      setAddresses(
        addresses.map((addr) =>
          addr.id === editingAddress.id ? editingAddress : addr
        )
      );
      setEditingAddress(null);
    } else {
      // Ajout d'une nouvelle adresse
      const addressToAdd: Address = {
        ...newAddress,
        id: Date.now().toString(),
      };
      setAddresses([...addresses, addressToAdd]);
      setIsAddAddressOpen(false);
    }
  };

  const handleDeleteAddress = (addressId: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== addressId));
  };

  const handleSetDefaultAddress = (addressId: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === addressId,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderDashboard />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Section Profil */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Informations personnelles
            </h1>
            <button
              onClick={handleEditProfile}
              className="flex items-center space-x-2 text-[#D68E54] hover:text-[#DCCC41] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span className="font-medium">Modifier</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Nom
              </span>
              <span className="text-gray-900 dark:text-white">
                {userProfile.lastName}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Prénom
              </span>
              <span className="text-gray-900 dark:text-white">
                {userProfile.firstName}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Email
              </span>
              <span className="text-gray-900 dark:text-white">
                {userProfile.email}
              </span>
            </div>
          </div>
        </div>

        {/* Section Adresses */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Adresses
            </h2>
            <button
              onClick={handleAddAddress}
              className="bg-[#D68E54] hover:bg-[#DCCC41] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Ajouter une adresse
            </button>
          </div>

          <div className="space-y-6">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                {address.isDefault && (
                  <div className="inline-flex items-center px-3 py-1 bg-[#D68E54] text-white text-sm font-medium rounded-full mb-4">
                    Adresse par défaut
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {address.firstName} {address.lastName}
                    </p>
                    {address.company && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {address.company}
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">
                      {address.address}
                    </p>
                    {address.apartment && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {address.apartment}
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">
                      {address.postalCode} {address.city}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {countries.find((c) => c.code === address.country)?.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {address.phoneCode} {address.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleEditAddress(address)}
                    className="flex items-center space-x-2 text-[#D68E54] hover:text-[#DCCC41] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Modifier</span>
                  </button>

                  {!address.isDefault && (
                    <>
                      <button
                        onClick={() => handleSetDefaultAddress(address.id)}
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        Définir comme adresse par défaut
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                      >
                        Supprimer
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterDashboard />

      {/* Modal d'édition du profil */}
      {isEditProfileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Modifier le profil
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={userProfile.firstName}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={userProfile.lastName}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, lastName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Cette adresse e-mail est utilisée pour la connexion et les
                  mises à jour des commandes.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsEditProfileOpen(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleSaveProfile}
                className="px-6 py-2 bg-[#D68E54] hover:bg-[#DCCC41] text-white rounded-lg font-medium transition-colors"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'ajout/modification d'adresse */}
      {(isAddAddressOpen || editingAddress) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {editingAddress ? "Modifier l'adresse" : "Ajouter une adresse"}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pays/Région *
                </label>
                <select
                  value={editingAddress?.country || newAddress.country}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          country: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          country: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  value={editingAddress?.firstName || newAddress.firstName}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          firstName: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          firstName: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  value={editingAddress?.lastName || newAddress.lastName}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          lastName: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          lastName: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Entreprise (facultatif)
                </label>
                <input
                  type="text"
                  value={editingAddress?.company || newAddress.company}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          company: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          company: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adresse *
                </label>
                <input
                  type="text"
                  value={editingAddress?.address || newAddress.address}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          address: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          address: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Appartement, suite, etc. (facultatif)
                </label>
                <input
                  type="text"
                  value={editingAddress?.apartment || newAddress.apartment}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          apartment: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          apartment: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Code postal *
                </label>
                <input
                  type="text"
                  value={editingAddress?.postalCode || newAddress.postalCode}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          postalCode: e.target.value,
                        })
                      : setNewAddress({
                          ...newAddress,
                          postalCode: e.target.value,
                        })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  value={editingAddress?.city || newAddress.city}
                  onChange={(e) =>
                    editingAddress
                      ? setEditingAddress({
                          ...editingAddress,
                          city: e.target.value,
                        })
                      : setNewAddress({ ...newAddress, city: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="flex space-x-2 md:col-span-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Indicatif *
                  </label>
                  <select
                    value={editingAddress?.phoneCode || newAddress.phoneCode}
                    onChange={(e) =>
                      editingAddress
                        ? setEditingAddress({
                            ...editingAddress,
                            phoneCode: e.target.value,
                          })
                        : setNewAddress({
                            ...newAddress,
                            phoneCode: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    {phoneCodes.map((phone) => (
                      <option key={phone.code} value={phone.code}>
                        {phone.code} ({phone.country})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={
                      editingAddress?.phoneNumber || newAddress.phoneNumber
                    }
                    onChange={(e) =>
                      editingAddress
                        ? setEditingAddress({
                            ...editingAddress,
                            phoneNumber: e.target.value,
                          })
                        : setNewAddress({
                            ...newAddress,
                            phoneNumber: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {!editingAddress && (
                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newAddress.isDefault}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          isDefault: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-[#D68E54] focus:ring-[#D68E54]"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Ceci est mon adresse par défaut
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              {editingAddress && (
                <button
                  onClick={() => handleDeleteAddress(editingAddress.id)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Supprimer
                </button>
              )}

              <div className="flex space-x-3 ml-auto">
                <button
                  onClick={() => {
                    setIsAddAddressOpen(false);
                    setEditingAddress(null);
                  }}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="px-6 py-2 bg-[#D68E54] hover:bg-[#DCCC41] text-white rounded-lg font-medium transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
