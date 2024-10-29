import {ReactElement} from "react"
import {IServiceCardProps} from "@features/ServiceCard/interface";

const ServiceCard = ({ title, text, icons } : IServiceCardProps): ReactElement => {
    return (
        <div className="w-[300px] h-[280px] flex flex-col items-start pl-[24px] pt-[23px]
            rounded-lg bg-bg-lightBlue border border-border-paper-primary
            hover:bg-bg-white hover:border-border-paper-hover transition-colors"
        >
            <h3 className="pb-0">
                { title }
            </h3>

            <div className="h-[80px] mt-[17px] ml-[-14px] flex gap-2">
                { icons.map(( Item ) => {
                    return (
                        Item
                    )
                }) }
            </div>

            <p className="mt-[36px] text-primary">
                { text }
            </p>
        </div>
    )
}

export default ServiceCard
