import './App.css'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
    const theme = createTheme({
        typography: {
            fontSize: 12,
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained">Button primary</Button>
        </ThemeProvider>
    )
}

export default App
