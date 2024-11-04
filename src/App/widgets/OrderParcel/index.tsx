import {ReactNode} from "react";
import Header from "@widgets/OrderParcel/Header";
import DeliveryTypeToggle from "@features/DeliveryTypeToggle";
import Location from "@widgets/OrderParcel/Location";
import Button from "@shared/ui/components/Button";
import ClearButton from "@widgets/OrderParcel/ClearButton";

import classname from "./index.module.scss"
import {useIsThinnerThanMobile} from "@shared/utils/is-thinner-than";

const OrderParcel = (): ReactNode => {
    const { isThinnerThanMobile } = useIsThinnerThanMobile()

    return (
        <div className={ `shadow-small ${ classname.card }` }>
            <Header/>

            <DeliveryTypeToggle className="mt-[30px]" variant={ isThinnerThanMobile() ? 'sm' : 'lg' }/>

            <Location className="mt-8 mobile:mt-[37px]"/>

            <Button text={ "Order" } variant={ "blue" } className="mt-7"/>

            <ClearButton className="self-center mt-4 -ml-8"/>
        </div>
    )
}

export default OrderParcel