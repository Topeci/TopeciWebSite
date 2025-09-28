import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/commande')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/commande"!</div>
}
