import {ReactElement} from "react";

const ServiceBlockHeader = (): ReactElement => {
    return (
        <div className="h-[135px] w-full flex flex-col gap-[29px] mobile:gap-[15px] items-center">
            <p className="h1 block mobile:w-[260px] mobile:text-center">
                Express delivery market revolution
            </p>
            <p className="w-[754px] mobile:w-[328px] text-primary mobile:h4 mobile:opacity-[42%] text-center">
                Express courier service in the city. We are a reliable
                logistics partner for delivery services for online stores and restaurants!
            </p>
        </div>
    )
}

export default ServiceBlockHeader