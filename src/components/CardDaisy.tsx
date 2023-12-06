import React from 'react'

type CardType = {
    children?: React.ReactNode
}

const CardDaisy: React.FC<CardType> = ({children}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
        {children}
    </div>
  </div>
  )
}

export default CardDaisy