import {ReactElement} from "react";
import { PARTNERS_LOGOS } from "./data";
import HoverImage from "@features/HoverImage";
import SuitCaseIcon from "@shared/ui/icons/SuitCaseIcon";
import ButtonWithIcon from "@shared/ui/components/ButtonWithIcon";

const OurPartners = (): ReactElement => {
    return (
        <div className="w-[1366px] h-[320px] pt-[98px] flex flex-col items-center">
            <div className="relative flex justify-center pl-[184px]">
                <p className="h1">Our Partners</p>
                <ButtonWithIcon text={"Let's collaborate"} PropsIcon={<SuitCaseIcon/>} className="relative left-[269px]"/>
            </div>

            <div className="w-[1104px] h-[57px] mt-[70px] flex justify-between items-center">
                { PARTNERS_LOGOS.map(({ initialPath, hoverPath }, id) => {
                    return (
                        <HoverImage imageInitial={ initialPath } imageHover={ hoverPath } alt={ initialPath } key={ id }/>
                    )
                })}
            </div>
        </div>
    )
}

export default OurPartners