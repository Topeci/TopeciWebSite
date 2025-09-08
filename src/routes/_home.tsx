import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Route = createFileRoute('/_home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
