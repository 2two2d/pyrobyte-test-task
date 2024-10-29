import {ReactElement} from "react";
import ServiceBlockHeader from "@widgets/ServicesBlock/components/Header";
import {MOCK_SERVICES_BLOCK_DATA} from "@widgets/ServicesBlock/data";
import ServiceCard from "@features/ServiceCard";

const ServicesBlock = (): ReactElement => {
    return (
        <div className="w-full h-[648px] flex flex-col items-center pb-[98px]">
            <ServiceBlockHeader/>

            <div className="flex gap-[50px] mt-[39px]">
                { MOCK_SERVICES_BLOCK_DATA.map(({ title, text, icons }, id) => {
                    return (
                        <ServiceCard
                            title={ title }
                            text={ text }
                            icons={ icons }
                            key={ id }
                        />
                    )
                }) }
            </div>
        </div>
    )
}

export default ServicesBlock