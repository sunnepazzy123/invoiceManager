"use client"
import React from 'react'

type CardType = {
    children?: React.ReactNode,
    width?: string,
    height?: string
}

const CardDaisy: React.FC<CardType> = ({children, width, height}) => {
  const cardClassName = `card bg-base-100 shadow-xl h-${height || width} w-${width}`;

  return (
    <div className={cardClassName}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default CardDaisy