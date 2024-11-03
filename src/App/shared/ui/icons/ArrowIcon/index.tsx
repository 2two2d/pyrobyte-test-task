import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const ArrowIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
            <path
                d="M4.72351 3.30468L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4.72369 4.69531C4.92006 4.50384 5.01177 4.24896 4.99879 3.99827C5.01075 3.74869 4.91899 3.49527 4.72351 3.30468Z"
                fill="#2B6BF3"/>
        </svg>
    )
}

export default ArrowIcon
