import {ReactElement} from "react";

const ServiceBlockHeader = (): ReactElement => {
    return (
        <div className="h-[135px] flex flex-col gap-[29px] items-center">
            <p className="h1 block">
                Express delivery market revolution
            </p>
            <p className="text-primary w-[754px] text-center">
                Express courier service in the city. We are a reliable
                logistics partner for delivery services for online stores and restaurants!
            </p>
        </div>
    )
}

export default ServiceBlockHeader