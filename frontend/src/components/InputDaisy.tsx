
import React from 'react'


const InputDaisy: React.FC<InputDaisyType> = ({name}) => {

  return (
    <input type="text" placeholder="Type here" name={name} className="input input-bordered input-primary w-full" />
  )
}

export default InputDaisy