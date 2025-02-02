import { getContracts } from "@/actions/contract";
import CardDaisy from "@/components/CardDaisy";
import LinkButton from "@/components/LinkButton";
import DataTable from "@/components/Table/DataTable";
import { columnsContracts } from "@/components/Table/companyColumn";
import { paths } from "@/helpers/path";
import { IContract } from "@/interfaces";
import React from "react";

const Page = async () => {

  const contracts = await getContracts<IContract[]>()
  return (
    <div className="flex items-center justify-center">
      <div className="my-3 min-w-[1000px]">
      <CardDaisy>
      <div className="flex justify-between items-center">
            <h2>List of Contracts</h2>
            <LinkButton name="Create" linkPath={paths.contractPage("create")} />
          </div>
          <DataTable columns={columnsContracts} rows={contracts} />
      </CardDaisy>
      </div>

    </div>
  );
};

export default Page;
