import React, { useMemo } from 'react'
import { Paper } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MenuIcon from '@mui/icons-material/Menu'
import { useContactsStore } from '../../stores/use-contacts-store.ts'

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200, disableColumnMenu: true },
    { field: 'city', headerName: 'City', width: 200, disableColumnMenu: true },
    {
        field: 'isActive',
        headerName: 'Is Active',
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
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        disableColumnMenu: true,
    },
    {
        field: 'columnShow',
        headerName: 'Column Show',
        description: 'This column has a value getter and is not sortable.',
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
        <Paper sx={{ height: '100%' }}>
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
