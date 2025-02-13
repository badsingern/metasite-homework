import { Contact } from '../models/contact.ts'

const BASE_URL = 'https://frontend-task-api.metasite.lt/api/contacts'

export const getContacts = async (): Promise<Contact[]> => {
    const response = await fetch(BASE_URL)

    if (response.ok) {
        return response.json()
    }

    throw new Error(response.status.toString())
}

export const getContact = async (id: string): Promise<Contact> => {
    const response = await fetch(`${BASE_URL}/${id}`)

    if (response.ok) {
        return response.json()
    }

    throw new Error(response.status.toString())
}
