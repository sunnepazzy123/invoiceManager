"use client";
import React from "react";
import InputDaisy from "./InputDaisy";
import CardDaisy from "./CardDaisy";
import TextAreaDaisy from "./TextAreaDaisy";
import Button from "./Button";
import Title from "./Title";
import { createCompany } from "@/actions";
import { useFormState, useFormStatus } from "react-dom";

export interface ICompanyFormType {
  errors: {
    name?: string[];
    nip?: string[];
    phone?: string[];
    email?: string[];
    address?: string[];
    _form?: string[];
  };
  data?: any
}

const CompanyRegisterForm = () => {

  const [formState, action] = useFormState(createCompany, {
    errors: {},
    data: null
  });

  const { pending } = useFormStatus();
  console.log({ pending, formState })

  return (
    <div>
      <div className="flex flex-col items-center p-2.5">
        <form
          action={action}
          method="POST"
          className="w-full max-w-lg"
        >
          <CardDaisy>
            <Title name={"Create New Company"} />
            <p className="text-red-400 text-center">
            {formState?.errors._form && formState.errors._form.join(", ")}
            </p>
            <div className="grid grid-cols-1">
              <div className="flex flex-col gap-2">
                <p>Enter Company Name</p>
                <InputDaisy name="name" />
                <p className="text-red-400">
                  {formState.errors?.name && formState.errors.name.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex-1">
                <p>Enter NIP</p>
                <InputDaisy name="nip" />
                <p className="text-red-400">
                  {formState.errors?.nip && formState.errors.nip.join(", ")}
                </p>
              </div>
              <div className="flex-1">
                <p>Enter Phone Number</p>
                <InputDaisy name="phone" />
                <p className="text-red-400">
                  {formState.errors?.phone && formState.errors.phone.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col gap-2">
                <p>Enter Email</p>
                <InputDaisy name="email" />
                <p className="text-red-400">
                  {formState.errors?.email && formState.errors.email.join(", ")}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Enter Address</p>
                <TextAreaDaisy name="address" />
                <p className="text-red-400">
                  {formState.errors?.address && formState.errors.address.join(", ")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex justify-center">
                <Button name="Create" />

              </div>
            </div>
          </CardDaisy>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegisterForm;
