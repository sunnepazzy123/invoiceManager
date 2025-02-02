"use client"
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles/table.scss";
import { v4 as uuidv4 } from 'uuid';
import { currencyFormat, toWordsCustom } from "@/actions";
import { ICalendarInvoice } from "@/actions/invoiceHelpers";
import Image from 'next/image'

type InvoiceCalenderType = {
    result: ICalendarInvoice
}

export default function SpanningTable({result}: InvoiceCalenderType) {

  const amountInWords = toWordsCustom('pln').convert(result.monthlyWages)


  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        className="table-wrapper"
        aria-label="spanning table"
        >
        <TableHead>
          <TableRow className="">
            <TableCell className="table-cell" align="left" colSpan={2}>
              For the services of contractor name
            </TableCell>
            <TableCell className="table-cell" colSpan={2} align="right">
              FullStack Developer
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table-cell" colSpan={2} align="left">
              Client Name
            </TableCell>
            <TableCell align="right" className="table-cell-bottom table-cell" colSpan={2}>
              Sunday Odibo
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table-cell" colSpan={2} align="left">
              Email
            </TableCell>
            <TableCell align="right" className="table-cell-bottom table-cell" colSpan={2}>
              sunnepazzy123@gmail.com
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table-cell-right text-center">
              <p>For The Period</p>
              <p>Week Ended</p>
            </TableCell>
            <TableCell className="table-cell-right text-center" align="right">
              Number of Units
            </TableCell>
            <TableCell className="table-cell-right text-center" align="right">
              Pay Rates
            </TableCell>
            <TableCell className="table-cell" align="right">
              <p>Amount</p>
              <p>{"(Enter Currency: PLN)"}</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(result.weeklyHoursTotal).map(([key, value]) => (
            
            <TableRow key={uuidv4()}>
              <TableCell className="table-cell text-center">{value.weekendDate}</TableCell>
              <TableCell className="table-cell text-center" align="right">
                {value.weeklyHours}{`${' (8hrs*'}${value.weeklyHours/8} Days)`}
              </TableCell>
              <TableCell className="table-cell text-center" align="right">
                {value.wagesPerHour}
              </TableCell>
              <TableCell className="table-cell text-center" align="right">
                {currencyFormat(value.weeklyWages)}
              </TableCell>
            </TableRow>
          )
          
          )}

            <TableRow>
              <TableCell className="table-cell"></TableCell>
              <TableCell className="table-cell" align="right">
                
              </TableCell>
              <TableCell className="table-cell" align="right">
         
              </TableCell>
              <TableCell className="table-cell" align="right">
       
              </TableCell>
            </TableRow>


            <TableRow className="table-row">
            <TableCell className="table-cell-x table-cell-bottom">Amount In Words</TableCell>
            <TableCell className="table-cell-right" align="right" style={{width: '380px'}}>{amountInWords}</TableCell>
            <TableCell className="table-cell">{'Invoice Total (PLN)'}</TableCell>
            <TableCell className="table-cell" align="right">{currencyFormat(result.monthlyWages)}</TableCell>
          </TableRow>


          <TableRow className="table-row">
            <TableCell className="table-cell-bottom table-cell-left">Account Name</TableCell>
            <TableCell className="table-cell-bottom table-cell-x" colSpan={3} align="right">{'WIREDEVTEAM SPZOO'}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell className="table-cell-bottom table-cell-left">Account Number</TableCell>
            <TableCell className="table-cell-bottom table-cell-x" colSpan={3} align="right">{'41 1140 2004 0000 3102 8364 9013'}</TableCell>
          </TableRow>

          <TableRow className="table-row">
            <TableCell className="table-cell-bottom table-cell-x" colSpan={1}>Bank Name</TableCell>
            <TableCell className="table-cell-bottom table-cell" colSpan={3} align="right">{'MBank'}</TableCell>
          </TableRow>

          <TableRow className="table-row">
            <TableCell className="table-cell-bottom table-cell-x" colSpan={1}>Signature</TableCell>
            <TableCell className="table-cell-bottom table-cell" colSpan={3} align="right">
              <span className="flex justify-end">
              <Image src="/signature.jpg" alt="sig" height={80} width={80} />

              </span>
              
            </TableCell>

          </TableRow>

        </TableBody>

      </Table>
    </TableContainer>
  );
}
