import { useContactsStore } from '../../../stores/use-contacts-store.ts'
import { useMemo } from 'react'

export const useContactsTableRows = () => {
    const { filter, contacts } = useContactsStore()

    return useMemo(
        () =>
            filter.name || filter.city || filter.isActive
                ? contacts.filter((contact) => {
                      const cityFilter = filter.city
                          ? contact.city === filter.city
                          : true

                      const nameFilter = contact.name
                          .toLowerCase()
                          .includes(filter.name.toLowerCase())

                      const activeFilter = filter.isActive
                          ? contact.isActive === filter.isActive
                          : true

                      return cityFilter && nameFilter && activeFilter
                  })
                : contacts,
        [contacts, filter]
    )
}
