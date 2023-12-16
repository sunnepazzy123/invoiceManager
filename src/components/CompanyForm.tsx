"use client"
import React from 'react'
import InputDaisy from './InputDaisy'
import SelectDaisy from './SelectDaisy'
import CardDaisy from './CardDaisy'
import TextAreaDaisy from './TextAreaDaisy'
import { createContract } from '@/actions/contract'
import Button from './Button'

const CompanyRegisterForm = () => {
  return (
    <div className="flex flex-col items-center p-2.5">
      <form action={createContract}>
      <CardDaisy>
        <div className="grid grid-cols-1">
          <div className="">
            <p>Enter Company Name</p>
            <InputDaisy />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p>Enter NIP</p>
            <InputDaisy name='nip' />
          </div>
          <div className="">
            <p>Enter Phone Number</p>
            <InputDaisy />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="">
            <p>Enter Email</p>
            <InputDaisy />
          </div>
          <div className="">
            <p>Enter Address</p>
            <TextAreaDaisy />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="">
            <p>Enter Account Number</p>
            <InputDaisy />
          </div>
          <div className="">
            <p>Enter Account Name</p>
            <InputDaisy />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="">
            <p>Enter Bank Name</p>
            <SelectDaisy />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <Button name='Create' />
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
  )
}

export default CompanyRegisterForm