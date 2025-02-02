import { GridColDef } from "@mui/x-data-grid";

export const columnsCompany: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'nip', headerName: 'Nip', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    // {
    //   field: 'payRate',
    //   headerName: 'Pay Rate(Hourly)',
    //   type: 'number',
    //   width: 200,
    // },
  ];


  export const columnsContracts: GridColDef[] = [
    { field: 'type', headerName: 'type', width: 200 },
    { field: 'companyNip', headerName: 'Nip', width: 200 },
    { field: 'clientCompanyNip', headerName: 'clientNip', width: 200 },
    { field: 'wagesPerHour', headerName: 'wagesPerHour', width: 200 },
    { field: 'duration', headerName: 'duration', width: 200 },
    { field: 'dailyHours', headerName: 'dailyHours', width: 200 },

    

    

    
    // {
    //   field: 'payRate',
    //   headerName: 'Pay Rate(Hourly)',
    //   type: 'number',
    //   width: 200,
    // },
  ];

  export const columnsBankAccount: GridColDef[] = [
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'accountName', headerName: 'Account Name', width: 200 },
    { field: 'accountNumber', headerName: 'Account Number', width: 200 },
    { field: 'companyId', headerName: 'companyId', width: 200 },
    { field: 'userId', headerName: 'userId', width: 200 },
  ];