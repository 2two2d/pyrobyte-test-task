import {ReactElement} from "react";
import InfoIcon from "@shared/ui/icons/InfoIcon";

const Header = (): ReactElement => {
    return (
        <div className="w-[167px] h-[28px] flex gap-2 justify-between items-center">
            <h3>Send Parcel</h3>

            <InfoIcon className="hover:[&_*]:!fill-icons-hover hover:!fill-icons-hover"/>
        </div>
    )
}

export default Header