import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import styled from '@emotion/styled'

const textFieldCustomStyles = {
    '& .MuiOutlinedInput-root': {
        color: 'secondary.main',
        fontWeight: 'bold',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.main',
            borderWidth: '1px',
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'secondary.main',
                borderWidth: '1px',
            },
        },
        '&:hover:not(.Mui-focused)': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'secondary.main',
            },
        },
    },
    '& .MuiInputLabel-outlined': {
        color: 'secondary.main',
        fontWeight: 'bold',
        '&.Mui-focused': {
            color: 'secondary.main',
            fontWeight: 'bold',
        },
    },
    '.MuiSvgIcon-root ': {
        color: 'secondary.main',
        fill: 'secondary.main',
    },
}

const TextField = styled(MuiTextField)`
    width: 216px;
`

export const FilterInput: React.FC<TextFieldProps> = (props) => {
    return <TextField {...props} sx={textFieldCustomStyles} />
}
