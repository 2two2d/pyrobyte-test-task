import {ReactElement} from "react";
import MapPinIcon from "@shared/ui/icons/MapPinIcon";
import {IClassName} from "@shared/interface/helprers";

interface ICurrentCityProps extends IClassName {
    paragraphClassName?: string
}

const CurrentCityChip = ({ className, paragraphClassName }: ICurrentCityProps): ReactElement => {
    return (
        <div className={ `flex gap-[6px] ${ className }` }>
            <MapPinIcon className={"mt-[3px]"}/>
            <p className={ `text-primary cursor-pointer invert hover:brightness-75 ${ paragraphClassName }` }>NY, Manhattan</p>
        </div>
    )
}

export default CurrentCityChip