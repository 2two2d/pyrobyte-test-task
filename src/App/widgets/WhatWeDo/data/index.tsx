import {IServiceCardProps} from "@features/ServiceCard/interface";
import CalculationIcon from "@shared/ui/icons/CalculationIcon";
import HandButtonIcon from "@shared/ui/icons/HandButtonIcon";
import PayWithCardIcon from "@shared/ui/icons/PayWithCardIcon";
import NextIcon from "@shared/ui/icons/NextIcon";


const MOCK_WHATWEDO_BLOCK_DATA: IServiceCardProps[] = [
    {
        text: 'Instant calculation of the cost in the order form, the price is updated in the process of filling out the form',
        title: <p>Online <span className="text-mark cursor-pointer">calculation</span></p>,
        icons: [<CalculationIcon className="mobile:w-[90px]"/>]
    },
    {
        text: 'You can place an order for courier or freight delivery without registration and contract.',
        title: 'Minimum paperwork',
        icons: [<HandButtonIcon className="mobile:w-[90px]"/>]
    },
    {
        text: <p>You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available.<NextIcon className="icon-after-text relative z-40"/></p>,
        title: 'Convenient payment',
        icons: [<PayWithCardIcon className="mobile:w-[90px]"/>]
    }
]

export {
    MOCK_WHATWEDO_BLOCK_DATA
}