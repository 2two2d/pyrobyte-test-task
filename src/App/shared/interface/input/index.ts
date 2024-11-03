import {DetailedHTMLProps, HTMLAttributes} from "react";

interface IInputWithIcon extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string
    inputClassName?: string,
    searchIconClassName?: string
}

export type {
    IInputWithIcon
}