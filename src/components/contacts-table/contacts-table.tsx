import React, { useMemo } from 'react'
import { Paper } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MenuIcon from '@mui/icons-material/Menu'
import { useContactsStore } from '../../stores/use-contacts-store.ts'

const tableContainerCustomStyles = {
    height: '100%',
    '.contacts-app-theme--header': {
        backgroundColor: '#2196F3',
        color: 'white',
    },
}

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        headerClassName: 'contacts-app-theme--header',
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'city',
        headerName: 'City',
        headerClassName: 'contacts-app-theme--header',
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'isActive',
        headerName: 'Is Active',
        headerClassName: 'contacts-app-theme--header',
        type: 'number',
        width: 30,
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
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        headerClassName: 'contacts-app-theme--header',
        sortable: false,
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'columnShow',
        headerName: 'Column Show',
        headerClassName: 'contacts-app-theme--header',
        sortable: false,
        width: 40,
        renderHeader: () => <MenuIcon />,
    },
]

interface Props {
    onSelect: (id: string) => void
}
export const ContactsTable: React.FC<Props> = ({ onSelect }) => {
    const { filter, contacts } = useContactsStore()

    const rows = useMemo(
        () =>
            filter.name || filter.city || filter.isActive !== undefined
                ? contacts.filter(
                      (contact) =>
                          contact.city === filter.city &&
                          contact.name
                              .toLowerCase()
                              .includes(filter.name.toLowerCase()) &&
                          contact.isActive === filter.isActive
                  )
                : contacts,
        [contacts, filter]
    )
    return (
        <Paper sx={tableContainerCustomStyles}>
            <DataGrid
                rows={rows}
                rowSelection={true}
                onRowClick={(value) => onSelect(value.id.toString())}
                columns={columns}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}
