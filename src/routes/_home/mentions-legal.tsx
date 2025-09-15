import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/mentions-legal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/mentions-legal"!</div>
}
