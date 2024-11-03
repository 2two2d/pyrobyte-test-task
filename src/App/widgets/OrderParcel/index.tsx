import {ReactElement} from "react";

import classname from "./index.module.scss"
import Header from "@widgets/OrderParcel/Header";
import DeliveryTypeToggle from "@features/DeliveryTypeToggle";
import Location from "@widgets/OrderParcel/Location";
import Button from "@shared/ui/components/Button";
import ClearButton from "@widgets/OrderParcel/ClearButton";

const OrderParcel = (): ReactElement => {
    return (
        <div className={ `shadow-small ${ classname.card }` }>
            <Header/>

            <DeliveryTypeToggle className="mt-[30px]"/>

            <Location className="mt-8"/>

            <Button text={ "Order" } variant={ "blue" } className="mt-7"/>

            <ClearButton className="self-center mt-4 -ml-8"/>
        </div>
    )
}

export default OrderParcel