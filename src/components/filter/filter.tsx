import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Button, Checkbox, FormControlLabel, MenuItem } from '@mui/material'
import {
    FilterState,
    useContactsStore,
} from '../../stores/use-contacts-store.ts'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { FilterInput } from './filter-input.tsx'

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

    const [filterValues, setFilterValues] = useState<FilterState>({
        name: '',
        city: '',
        isActive: false,
    })

    return (
        <Container>
            <FilterInput
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
            <FilterInput
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
            </FilterInput>
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
