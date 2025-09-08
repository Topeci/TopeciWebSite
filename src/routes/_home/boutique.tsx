import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/boutique')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/boutique"!</div>
}
