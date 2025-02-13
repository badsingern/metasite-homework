import React, { useState } from 'react'
import { ContactsTable } from '../contacts-table/contacts-table.tsx'
import { ContactCard } from '../contact-card/contact-card.tsx'
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: -20px;
    padding: 0 24px;
`

export const Content: React.FC = () => {
    const [selectedContactId, setSelectedContactId] = useState<string>()

    return (
        <Container>
            <ContactsTable onSelect={(id) => setSelectedContactId(id)} />
            {selectedContactId && <ContactCard contactId={selectedContactId} />}
        </Container>
    )
}
