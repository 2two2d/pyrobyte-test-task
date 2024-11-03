import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const RightArrowIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            { ...props }
        >
            <path opacity="0.16" fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.85744 23.5227L13.5097 13.1523C14.1634 12.5159 14.1634 11.4841 13.5097 10.8477L2.85744 0.477287C2.20376 -0.159096 1.14394 -0.159096 0.490259 0.477287C-0.16342 1.11367 -0.16342 2.14545 0.490259 2.78183L9.95897 12L0.490259 21.2182C-0.16342 21.8546 -0.16342 22.8863 0.490259 23.5227C1.14394 24.1591 2.20376 24.1591 2.85744 23.5227Z"
                  fill="#1D253C"/>
        </svg>


    )
}

export default RightArrowIcon
