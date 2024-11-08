import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const AffiliateProgramIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="24"
            height="112"
            viewBox="0 0 24 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <path
                d="M18 98C18 101.314 12 108 12 108C12 108 6 101.314 6 98C6 94.6863 8.68629 92 12 92C15.3137 92 18 94.6863 18 98Z"
                fill="#FFD600"/>
            <circle cx="12" cy="12" r="12" fill="#2B6BF3" fillOpacity="0.08"/>
            <circle cx="12" cy="12" r="5" fill="#2B6BF3"/>
            <circle cx="12" cy="12" r="2" fill="white"/>
            <path
                d="M14 82C14 83.1046 13.1046 84 12 84C10.8954 84 10 83.1046 10 82C10 80.8954 10.8954 80 12 80C13.1046 80 14 80.8954 14 82Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 42C14 43.1046 13.1046 44 12 44C10.8954 44 10 43.1046 10 42C10 40.8954 10.8954 40 12 40C13.1046 40 14 40.8954 14 42Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 50C14 51.1046 13.1046 52 12 52C10.8954 52 10 51.1046 10 50C10 48.8954 10.8954 48 12 48C13.1046 48 14 48.8954 14 50Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 58C14 59.1046 13.1046 60 12 60C10.8954 60 10 59.1046 10 58C10 56.8954 10.8954 56 12 56C13.1046 56 14 56.8954 14 58Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 66C14 67.1046 13.1046 68 12 68C10.8954 68 10 67.1046 10 66C10 64.8954 10.8954 64 12 64C13.1046 64 14 64.8954 14 66Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 74C14 75.1046 13.1046 76 12 76C10.8954 76 10 75.1046 10 74C10 72.8954 10.8954 72 12 72C13.1046 72 14 72.8954 14 74Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
            <path
                d="M14 34C14 35.1046 13.1046 36 12 36C10.8954 36 10 35.1046 10 34C10 32.8954 10.8954 32 12 32C13.1046 32 14 32.8954 14 34Z"
                fill="#2B6BF3" fillOpacity="0.08"/>
        </svg>
    )
}

export default AffiliateProgramIcon
