import { utilService } from "./utils.service.js"
import { storageService } from "./async-storage.service.js"

const CONTACT_KEY = "contactDB"
_createContacts()

export const contactService = {
  query,
  get,
  remove,
  save,
  getEmptyContact,
  getNextContactId,
  getFilterBy,
  setFilterBy,
  getDefaultFilter,
}

function query(filterBy) {
  return storageService.query(CONTACT_KEY).then((contacts) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, "i")
      contacts = contacts.filter((contact) => regex.test(contact.title))
    }
    if (filterBy.price) {
      contacts = contacts.filter(
        (contact) => contact.listPrice.amount >= filterBy.price
      )
    }
    if (filterBy.publishedDate) {
      contacts = contacts.filter(
        (contact) => contact.publishedDate >= filterBy.publishedDate
      )
    }

    return contacts
  })
}

function get(contactId) {
  return storageService.get(CONTACT_KEY, contactId)
}

function remove(contactId) {
  return storageService.remove(CONTACT_KEY, contactId)
}

function save(contact) {
  if (contact.id) {
    return storageService.put(CONTACT_KEY, contact)
  } else {
    return storageService.post(CONTACT_KEY, contact)
  }
}

function getEmptyContact(title = "", price = 0) {
  return { id: "", name="" }
}

function getFilterBy() {
  return { ...filterBy }
}

function setFilterBy(filterBy = {}) {
  if (filterBy.txt !== undefined) filterBy.txt = filterBy.txt
  if (filterBy.price !== undefined) filterBy.price = filterBy.price
  if (filterBy.publishedDate !== undefined)
    filterBy.publishedDate = filterBy.publishedDate
  return filterBy
}
function getDefaultFilter() {
  return { name: "" }
}

function getNextContactId(contactId) {
  return storageService.query(CONTACT_KEY).then((contacts) => {
    let nextContactIdx =
      contacts.findIndex((contact) => contact.id === contactId) + 1
    if (nextContactIdx === contacts.length) nextContactIdx = 0
    return contacts[nextContactIdx].id
  })
}
function _createContacts() {
  let contacts = utilService.loadFromStorage(CONTACT_KEY)
  if (!contacts || !contacts.length) {
    contacts = []
  }
  utilService.saveToStorage(CONTACT_KEY, contacts)
}
