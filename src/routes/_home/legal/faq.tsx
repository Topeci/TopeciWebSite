import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/legal/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-[#4E6FA7] font-waffle-soft mb-4">
          Foire Aux Questions (FAQ)
        </h1>
        <div className="w-24 h-1 bg-[#D68E54] mx-auto mb-6" />
        <p className="text-gray-600">
          Retrouvez ici les réponses aux questions les plus fréquentes sur
          TOPECI.
        </p>
      </div>

      {/* Questions / Réponses */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#4E6FA7]">
            1. Comment créer un compte TOPECI ?
          </h2>
          <p className="text-gray-700 mt-2">[Réponse à insérer ici]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#4E6FA7]">
            2. Quels moyens de paiement acceptez-vous ?
          </h2>
          <p className="text-gray-700 mt-2">[Réponse à insérer ici]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#4E6FA7]">
            3. Comment accéder à mes livres numériques ?
          </h2>
          <p className="text-gray-700 mt-2">[Réponse à insérer ici]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#4E6FA7]">
            4. Est-il possible de demander un remboursement ?
          </h2>
          <p className="text-gray-700 mt-2">[Réponse à insérer ici]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#4E6FA7]">
            5. Comment contacter le support client ?
          </h2>
          <p className="text-gray-700 mt-2">[Réponse à insérer ici]</p>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
