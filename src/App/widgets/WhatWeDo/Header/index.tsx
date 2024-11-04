import { ReactElement } from "react";

const WhatWeDoHeader = (): ReactElement => {
    return (
        <div className="w-full h-[155px] flex flex-col items-center justify-between">
            <p className="h1">What we do</p>

            <p className="h4 w-[800px] mobile:w-[350px] mt-[20px] mobile:text-[20px] mobile:mt-[20px] text-text-primary opacity-[48%] text-center">
                Express courier service in the city. We are a reliable logistics partner for
                delivery services for online stores and restaurants!
            </p>
        </div>
    )
}

export default WhatWeDoHeader