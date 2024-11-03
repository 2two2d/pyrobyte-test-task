import {ReactElement, ReactNode} from "react";

import classname from "./index.module.scss"

interface ICourierTypeOptionProps {
    icon: ReactNode,
    text: string,
    isActive: boolean,
    className?: string
}

const DeliveryTypeOption = ({ icon, text, isActive, className }: ICourierTypeOptionProps): ReactElement => {
    return (
        <div className={ `${ isActive ? classname['card__active'] : classname['card'] } ${ className }` }>
            { icon }

            <p className="text-secondary">{ text }</p>
        </div>
    )
}

export default DeliveryTypeOption
