import { useCallback, useEffect, useState } from 'react'
import { getContact } from '../api/services/get-contacts.ts'
import { Contact } from '../api/models/contact.ts'

export const useGetContactById = (id: string) => {
    const [contact, setContact] = useState<Contact>()

    const getContactById = useCallback(async (): Promise<void> => {
        try {
            const response = await getContact(id)
            setContact(response)
        } catch {
            setContact(undefined)
        }
    }, [id])

    useEffect(() => {
        getContactById()
    }, [getContactById])

    return { contact }
}
