"use client"
import * as React from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';

interface DataTableType<T = any> {
  columns: GridColDef[],
  rows: T[]
}

export default function DataTable({columns, rows}: DataTableType) {
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
