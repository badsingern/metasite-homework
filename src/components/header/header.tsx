import styled from '@emotion/styled'
import React from 'react'
import { Filter } from '../filter/filter.tsx'
import { Theme, Typography } from '@mui/material'

const Title = styled.div`
    background-color: ${({ theme }: { theme?: Theme }) =>
        theme?.palette.info.main};
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: left;
    padding: 16px 24px;
    box-sizing: border-box;
`

const Content = styled.div`
    padding: 24px;
    background-color: ${({ theme }: { theme?: Theme }) =>
        theme?.palette.info.light};
    height: 100px;
`

export const Header: React.FC = () => {
    return (
        <>
            <Title>
                <Typography variant="h2" fontWeight="600">
                    CONTACTIFY
                </Typography>
            </Title>
            <Content>
                <Filter />
            </Content>
        </>
    )
}
