import {ReactElement} from "react";

import classname from "./index.module.scss"
import {IClassName} from "@shared/interface/helprers";

const MadeByBlock = ({ className }: IClassName): ReactElement => {
    return (
        <div className={`w-[1160px] flex justify-between items-center gap-[11px] ${ className }`}>
            <hr className={ classname['hr'] }/>

            <p className="text-secondary !text-text-lightBlue text-nowrap">Made by</p>

            <hr className={ classname['hr'] }/>
        </div>
    )
}

export default MadeByBlock