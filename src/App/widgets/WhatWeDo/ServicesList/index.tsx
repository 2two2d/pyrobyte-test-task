import {ReactElement} from "react";
import {MOCK_WHATWEDO_BLOCK_DATA} from "@widgets/WhatWeDo/data";
import ServiceCard from "@features/ServiceCard";

const ServicesList = (): ReactElement => {
    return (
        <div className="flex mobile:flex-col mt-[-15px] mobile:mt-[35px] gap-[45px] justify-center">
            { MOCK_WHATWEDO_BLOCK_DATA.map(({ title, text, icons }, id) => {
                return (
                    <ServiceCard
                        title={ title }
                        text={ text }
                        icons={ icons }
                        variant={'iconUp'}
                        key={ id }
                    />
                )
            }) }
        </div>
    )
}

export default ServicesList