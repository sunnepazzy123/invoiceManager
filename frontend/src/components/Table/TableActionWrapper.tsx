"use client"
import React, { FC } from 'react'


interface TableActionWrapperType {
    children: React.ReactNode
}


const TableActionWrapper: FC<TableActionWrapperType> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TableActionWrapper