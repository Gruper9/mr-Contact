import { useEffect } from "react"
import { loadContacts } from "../store/actions/contact.actions"
import { ConatactList } from "../cmps/ConatactList"

export function ContactIndex() {
  useEffect(() => {
    try {
      loadContacts()
    } catch {
      console.log("Something went wrong,try again")
    }
  }, [])
}
return (
  <div>
    <ConatactList />
  </div>
)
