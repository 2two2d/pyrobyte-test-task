import {ReactElement} from "react";
import classname from "./index.module.scss"
import WhatWeDoHeader from "@widgets/WhatWeDo/Header";
import ServicesList from "@widgets/WhatWeDo/ServicesList";
import Button from "@shared/ui/components/Button";
import CityImage from "@shared/ui/assets/images/CityImage.png"

const WhatWeDo = (): ReactElement => {
    return (
        <div className={ classname.widget }>
            <WhatWeDoHeader/>

            <ServicesList/>

            <Button text={"Get started!"} variant={"yellow"} className="mt-9 mobile:mt-[88px]"/>

            <img
                src={ CityImage }
                alt="city"
                width={ 220 }
                height={ 504 }
                className="relative mt-[-554px] left-[calc(50%-110px)] bottom-[120px] mobile:hidden"
            />
        </div>
    )
}

export default WhatWeDo