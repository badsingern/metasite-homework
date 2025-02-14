import React from 'react'
import { useGetContactById } from '../../hooks/use-get-contact-by-id.ts'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import userpic from '../../assets/userpic.png'
import styled from '@emotion/styled'

const TitleColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const ValueColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Container = styled.div`
    display: flex;
    gap: 35px;
    justify-content: center;
`

interface Props {
    contactId: string
}

export const ContactCard: React.FC<Props> = ({ contactId }) => {
    const { contact } = useGetContactById(contactId)
    return contact ? (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardMedia
                component="img"
                alt="hill"
                height="200"
                image={userpic}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {contact.name} {contact.surname}
                </Typography>
                <Container>
                    <TitleColumn>
                        <Typography variant="body2">Name:</Typography>
                        <Typography variant="body2">City:</Typography>
                        <Typography variant="body2">Email:</Typography>
                        <Typography variant="body2">Phone:</Typography>
                    </TitleColumn>
                    <ValueColumn>
                        <Typography variant="body2">
                            {contact.name} {contact.surname}
                        </Typography>
                        <Typography variant="body2">{contact.city}</Typography>
                        <Typography variant="body2">{contact.email}</Typography>
                        <Typography variant="body2">{contact.phone}</Typography>
                    </ValueColumn>
                </Container>
            </CardContent>
        </Card>
    ) : null
}
