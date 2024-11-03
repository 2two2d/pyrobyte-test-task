import {ReactElement} from "react";
import {IIconSvg} from "@shared/ui/icons/interface";

const MenuIcon = ({ ...props }: IIconSvg): ReactElement => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
             { ...props }
        >
            <path
                d="M9 17C9 16.4477 9.44772 16 10 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H10C9.44772 18 9 17.5523 9 17Z"
                fill="#C2D2F4"/>
            <path
                d="M9 17C9 16.4477 9.44772 16 10 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H10C9.44772 18 9 17.5523 9 17Z"
                fill="#B7C6E7"/>
            <path
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="#C2D2F4"/>
            <path
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="#B7C6E7"/>
            <path
                d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7Z"
                fill="#C2D2F4"/>
            <path
                d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7Z"
                fill="#B7C6E7"/>
        </svg>
    )
}

export default MenuIcon