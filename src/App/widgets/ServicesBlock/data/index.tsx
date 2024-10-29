import {IServiceCardProps} from "@features/ServiceCard/interface";
import CourierIcon from "@shared/ui/icons/CourierIcon";
import MapIcon from "@shared/ui/icons/MapIcon";
import HelpIcon from "@shared/ui/icons/HelpIcon";
import AffiliateProgramIcon from "@shared/ui/icons/AffiliateProgramIcon";

const MOCK_SERVICES_BLOCK_DATA: IServiceCardProps[] = [
    {
        text: 'You choose a schedule. You decide how much and when to earn. Earnings from day one',
        title: 'Become a Courier',
        icons: [<CourierIcon/>, <MapIcon/>]
    },
    {
        text: 'Door-to-door delivery\nin 90 minutes or at your convenience',
        title: 'Help & Support',
        icons: [<HelpIcon/>]
    },
    {
        text: 'Use our service and feel\nnew quality of this traditional service!',
        title: 'Affiliate Program',
        icons: [<AffiliateProgramIcon/>]
    }
]

export {
    MOCK_SERVICES_BLOCK_DATA
}