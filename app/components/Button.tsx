
import {  FC } from 'react';

interface ButtonProps {
  label:string;
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void;
  disabled?:boolean;
  outline?:boolean;
}

const Button: FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
   
}) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`${outline?'mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded':'text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'}`}
    >
    {label}
    </button>
  )
}

export default Button