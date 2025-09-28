import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/legal/remboursement')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/legal/remboursement"!</div>
}
