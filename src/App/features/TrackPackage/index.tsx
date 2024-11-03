import {ReactElement} from "react";
import TrackPackageInput from "@features/TrackPackage/TrackPackageInput";
import classname from "./index.module.scss"

const TrackPackage = (): ReactElement => {
    return (
        <div className={ `shadow-small ${classname.wrapper}` }>
            <h3 className="w-[280px]">Track a package</h3>

            <TrackPackageInput/>
        </div>
    )
}

export default TrackPackage