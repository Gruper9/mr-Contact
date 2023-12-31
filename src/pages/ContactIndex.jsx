import { useEffect } from "react"
import { loadContacts } from "../store/actions/contact.actions"

export function ContactIndex() {
  useEffect(() => {
    try {
      loadContacts()
    } catch {
      console.log("Something went wrong,try again")
    }
  }, [])
}
return <div>hey</div>
