import AjvaLogo from "@shared/ui/assets/images/partners-logos/AjvaLogoImage.png"
import TendoLogo from "@shared/ui/assets/images/partners-logos/TendoLogoImage.png"
import FagorLogo from "@shared/ui/assets/images/partners-logos/FagorLogoImage.png"
import RadioShackLogo from "@shared/ui/assets/images/partners-logos/RadioShackLogoImage.png"
import UltraCenterLogo from "@shared/ui/assets/images/partners-logos/UltraCenterLogoImage.png"

import AjvaLogoPale from "@shared/ui/assets/images/partners-logos/AjvaPaleLogoImage.png"
import TendoLogoPale from "@shared/ui/assets/images/partners-logos/TendoPaleLogoImage.png"
import FagorLogoPale from "@shared/ui/assets/images/partners-logos/FagorPaleLogoImage.png"
import RadioShackLogoPale from "@shared/ui/assets/images/partners-logos/RadioShackPaleLogoImage.png"
import UltraCenterLogoPale from "@shared/ui/assets/images/partners-logos/UltraCenterPaleLogoImage.png"

interface IPartnersLogo {
    initialPath: string
    hoverPath: string
    alt: string
}

const PARTNERS_LOGOS: IPartnersLogo[] = [
    {
        initialPath: AjvaLogo,
        hoverPath: AjvaLogoPale,
        alt: "AjvaLogo"
    },
    {
        initialPath: TendoLogo,
        hoverPath: TendoLogoPale,
        alt: "TendoLogo"
    },
    {
        initialPath: FagorLogo,
        hoverPath: FagorLogoPale,
        alt: "FagorLogo"
    },
    {
        initialPath: RadioShackLogo,
        hoverPath: RadioShackLogoPale,
        alt: "RadioShackLogo"
    },
    {
        initialPath: UltraCenterLogo,
        hoverPath: UltraCenterLogoPale,
        alt: "UltraCenterLogo"
    },
]

export {
    PARTNERS_LOGOS
}