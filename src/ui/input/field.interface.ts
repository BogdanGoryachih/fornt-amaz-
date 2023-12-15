import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error?: string;
    Icon?: IconType;
}