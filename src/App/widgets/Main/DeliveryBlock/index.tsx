import {ReactNode} from "react";
import OrderParcel from "@widgets/OrderParcel";
import TrackPackage from "@features/TrackPackage";
import {IClassName} from "@shared/interface/helprers";

const DeliveryBlock = ({className  }: IClassName): ReactNode => {
    return (
        <div className={ `w-[360px] h-[716px] flex flex-col justify-between ${ className }` }>
            <OrderParcel/>

            <TrackPackage/>
        </div>
    )
}

export default DeliveryBlock