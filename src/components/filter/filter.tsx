import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField as MuiTextField,
} from '@mui/material'
import { useContactsStore } from '../../stores/use-contacts-store.ts'
import VisibilityIcon from '@mui/icons-material/Visibility'

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

const checkboxCustomStyles = {
    color: 'primary.main',
    '&.Mui-checked': {
        color: 'primary.main',
    },
}

const buttonCustomStyles = {
    backgroundColor: 'primary.main',
    height: '36px',
    color: 'black',
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const TextField = styled(MuiTextField)`
    width: 300px;
`

const CheckboxLabelContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Filter: React.FC = () => {
    const { setFilter, contacts } = useContactsStore()
    const cityOptions = useMemo(
        () => contacts.map((contact) => contact.city),
        [contacts]
    )

    const [filterValues, setFilterValues] = useState<{
        name: string
        city: string
        isActive: boolean | undefined
    }>({ name: '', city: '', isActive: false })
    return (
        <Container>
            <TextField
                sx={textFieldCustomStyles}
                label="Name"
                variant="outlined"
                value={filterValues.name}
                onChange={(value) =>
                    setFilterValues((state) => ({
                        ...state,
                        name: value.target.value,
                    }))
                }
            />
            <TextField
                sx={textFieldCustomStyles}
                label="City"
                select
                variant="outlined"
                value={filterValues.city}
                onChange={(value) =>
                    setFilterValues((state) => ({
                        ...state,
                        city: value.target.value,
                    }))
                }
            >
                {cityOptions.map((city, index) => (
                    <MenuItem key={index} value={city}>
                        {city}
                    </MenuItem>
                ))}
            </TextField>
            <FormControlLabel
                control={
                    <Checkbox
                        size="large"
                        checked={filterValues.isActive}
                        onChange={(value) =>
                            setFilterValues((state) => ({
                                ...state,
                                isActive: value.target.checked,
                            }))
                        }
                        sx={checkboxCustomStyles}
                    />
                }
                label={
                    <CheckboxLabelContainer>
                        Show Active <VisibilityIcon />
                    </CheckboxLabelContainer>
                }
                sx={{
                    color: 'secondary.main',
                }}
            />
            <Button
                variant="contained"
                sx={buttonCustomStyles}
                onClick={() => {
                    setFilter(filterValues)
                }}
            >
                FILTER
            </Button>
        </Container>
    )
}
