import React from "react";
import CardDaisy from "@/components/CardDaisy";
import InputDaisy from "@/components/InputDaisy";
import TextAreaDaisy from "@/components/TextAreaDaisy";
import SelectDaisy from "@/components/SelectDaisy";

const Page = async () => {
  return (
    <div className="flex flex-col items-center bg-base-200">
      <div className="my-3">
      <CardDaisy>
        <div className="grid grid-cols-1">
          <div className="">
            <p>Enter Company Name</p>
            <InputDaisy name="companyName" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p>Enter First name</p>
            <InputDaisy name="firstName" />
          </div>

          <div className="">
            <p>Enter Last name</p>
            <InputDaisy name="lastName" />
          </div>
          <div className="">
            <p>Enter NIP</p>
            <InputDaisy name="nip" />
          </div>
          <div className="">
            <p>Enter Phone Number</p>
            <InputDaisy name="phoneNumber" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="">
            <p>Enter Email</p>
            <InputDaisy name="email" />
          </div>
          <div className="">
            <p>Enter Address</p>
            <TextAreaDaisy name="address" />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="">
            <p>Enter Account Number</p>
            <InputDaisy name="accountNumber"  />
          </div>
          <div className="">
            <p>Enter Account Name</p>
            <InputDaisy name="accountName"  />

          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p>Enter Bank Name</p>
            <SelectDaisy />
          </div>
          <div className="">
            <p>Enter PayRate PerHour</p>
            <InputDaisy name="payRatePerHour"  />

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
      </div>

    </div>
  );
};

export default Page;
