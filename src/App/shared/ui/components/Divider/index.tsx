import {ReactElement} from "react";
import BoxIcon from "@shared/ui/icons/BoxIcon";

import classname from "./index.module.scss"

const Divider = (): ReactElement => {
    return (
        <div className="w-full flex justify-between items-center gap-[34px]">
            <hr className={ `${ classname.hr } ${ classname.hr__left }` }/>

            <BoxIcon className="min-w-8"/>

            <hr className={ `${ classname.hr } ${ classname.hr__right }` }/>
        </div>
    )
}

export default Divider