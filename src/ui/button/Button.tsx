import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{}


const Button: FC<PropsWithChildren<IButton>> =({children,...rest})=>{
return <button {...rest} className="button-Button">{children}</button>
}

export default Button