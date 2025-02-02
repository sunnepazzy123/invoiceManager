import { getCompanies } from '@/actions/company';
import ContractRegisterForm from '@/components/ContractRegisterForm'
import { ICompany, } from '@/interfaces';
import React from 'react'

const Page = async () => {

  const companies = await getCompanies() as ICompany[];

  const myNips = companies.map((company) => company.nip);


  return (
    <div>
        <ContractRegisterForm otherNips={myNips} myNips={myNips} />
    </div>
  )
}

export default Page