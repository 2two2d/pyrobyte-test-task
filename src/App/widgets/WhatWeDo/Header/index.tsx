import { ReactElement } from "react";

const WhatWeDoHeader = (): ReactElement => {
    return (
        <div className="w-full h-[135px] flex flex-col items-center justify-between">
            <p className="h1">What we do</p>

            <p className="h4 text-text-primary opacity-[48%] text-center">
                Express courier service in the city. We are a reliable logistics partner for <br/>
                delivery services for online stores and restaurants!
            </p>
        </div>
    )
}

export default WhatWeDoHeader