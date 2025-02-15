import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from './components/header/header.tsx'
import { Content } from './components/content/content.tsx'
import { useContactsStore } from './stores/use-contacts-store.ts'
import { useEffect } from 'react'

function App() {
    const theme = createTheme({
        typography: {
            fontSize: 12,
        },
        palette: {
            primary: {
                main: '#1EE9B6',
            },

            secondary: {
                main: '#fff',
            },
            info: {
                main: '#0d47a1',
                '700': '#1665c0',
            },
        },
    })

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

export default App
