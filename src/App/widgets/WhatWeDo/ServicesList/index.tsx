import {ReactElement} from "react";
import {MOCK_WHATWEDO_BLOCK_DATA} from "@widgets/WhatWeDo/data";
import ServiceCard from "@features/ServiceCard";

const ServicesList = (): ReactElement => {
    return (
        <div className={"flex gap-[50px] justify-center"}>
            { MOCK_WHATWEDO_BLOCK_DATA.map(({ title, text, icons }) => {
                return (
                    <ServiceCard  title={ title } text={ text } icons={ icons } variant={'iconUp'} />
                )
            }) }
        </div>
    )
}

export default ServicesList