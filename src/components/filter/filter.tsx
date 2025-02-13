import React from 'react'
import styled from '@emotion/styled'
import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField as MuiTextField,
} from '@mui/material'

const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            borderWidth: '1px',
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                borderWidth: '1px',
            },
        },
        '&:hover:not(.Mui-focused)': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
        },
    },
    '& .MuiInputLabel-outlined': {
        color: 'white',
        fontWeight: 'bold',
        '&.Mui-focused': {
            color: 'white',
            fontWeight: 'bold',
        },
    },
    '.MuiSvgIcon-root ': {
        color: 'white',
        fill: 'white',
    },
}

const Container = styled.div`
    display: flex;
    gap: 20px;
`

const TextField = styled(MuiTextField)`
    width: 300px;
`

export const Filter: React.FC = () => {
    return (
        <Container>
            <TextField
                sx={textFieldStyles}
                label="Outlined"
                variant="outlined"
            />
            <TextField
                sx={textFieldStyles}
                label="Outlined"
                select
                variant="outlined"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            <FormControlLabel
                control={
                    <Checkbox
                        size="large"
                        sx={{
                            color: '#1EE9B6',
                            '&.Mui-checked': {
                                color: '#1EE9B6',
                            },
                        }}
                    />
                }
                label="Label"
                sx={{
                    color: 'white',
                }}
            />
            <Button
                variant="contained"
                sx={{ backgroundColor: '#1EE9B6', color: 'black' }}
            >
                FILTER
            </Button>
        </Container>
    )
}
