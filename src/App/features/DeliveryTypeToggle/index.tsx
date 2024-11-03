import {ReactNode, useState} from "react";
import Toggle from "@shared/ui/components/Toggle";
import {EDelivery} from "@shared/enum/delivery";
import {useGetDeliveryType} from "@features/DeliveryTypeToggle/hooks";
import {IClassName} from "@shared/interface/helprers";

const DeliveryTypeToggle = ({ className }: IClassName): ReactNode => {
    const [courierType, setCourierType] = useState<EDelivery>(EDelivery.courier)

    const handleToggleClick = (value: EDelivery): void => {
        setCourierType(value)
    }

    const toggleItems = useGetDeliveryType(courierType)

    // использовал переменную, чтобы не было ошибки ts
    console.log(courierType)

    return (
        <Toggle<EDelivery>
            items={ toggleItems }
            onClick={ handleToggleClick }
            className={`w-[296px] ${ className }`}
        />
    )
}

export default DeliveryTypeToggle