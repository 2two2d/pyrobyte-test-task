import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

import classname from "./index.module.scss"

interface IInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string
}

const Input = ({ className, ...props }: IInputProps): ReactNode => {
    return (
        <input
            className={ `${classname['input']} text-text-primary text-[14px] ${className}` }
            type="text"
            { ...props }
        />
    )
}

export default Input