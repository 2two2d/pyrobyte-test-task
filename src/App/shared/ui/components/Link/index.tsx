import {Link, LinkProps} from "react-router-dom";
import {ReactElement} from "react";

interface ILinkProps extends Omit<LinkProps, 'children'> {
    text: string
}

const CustomLink = ({ text, className, ...props }: ILinkProps): ReactElement => {
    return (
        <Link
            className={`text-primary invert hover:brightness-75 text-nowrap max-w-[136px] ${ className }`}
            { ...props }
        >
            { text }
        </Link>
    )
}

export default CustomLink