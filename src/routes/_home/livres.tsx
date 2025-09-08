import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/livres')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/livres"!</div>
}
