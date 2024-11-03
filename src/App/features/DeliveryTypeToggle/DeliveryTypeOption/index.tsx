import {ReactElement, ReactNode} from "react";

import classname from "./index.module.scss"

interface ICourierTypeOptionProps {
    icon: ReactNode,
    isActive: boolean,
    text?: string,
    className?: string
}

const DeliveryTypeOption = ({ icon, text, isActive, className }: ICourierTypeOptionProps): ReactElement => {
    return (
        <div className={ `${ isActive ? classname['card__active'] : classname['card'] } ${ className } ${ text ? '' : '!h-[56px] !pb-0' }` }>
            { icon }

            {text && <p className="text-secondary">{text}</p>}
        </div>
    )
}

export default DeliveryTypeOption
