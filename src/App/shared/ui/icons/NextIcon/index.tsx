import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const NextIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <circle opacity="0.24" cx="8" cy="8" r="8" fill="#2B6BF3"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.02051 4.1591L10.8249 7.61591C11.0584 7.82804 11.0584 8.17196 10.8249 8.38409L7.02051 11.8409C6.78706 12.053 6.40855 12.053 6.17509 11.8409C5.94164 11.6288 5.94164 11.2849 6.17509 11.0727L9.5 8L6.17509 4.92728C5.94164 4.71515 5.94164 4.37122 6.17509 4.1591C6.40855 3.94697 6.78706 3.94697 7.02051 4.1591Z"
                  fill="white"/>
        </svg>
    )
}

export default NextIcon
