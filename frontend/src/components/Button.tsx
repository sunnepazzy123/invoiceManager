import React from "react";

interface ButtonType {
  name: string;
  size?: string;
}

const Button: React.FC<ButtonType> = ({ name, size = 'small' }) => {
  return (
    <div>
      <button className={`btn btn-wide btn-${size}`} type="submit">
        {name}
      </button>
    </div>
  );
};

export default Button;
