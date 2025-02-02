import { Typography } from '@mui/material'
import React from 'react'


interface TitleType {
    name: string
}

const Title: React.FC<TitleType> = ({name}) => {
  return (
    <div className='flex items-center text-center justify-center'>
        <Typography component={'h2'} fontWeight={700}>{name}</Typography>
    </div>
  )
}

export default Title