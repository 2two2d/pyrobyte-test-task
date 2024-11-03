import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

import classname from "./index.module.scss"

interface IInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputClassName?: string
    placeholder?: string
    variant?: 'outlined' | 'underlined'
    label?: string
}

const Input = ({ inputClassName, variant = 'outlined', label, className, ...props }: IInputProps): ReactElement => {
    return (
        <div className={ className }>
            <input
                className={`${variant === 'outlined' ? classname.input : classname['input__outline']} text-text-primary text-[14px] ${inputClassName}`}
                type="text"
                {...props}
            />

            {label && <p className="h2 !text-[12px] !text-text-pale">{ label }</p>}
        </div>
    )
}

export default Input