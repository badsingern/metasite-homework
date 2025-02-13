import React from 'react'
import { useGetContactById } from '../../hooks/use-get-contact-by-id.ts'
import { Paper } from '@mui/material'

interface Props {
    contactId: string
}

export const ContactCard: React.FC<Props> = ({ contactId }) => {
    const { contact } = useGetContactById(contactId)
    return (
        <Paper>
            {contact ? (
                <div>
                    <p>{contact.name}</p>
                    <p>{contact.surname}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            ) : null}
        </Paper>
    )
}
