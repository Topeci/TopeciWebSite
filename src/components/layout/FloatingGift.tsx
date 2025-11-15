// components/layout/FloatingGift.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X } from "lucide-react";

const FloatingGift = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Afficher le bouton cadeau après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer l'email
    console.log("Email submitted:", email);
    setIsSubmitted(true);

    // Rediriger vers la boutique après un délai
    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const handleClose = () => {
    setShowForm(false);
    setIsSubmitted(false);
    setEmail("");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Bouton cadeau flottant */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowForm(true)}
        className="fixed left-6 bottom-6 z-40 bg-[#BE356A] text-white p-4 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
        style={{ zIndex: 9999 }}
      >
        <Gift size={24} />
      </motion.button>

      {/* Overlay et formulaire */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Overlay flouté */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              style={{ zIndex: 10000 }}
            />

            {/* Formulaire centré */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[300px]"
              style={{ zIndex: 10001 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* En-tête */}
                <div className="bg-[#b7cc43] p-6 text-center relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </motion.button>

                  <h3 className="text-2xl font-bold text-white font-waffle-soft">
                    {isSubmitted ? "Code envoyé ! 🎉" : "10 % de réduction 🧡"}
                  </h3>
                  <p className="text-white/90 mt-1 font-glacial-indifference">
                    {isSubmitted
                      ? "Vérifiez votre boîte mail"
                      : "sur votre première commande"}
                  </p>
                </div>

                {/* Contenu du formulaire */}
                <div className="p-6">
                  {!isSubmitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D68E54] focus:border-transparent transition-all duration-200 font-glacial-indifference"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#BE356A] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl font-waffle-soft"
                      >
                        Je reçois mon code
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center font-glacial-indifference">
                        En cliquant ci-dessus, vous acceptez de recevoir des
                        messages élèctronique de notre part. Vous pourrez vous désinscrire à
                        tout moment.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-4"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl mb-4"
                      >
                        🎁
                      </motion.div>
                      <p className="text-green-600 font-semibold font-glacial-indifference">
                        Votre code de réduction a été envoyé à {email}
                      </p>
                      <p className="text-gray-600 text-sm mt-2 font-glacial-indifference">
                        Redirection vers la boutique...
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingGift;
