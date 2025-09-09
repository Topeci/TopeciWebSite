import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/panier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/panier"!</div>
}
