import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{}


const ButtonPagination: FC<PropsWithChildren<IButton>> =({children,...rest})=>{
return <button {...rest} className="button-pagination">{children}</button>
}

export default ButtonPagination