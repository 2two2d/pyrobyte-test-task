import {ReactElement} from "react";
import PyroByteLogo from "@shared/ui/assets/images/PyroByteLogo.png";
import ShieldIcon from "@shared/ui/icons/ShieldIcon";
import MadeByBlock from "@widgets/Layout/Footer/MadeBy";
import {IClassName} from "@shared/interface/helprers";

import classname from "./index.module.scss"

const PrivacyPolicyAdaptive = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `${ classname.block } text-primary ${ className }` }>
            <p className="text-nowrap text-center">© 2022. All rights reserved.</p>

            <div className="flex items-center gap-3">
                <ShieldIcon/>
                <p>Privacy Policy</p>
            </div>

            <MadeByBlock/>

            <img src={ PyroByteLogo } alt="PyroByte" width={85} height={64}/>
        </div>
    )
}

export default PrivacyPolicyAdaptive