"use client"
import React from "react";
import InputDaisy from "./InputDaisy";
import SelectDaisy from "./SelectDaisy";
import CardDaisy from "./CardDaisy";
import Button from "./Button";
import { contractTypes, dailyHours, durations } from "@/constants";
import { createContract } from "@/actions/contract";
import { useFormState, useFormStatus } from "react-dom";

export interface IContractFormType {
  errors: {
    dailyHours?: string[];
    duration?: string[];
    clientCompanyNip?: string[];
    companyNip?: string[];
    wagesPerHour?: string[];
    signature?: string[];
    type?: string[];
    _form?: string[];
  };
}

interface IContractRegForm {
  myNips: string[],
  otherNips: string[]
}

const ContractRegisterForm =  ({myNips, otherNips}: IContractRegForm) => {

    const [formState, action] = useFormState(createContract, {
    errors: {},
  });

  const { pending,  } = useFormStatus();
  console.log({pending, formState})

  return (
    <div className="flex flex-col items-center p-2.5">
      <form action={action}>
        <CardDaisy>
        <p className="text-red-400 text-center">
            {formState?.errors._form && formState.errors._form.join(", ")}
            </p>
          <div className="grid grid-cols-1">
            <div className="">
              <p>Enter Contract Type</p>
              <SelectDaisy options={contractTypes} placeHolder="Contract Type" name="type" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <p>Enter NIP</p>
              <SelectDaisy options={myNips} placeHolder="Your NIP" name="companyNip" />
              <p className="text-red-400 whitespace-normal">
                  {formState?.errors.companyNip && formState.errors.companyNip.join(", ")}
                </p>
            </div>
            <div className="">
              <p>Enter Client NIP</p>
              <SelectDaisy options={otherNips} placeHolder="Client NIP" name="clientCompanyNip" />
              <p className="text-red-400 whitespace-normal">
              {formState?.errors.clientCompanyNip && formState.errors.clientCompanyNip.join(", ")}
              </p>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <p>Enter Wages Per Hour</p>
              <InputDaisy name="wagesPerHour" />
              <p className="text-red-400 whitespace-normal">
              {formState?.errors.wagesPerHour && formState.errors.wagesPerHour.join(", ")}
              </p>
            </div>

            <div className="">
              <p>Enter Daily Hours</p>
              <SelectDaisy options={dailyHours} placeHolder="Daily Hours" name="dailyHours" />
              <p className="text-red-400 whitespace-normal">
              {formState?.errors.dailyHours && formState.errors.dailyHours.join(", ")}
              </p>
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <p>Enter Duration</p>
              <SelectDaisy options={durations} placeHolder="Duration" name="duration" />
              <p className="text-red-400 whitespace-normal">
              {formState?.errors.duration && formState.errors.duration.join(", ")}
              </p>

            </div>
            <div className="">
              <p>Enter Signature</p>
              <InputDaisy name="signature" />
              <p className="text-red-400 whitespace-normal">
              {formState?.errors.signature && formState.errors.signature.join(", ")}
              </p>

            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <Button name="Create" />
            </div>
          </div>

          {/* <div className="flex items-center justify-center flex-row gap-2">
          <div className="">
            <p>Pick Holidays in Issue Month</p>
            <MultiDatePicker />
          </div>
          <div></div>
        </div> */}
        </CardDaisy>
      </form>
    </div>
  );
};

export default ContractRegisterForm;
