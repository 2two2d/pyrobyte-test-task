import {ReactElement} from "react";
import ServiceBlockHeader from "@widgets/ServicesBlock/components/Header";
import {MOCK_SERVICES_BLOCK_DATA} from "@widgets/ServicesBlock/data";
import ServiceCard from "@features/ServiceCard";

const ServicesBlock = (): ReactElement => {
    return (
        <div className="w-full h-[648px] mobile:h-auto flex flex-col items-center pt-[98px] mobile:pt-[54px] mobile:pb-[64px]">
            <ServiceBlockHeader/>

            <div className="flex mobile:flex-col gap-[50px] mobile:gap-[32px] mt-[39px] mobile:mt-11">
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