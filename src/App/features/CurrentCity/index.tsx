import {ReactElement} from "react";
import MapPinIcon from "@shared/ui/icons/MapPinIcon";

const CurrentCityChip = (): ReactElement => {
    return (
        <div className="flex gap-[6px]">
            <MapPinIcon className={"mt-[3px]"}/>
            <p className="text-primary invert hover:brightness-75">NY, Manhattan</p>
        </div>
    )
}

export default CurrentCityChip