import React from "react";

interface ButtonType {
  name: string;
}

const Button: React.FC<ButtonType> = ({ name }) => {
  return (
    <div>
      <button className="btn btn-wide" type="submit">
        {name}
      </button>
    </div>
  );
};

export default Button;
