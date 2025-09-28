import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/legal/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-[#4E6FA7] font-waffle-soft mb-4">
          Politique de confidentialité
        </h1>
        <div className="w-24 h-1 bg-[#D68E54] mx-auto mb-6"></div>
      </div>
    </div>
  );
}
