import './App.css'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from './components/header/header.tsx'

function App() {
    const theme = createTheme({
        typography: {
            fontSize: 12,
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Button variant="contained">Button primary</Button>
        </ThemeProvider>
    )
}

export default App
