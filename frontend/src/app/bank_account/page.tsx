import { getBankAccounts } from "@/actions/contract";
import CardDaisy from "@/components/CardDaisy";
import LinkButton from "@/components/LinkButton";
import DataTable from "@/components/Table/DataTable";
import { columnsBankAccount } from "@/components/Table/companyColumn";
import { paths } from "@/helpers/path";
import { useSession } from "@/sessionContext";
import React from "react";

const Page = async () => {
  let bank_accounts: any[] = [];
  let errorMessage = "";

  try {
    bank_accounts = await getBankAccounts<[]>();
  } catch (error) {
    console.error("Error fetching bank accounts:", error);
    errorMessage = "Failed to load bank accounts. Please try again later.";
  }



  return (
    <div className="flex items-center justify-center">
      <div className="my-3 min-w-[1000px]">
        <CardDaisy>
          <div className="flex justify-between items-center">
            <h2>List of bank accounts</h2>
            <LinkButton name="Create" linkPath={paths.contractPage("create")} />
          </div>

          {errorMessage ? (
            <div className="text-red-500 text-center">{errorMessage}</div>
          ) : (
            <DataTable columns={columnsBankAccount} rows={bank_accounts} />
          )}
        </CardDaisy>
      </div>
    </div>
  );
};

export default Page;
