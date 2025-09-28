import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/legal/livraison')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/legal/livraison"!</div>
}
