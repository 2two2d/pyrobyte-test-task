import {ReactElement} from "react";
import PyroByteLogo from "@shared/ui/assets/images/PyroByteLogo.png"
import ShieldIcon from "@shared/ui/icons/ShieldIcon";
import {IClassName} from "@shared/interface/helprers";


const PrivacyPolicy = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `w-[987px] flex justify-between items-center text-secondary !text-[14px] [&_p]:opacity-[62%] ${ className }` }>
            <p className="w-[178px] text-nowrap">© 2022. All rights reserved.</p>

            <img src={ PyroByteLogo } alt="PyroByte" width={ 85 } height={ 64 }/>

            <div className="flex w-[178px] items-center gap-3">
                <ShieldIcon/>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy