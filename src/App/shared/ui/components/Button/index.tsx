import {DetailedHTMLProps, HTMLAttributes, ReactElement} from "react";

import classname from "./index.module.scss"

interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string
    variant?: 'blue' | 'yellow'
}

const Button = ({text, variant = 'blue', className, ...props}: IButtonProps): ReactElement => {
    return (
        <button
            className={ `h-12 w-[296px] rounded-[32px] text-center text-button
                ${ variant === 'blue' ? classname['button__blue'] : classname['button__yellow'] } ${ className }` }
            { ...props }
        >
            { text }
        </button>
    )
}

export default Button