import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/cookies')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/cookies"!</div>
}
