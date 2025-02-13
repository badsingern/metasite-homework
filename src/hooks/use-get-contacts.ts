import { useCallback, useEffect, useState } from 'react'
import { Contact } from '../api/models/contact.ts'
import { getContacts } from '../api/services/get-contacts.ts'

export const useGetContacts = () => {
    const [contacts, setContacts] = useState<Contact[]>()
    const getContactList = useCallback(async (): Promise<void> => {
        try {
            const response = await getContacts()
            setContacts(response)
        } catch {
            setContacts([])
        }
    }, [])

    useEffect(() => {
        getContactList()
    }, [getContactList])

    return { contacts }
}
