import CardDaisy from "@/components/CardDaisy";
import DataTable from "@/components/Table/DataTable";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-3">
      <CardDaisy>
        <h2>List of Contracts</h2>
        <DataTable />
      </CardDaisy>
      </div>

    </div>
  );
};

export default Page;
