"use client"
import React, { useState } from 'react'
import TableSpanning from '../TableSpanning'
import CardDaisy from '../CardDaisy'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { monthlyInvoiceDetails } from '@/actions';

const InvoiceReciept = () => {

  const [loader, setLoader] = useState(false);
  const result = monthlyInvoiceDetails();
  console.log(result);
  const handlePrint = () => {
    const fileNameFormat = `WDT-Invoice-${result.month}-${result.year}.pdf`
    downloadPDF(fileNameFormat);
  };

  const downloadPDF = (name: string) => {
    const capture = document.querySelector(".actual-receipt") as HTMLElement;
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save(name);
    });
  };
  return (
    <div className="reciept my-2.5">
    <div className="actual-receipt">

      <CardDaisy>
        <div className="logo text-center">
          <p className="font-bold">Invoice Receipt</p>
        </div>
        <div className="text-right my-4">
          <p className="font-bold">WIREDEVTEAM</p>
          <p>8 Warzwaka, Wlocalwek</p>
          <p>NIP: 5273019432</p>
          <p>Phone: +48-506-276-408</p>
        </div>
        <div className="text-right">
          <p className="font-bold">Invoice</p>
          <p>Date: {`${result.days}/${result.month}/${result.year}`}</p>
          <p>Number: {`${result.month}${result.days}${result.year}`}</p>
          <p>NIP: 5273019432</p>
        </div>
        <div className="mt-4 mb-2">
          <p className="font-bold">Bill To: </p>
          <p className="font-bold">Collabera Poland sp</p>
          <p>ul Postepu 15, 02-278, Warszawa, Polska</p>
          <p>NIP: 5252678170</p>
        </div>

        <div className="">
          <TableSpanning result={result}></TableSpanning>
        </div>
      </CardDaisy>
    </div>
    <div className="flex justify-end m-2 p-2">
      {loader ? (
        <span className="loading loading-bars loading-md"></span>
      ) : (
        <button className="btn btn-primary" onClick={handlePrint}>
          Print
        </button>
      )}
    </div>
    </div>
  )
}

export default InvoiceReciept