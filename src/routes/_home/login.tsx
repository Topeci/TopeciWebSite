import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff, Mail, Lock} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_home/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log("Données de connexion:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* En-tête */}

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6  from-[#74C6C6]/20 to-[#4E6FA7]/30"
        >
          {/* Champ identifiant */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2 font-glacial-indifference"
            >
              Nom d'utilisateur ou email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-[#74C6C6] outline-none transition font-['Glacial_Indifference']"
                placeholder="Entrez votre identifiant"
              />
            </div>
          </div>

          {/* Champ mot de passe */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2 font-glacial-indifference"
            >
              Mot de passe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74C6C6] focus:border-[#74C6C6] outline-none transition font-glacial-indifference"
                placeholder="Entrez votre mot de passe"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff
                    size={18}
                    className="text-gray-400 hover:text-gray-600"
                  />
                ) : (
                  <Eye
                    size={18}
                    className="text-gray-400 hover:text-gray-600"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Lien mot de passe oublié */}
          <div className="text-right mt-5">
            <Link
              to="/"
              className="text-sm text-[#74C6C6] hover:text-[#4E6FA7] transition font-glacial-indifference"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#74C6C6] to-[#4E6FA7] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#5cb0b0] hover:to-[#3a5a8a] transition shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#74C6C6] font-['Waffle_soft']"
          >
            Se connecter
          </button>

          {/* Séparateur */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-glacial-indifference">
                Ou continuer avec
              </span>
            </div>
          </div>

          {/* Boutons de connexion sociale */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#74C6C6] transition font-glacial-indifference"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#74C6C6] transition font-glacial-indifference"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>

        {/* Pied de formulaire */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-sm text-gray-600 font-glacial-indifference">
            Nouveau sur TOPECI ?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#74C6C6] hover:text-[#4E6FA7] transition"
            >
              Créez un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
