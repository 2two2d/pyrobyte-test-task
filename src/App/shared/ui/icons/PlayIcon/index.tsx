import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const PlayIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            { ...props }
        >
            <circle cx="48" cy="48" r="48" fill="black" fillOpacity="0.32"/>
            <path
                d="M37 35.6176C37 32.3943 40.6174 30.4948 43.2709 32.3248L61.2254 44.7071C63.5308 46.2971 63.5308 49.7029 61.2254 51.2929L43.2709 63.6752C40.6174 65.5052 37 63.6057 37 60.3824V35.6176Z"
                fill="white"/>
        </svg>
    )
}

export default PlayIcon