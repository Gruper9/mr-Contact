import { contactService } from "../services/contact-service"
const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React


export function CarEdit() {
    const [contactToEdit, setContactToEdit] = useState(contactService.getEmptyContact())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.contactId) {
            loadContact()
        }
    }, [])

    async function loadContact() {
        try {
            const contact = await contactService.get(params.contactId)
            setContactToEdit(contact)
        }
        catch (err) {
            console.log('err:', err)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value


        setCarToEdit(prevContact => ({ ...prevContact, [field]: value }))
    }

    function onSaveContact(ev) {
        ev.preventDefault()
        try {
            contactService.save(contactToEdit)
            navigate('/contact')
        }
        catch (err) {
        } console.log('err:', err)

    }

    const { name } = contactToEdit
    return (
        <section className="contact-edit">
            <h1>edit contact</h1>
            <form onSubmit={onSaveContact}>
                <label htmlFor="name">name</label>
                <input onChange={handleChange} value={name} type="text" name="name" id="name" />
            </form>
        </section>
    )
}