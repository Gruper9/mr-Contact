import { ContactPreview } from "./ContactPreview"

export function ConatactList({ contacts }) {
  return (
    <section>
      <h1>Contancts List</h1>
      <ContactPreview {...{ contacts }} />
    </section>
  )
}
