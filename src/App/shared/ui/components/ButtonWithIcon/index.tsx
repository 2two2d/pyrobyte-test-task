import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

interface ChipWithIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    PropsIcon: ReactNode
}

const ButtonWithIcon = ({ text, PropsIcon, className, ...props }: ChipWithIconProps): ReactNode => {
    return (
        <button
            className={ `w-[184px] h-[40px] border border-border-button-primary rounded-[24px] hover:opacity-75 ${ className }` }
            { ...props }
        >
            <div className="w-full h-full flex items-center justify-center gap-[8px]">
                { PropsIcon }
                <p className="text-secondary">{ text }</p>
            </div>
        </button>
    )
}

export default ButtonWithIcon