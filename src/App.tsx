import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Content } from './components/content/content.tsx'
import { useContactsStore } from './stores/use-contacts-store.ts'
import { useEffect } from 'react'
import { Header } from './components/header/header.tsx'

const theme = createTheme({
    typography: {
        fontSize: 12,
    },
    palette: {
        primary: {
            main: '#1EE9B6',
        },

        secondary: {
            main: '#F9FAFB',
        },
        info: {
            main: '#0d47a1',
            light: '#1665c0',
        },
    },
})

export const App: React.FC = () => {
    const { fetchContacts } = useContactsStore()

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Content />
        </ThemeProvider>
    )
}
