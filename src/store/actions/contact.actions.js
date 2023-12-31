
import { SET_CONTACT, SET_IS_LOADING } from "../reducers/contact.reducer.js"
import { contactService } from "../../services/contact.service.js"
import { store } from "../store.js"

export async function loadContacts() {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    try {
        const contacts = await contactService.query({})
        store.dispatch({ type: SET_CONTACT, contacts })
    }
    catch (err) {
        console.log('contact action -> Cannot load contact', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}
