import Link from "next/link";
import React from "react";

interface LinkButtonType {
    linkPath: string,
    name: string
}



const LinkButton: React.FC<LinkButtonType> = ({linkPath, name}) => {
  return <Link href={linkPath} className="py-2 px-3 rounded-lg bg-gray-500 text-white hover:bg-[#6c4e4e]">{name}</Link>;
};

export default LinkButton;
