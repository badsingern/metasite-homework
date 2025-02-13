import { Contact } from '../api/models/contact.ts'
import { create } from 'zustand/react'
import { getContacts } from '../api/services/get-contacts.ts'

interface ContactsState {
    contacts: Contact[]
    fetchContacts: () => Promise<void>
    setFilter: (filter: {
        name: string
        city: string
        isActive: boolean | undefined
    }) => void
    filter: { name: string; city: string; isActive: boolean | undefined }
}

export const useContactsStore = create<ContactsState>((set) => ({
    contacts: [],
    filter: { city: '', name: '', isActive: undefined },
    fetchContacts: async () => {
        try {
            const response = await getContacts()

            set({ contacts: response })
        } catch {
            /* empty */
        }
    },
    setFilter: (filter) => set(() => ({ filter })),
}))
