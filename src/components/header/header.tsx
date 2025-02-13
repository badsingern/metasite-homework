import styled from '@emotion/styled'
import React from 'react'
import { Filter } from '../filter/filter.tsx'

const Title = styled.div`
    background-color: #0d47a1;
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: left;
    padding: 16px 24px;
`

const Content = styled.div`
    padding: 24px;
    background-color: #1665c0;
    height: 100px;
`

const Header: React.FC = () => {
    return (
        <>
            <Title>CONTACTIFY</Title>
            <Content>
                <Filter />
            </Content>
        </>
    )
}

export default Header
