import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/aide-faq"!</div>
}
