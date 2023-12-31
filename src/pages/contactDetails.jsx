
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { contactService } from "../services/contact-service.js"


export function ToyDetails() {
    const { contactId } = useParams()
    const [contact, setContact] = useState(null)


    useEffect(() => {
        loadConstact()
    }, [contactId])


    async function loadConstact() {
        try {
            const contact = await contactService.get(contactId)
            setContact(contact)
        }
        catch (err) {
            console.log('Had issues in contact details', err)
        }
    }


    if (!contact) return <div>Loading... </div>
    return (
        <section className="contact-details">
            <h1>{contact.name}</h1>
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!</p>
        </section>
    )

}