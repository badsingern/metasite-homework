import { Contact } from '../api/models/contact.ts'
import { create } from 'zustand/react'
import { getContacts } from '../api/services/get-contacts.ts'

export interface FilterState {
    name: string
    city: string
    isActive: boolean
}

interface ContactsState {
    contacts: Contact[]
    fetchContacts: () => Promise<void>
    setFilter: (filter: FilterState) => void
    filter: FilterState
}

export const useContactsStore = create<ContactsState>((set) => ({
    contacts: [],
    filter: { city: '', name: '', isActive: false },
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
