import React from 'react'
import { GridColDef } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MenuIcon from '@mui/icons-material/Menu'
import { Checkbox, FormControlLabel, FormGroup, Menu } from '@mui/material'

export const createContactsTableColumns = ({
    anchorEl,
    handleClose,
    handleClick,
    open,
    columnsVisibility,
    toggleColumnVisibility,
}: {
    anchorEl: HTMLElement | null
    handleClose: () => void
    open: boolean
    handleClick: React.MouseEventHandler
    columnsVisibility: {
        name: boolean
        city: boolean
        email: boolean
        phone: boolean
    }
    toggleColumnVisibility: (event: React.FormEvent<HTMLInputElement>) => void
}): GridColDef[] => [
    {
        field: 'name',
        headerName: 'Name',
        headerClassName: 'contacts-app-theme--header',
        flex: 4,
        disableColumnMenu: true,
        valueGetter: (_, row) => `${row.name || ''} ${row.surname || ''}`,
    },
    {
        field: 'city',
        headerName: 'City',
        headerClassName: 'contacts-app-theme--header',
        flex: 4,
        disableColumnMenu: true,
    },
    {
        field: 'isActive',
        headerName: 'Is Active',
        headerClassName: 'contacts-app-theme--header',
        type: 'number',
        flex: 1,
        renderHeader: () => <VisibilityIcon />,
        renderCell: (params) => {
            return params.value ? <VisibilityIcon /> : null
        },
        disableColumnMenu: true,
        sortable: false,
    },
    {
        field: 'email',
        headerName: 'Email',
        headerClassName: 'contacts-app-theme--header',
        sortable: false,
        flex: 4,
        disableColumnMenu: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        headerClassName: 'contacts-app-theme--header',
        sortable: false,
        flex: 4,
        disableColumnMenu: true,
    },
    {
        field: 'columnShow',
        headerName: 'Column Show',
        headerClassName: 'contacts-app-theme--header',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
        renderHeader: () => (
            <>
                <MenuIcon onClick={handleClick} />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <FormGroup
                        onChange={toggleColumnVisibility}
                        sx={{ padding: 1 }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox checked={columnsVisibility.name} />
                            }
                            name="name"
                            label="Name"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={columnsVisibility.city} />
                            }
                            name="city"
                            label="City"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={columnsVisibility.email} />
                            }
                            name="email"
                            label="Email"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={columnsVisibility.phone} />
                            }
                            name="phone"
                            label="Phone"
                        />
                    </FormGroup>
                </Menu>
            </>
        ),
    },
]
