import {ReactElement} from "react"
import {IServiceCardProps} from "@features/ServiceCard/interface";

import classname from "./index.module.scss"

const ServiceCard = ({ title, text, icons, variant = 'default' } : IServiceCardProps): ReactElement => {
    return (
        <div className={`${ classname.serviceCard } 
            ${ variant === 'default' ? classname['serviceCard__default'] : classname['serviceCard__iconUp'] }`}
        >
            <div className={`flex flex-col ${ variant === 'iconUp' ? 'flex-col-reverse gap-[30px] mb-[-15px]' : '' }`}>
                <h3 className="pb-0">
                    {title}
                </h3>
                <div className={ `h-[80px] mt-[17px] ml-[-14px] mobile:ml-0 flex gap-2 
                        ${variant === 'iconUp' ? 'mobile:justify-center' : ''}` }
                >
                    {icons.map((Item, id) => {
                        return (
                            <div key={ id }>
                                { Item }
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={ `mt-[36px] text-primary ${ variant === 'iconUp' ? 'w-[320px]' : '' }` }>
                { text }
            </div>
        </div>
    )
}

export default ServiceCard
