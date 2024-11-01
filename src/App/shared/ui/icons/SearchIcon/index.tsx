import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const SearchIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z"
                  fill="#2B6BF3"/>
            <path d="M7.33331 10L10.6666 8.66671V5.33337L7.33331 6.51259V10Z" fill="#2B6BF3"/>
            <path d="M6.66669 10L3.33335 8.66671V5.33337L6.66669 6.51259V10Z" fill="#2B6BF3"/>
            <path d="M6.99998 3.33337L3.33331 4.66671L6.99998 6.00004L10.6666 4.66671L6.99998 3.33337Z" fill="#2B6BF3"/>
            <path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="#2B6BF3"/>
        </svg>
    )
}

export default SearchIcon