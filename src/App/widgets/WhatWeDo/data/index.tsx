import {IServiceCardProps} from "@features/ServiceCard/interface";
import CalculationIcon from "@shared/ui/icons/CalculationIcon";
import HandButtonIcon from "@shared/ui/icons/HandButtonIcon";
import PayWithCardIcon from "@shared/ui/icons/PayWithCardIcon";


const MOCK_WHATWEDO_BLOCK_DATA: IServiceCardProps[] = [
    {
        text: 'Instant calculation of the cost in the order form, the price is updated in the process of filling out the form',
        title: <p>Online <span className="text-mark cursor-pointer">calculation</span></p>,
        icons: [<CalculationIcon/>]
    },
    {
        text: 'You can place an order for courier or freight delivery without registration and contract.',
        title: 'Minimum paperwork',
        icons: [<HandButtonIcon/>]
    },
    {
        text: 'You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available.',
        title: 'Convenient payment',
        icons: [<PayWithCardIcon/>]
    }
]

export {
    MOCK_WHATWEDO_BLOCK_DATA
}