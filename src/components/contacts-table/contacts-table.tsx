import React, { useCallback, useState } from 'react'
import { Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { createContactsTableColumns } from './contacts-table-columns.tsx'
import { useContactsTableRows } from './hooks/use-contacts-table-rows.ts'
import { useContactsTableColumnVisibility } from './hooks/use-contacts-table-column-visibility.ts'

const tableContainerCustomStyles = {
    height: '100%',
    '.contacts-app-theme--header': {
        backgroundColor: '#2196F3',
        color: 'white',
    },
}

interface Props {
    onSelect: (id: string) => void
}
export const ContactsTable: React.FC<Props> = ({ onSelect }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget)
        },
        []
    )
    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const rows = useContactsTableRows()
    const { columnsVisibility, toggleColumnVisibility } =
        useContactsTableColumnVisibility()

    const columns = React.useMemo(() => {
        return createContactsTableColumns({
            anchorEl,
            handleClose,
            handleClick,
            open,
            columnsVisibility,
            toggleColumnVisibility,
        })
    }, [
        anchorEl,
        handleClose,
        handleClick,
        open,
        columnsVisibility,
        toggleColumnVisibility,
    ])

    return (
        <Paper sx={tableContainerCustomStyles}>
            <DataGrid
                rows={rows}
                rowSelection={true}
                onRowClick={(value) => onSelect(value.id.toString())}
                columnVisibilityModel={columnsVisibility}
                columns={columns}
                sx={{ border: 0, width: 1000 }}
            />
        </Paper>
    )
}
