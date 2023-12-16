"use client"
import * as React from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'nip',
    headerName: 'NIP',
  },
  {
    field: 'payRate',
    headerName: 'Pay Rate(Hourly)',
    type: 'number',
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', nip: 357232382, payRate: 125,  },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
