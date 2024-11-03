import {IToggleItem} from "@shared/ui/components/Toggle";
import {EDelivery} from "@shared/enum/delivery";
import DeliveryTypeOption from "@features/DeliveryTypeToggle/DeliveryTypeOption";
import BicycleDeliverIcon from "@shared/ui/icons/BicycleDeliverIcon";
import CarDeliverIcon from "@shared/ui/icons/CarDeliverIcon";
import TruckDeliverIcon from "@shared/ui/icons/TruckDeliverIcon";

const useGetDeliveryType = (courierType: EDelivery): IToggleItem<EDelivery>[] => {
    return [
        {
            element: <DeliveryTypeOption
                icon={ <BicycleDeliverIcon/> }
                text={ 'up to 10lb' }
                isActive={ courierType === EDelivery.courier }
                className="rounded-l-[8px]"
            />,
            elementEType: EDelivery.courier
        },
        {
            element: <DeliveryTypeOption
                icon={ <CarDeliverIcon/> }
                text={ 'up to 130lb' }
                isActive={ courierType === EDelivery.car }
                className="!border-x-0 !w-[96px]"
            />,
            elementEType: EDelivery.car
        },
        {
            element: <DeliveryTypeOption
                icon={ <TruckDeliverIcon/> }
                text={ 'over 130lb' }
                isActive={ courierType === EDelivery.truck }
                className="rounded-r-[8px]"
            />,
            elementEType: EDelivery.truck
        },
    ]
}

export {
    useGetDeliveryType
}