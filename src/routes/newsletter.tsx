import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter")({
  component: Newsletter,
});

function Newsletter() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <h1 className="text-2xl font-semibold">Newsletter</h1>
      <p className="mt-2">Page en cours de construction.</p>
    </div>
  );
}
export default Newsletter;