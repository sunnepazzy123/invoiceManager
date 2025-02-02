import { getCompanies, getSessionCustom } from "@/actions/company";
import CardDaisy from "@/components/CardDaisy";
import LinkButton from "@/components/LinkButton";
import DataTable from "@/components/Table/DataTable";
import { columnsCompany } from "@/components/Table/companyColumn";
import { paths } from "@/helpers/path";
import { Grid } from "@mui/material";
import React from "react";


const Page = async ({ searchParams }: any) => {



  const companies = await getCompanies()


  return (
    <div className="flex items-center justify-center">
      <div className="my-3 min-w-[1000px]">
        <CardDaisy>
          <Grid container spacing={2} alignItems={"center"}>
              <>
                <Grid item xs={2}>
                  <h2>List of Company</h2>
                </Grid>

                <Grid
                  item
                  xs={10}
                  justifyContent={"end"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <LinkButton
                    name="Create"
                    linkPath="/company/create"
                  />
                </Grid>
              </>
          </Grid>

          <DataTable columns={columnsCompany} rows={companies} />
        </CardDaisy>
      </div>
    </div>
  );
};

export default Page;
