import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Product', width: 130 },
  { field: 'lastName', headerName: 'Product Name', width: 130 },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Buy',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, ProductName: 'Snow', Product: 'Jon', Price: 35 ,Buy:'BUY-NOW'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Price: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Price: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', Price: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Price: null },
  { id: 6, lastName: 'Melisandre', firstName: null, Price: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Price: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Price: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Price: 65 },
];

function Cart() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
  )
}

export default Cart