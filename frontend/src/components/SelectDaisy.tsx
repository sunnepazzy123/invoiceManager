import React from "react";

export interface ISelectDaisy {
  options: any[];
  name: string;
  placeHolder: string
}

const SelectDaisy: React.FC<ISelectDaisy> = ({ options = [], name, placeHolder }) => {
  const optionList = options.map((opt, index) => (
    <option key={index}>{opt}</option>
  ));

  return (
    <select className="select select-primary w-full" name={name}>
      <option disabled>Select {placeHolder}</option>
      {optionList}
    </select>
  );
};

export default SelectDaisy;
