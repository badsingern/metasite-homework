import React, { useCallback, useState } from 'react'

export const useContactsTableColumnVisibility = () => {
    const [columnsVisibility, setColumnsVisibility] = useState({
        name: true,
        city: true,
        email: true,
        phone: true,
    })

    const toggleColumnVisibility = useCallback(
        (ev: React.FormEvent<HTMLInputElement>) => {
            if (!ev.nativeEvent.target) {
                return
            }

            if ('checked' in ev.nativeEvent.target) {
                const element = ev.nativeEvent.target as HTMLInputElement
                setColumnsVisibility((values) => ({
                    ...values,
                    [element.name]: element.checked,
                }))
            }
        },
        []
    )

    return { columnsVisibility, toggleColumnVisibility }
}
