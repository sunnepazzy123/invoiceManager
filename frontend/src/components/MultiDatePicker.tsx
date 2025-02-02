"use client"
import { useState } from "react"
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

export default function MultiPickerDate() {

  const [values, setValues] = useState([])

  console.log(values)

  return (
    <DatePicker 
    multiple
    plugins={[
     <DatePanel key="holidays"  title="holidays" />
    ]}
    />
  )
}