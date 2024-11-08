import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const ETCIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <rect width="25" height="15" rx="4" fill="#CCDBFC"/>
            <rect x="17" y="5" width="5" height="5" rx="2.5" fill="white"/>
            <rect x="10" y="5" width="5" height="5" rx="2.5" fill="white"/>
            <rect x="3" y="5" width="5" height="5" rx="2.5" fill="white"/>
        </svg>
    )
}

export default ETCIcon
