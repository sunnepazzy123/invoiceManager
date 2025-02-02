"use client"
import React from 'react'

interface TextAreaType {
  name: string,
}

const TextAreaDaisy: React.FC<TextAreaType> = ({name}) => {
  return (
<textarea className="textarea textarea-primary w-full" name={name} placeholder="Bio"></textarea>   
  )
}

export default TextAreaDaisy