import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/privacy"!</div>
}
