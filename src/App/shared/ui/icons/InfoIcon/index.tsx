import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const InfoIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" fill="#DDE7FD" { ...props }>
            <path
                d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,17L12,17c-0.552,0-1-0.448-1-1v-4 c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4C13,16.552,12.552,17,12,17z M12.5,9h-1C11.224,9,11,8.776,11,8.5v-1 C11,7.224,11.224,7,11.5,7h1C12.776,7,13,7.224,13,7.5v1C13,8.776,12.776,9,12.5,9z"></path>
        </svg>
    )
}

export default InfoIcon
