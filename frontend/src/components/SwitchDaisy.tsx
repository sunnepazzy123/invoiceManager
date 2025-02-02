"use client"
import { getCompanies } from "@/actions/company";
import useCompanyStore from "@/store/companyStore";
import React, { useEffect, useState } from "react";

type SwitchDisplayType = {
  token?: string | undefined
}

const SwitchDaisy: React.FC<SwitchDisplayType> = ({token}) => {
  const [checked, setChecked] =  useState(false);
  const  {  setCompanies } = useCompanyStore((store) => store)

  const updateCheckedHandler = () => {
    console.log('heloo')
    setChecked((prev) => !prev)
  }



  useEffect(()=> {
    console.log('switchUseEffect')

    const getCompaniesAction = async () => {
      const result = await getCompanies({token}) as any[]
      setCompanies(result)
    }

    getCompaniesAction()



  }, [checked, setCompanies, token])
  return (
    <div className="flex flex-col">
      <div className="form-control w-52">
        <label className="cursor-pointer label">
          <span className="label-text">My Company</span>
          <input type="checkbox" className="toggle toggle-primary" onClick={updateCheckedHandler} />
        </label>
      </div>
    </div>
  );
};

export default SwitchDaisy;
