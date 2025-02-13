import React from 'react'
import { Paper } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MenuIcon from '@mui/icons-material/Menu'
import { useGetContacts } from '../../hooks/use-get-contacts.ts'

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
    const { contacts } = useGetContacts()
    return (
        <Paper sx={{ height: '100%' }}>
            <DataGrid
                rows={contacts}
                rowSelection={true}
                onRowClick={(value) => onSelect(value.id.toString())}
                columns={columns}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}
