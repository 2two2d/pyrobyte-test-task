import {ReactNode, useState} from "react";
import AvatarDefaultIcon from "@shared/ui/icons/AvatarDefaultIcon";
import Logo from "@shared/ui/assets/Logo";
import MenuIcon from "@shared/ui/icons/MenuIcon";
import {IClassName} from "@shared/interface/helprers";
import MenuModal from "./MenuModal";

import classname from "./index.module.scss"
import {useHandleClickOutside} from "@shared/utils/use-handle-click-outside";

const HeaderAdaptive = ({ className }: IClassName): ReactNode => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

    const handleClose = (): void => {
        setIsMenuVisible(false)
    }

    const handleOpen = (): void => {
        setIsMenuVisible(true)
    }

    const ref = useHandleClickOutside(handleClose)

    return (
        <div
            ref={ ref }
            className={ `${ classname.header } ${ className }` }
        >
            <AvatarDefaultIcon className="cursor-pointer hover:opacity-70"/>

            <Logo width={ 120 } height={ 40 }/>

            <MenuIcon onClick={ handleOpen } className="cursor-pointer hover:opacity-70"/>

            { isMenuVisible && <MenuModal handleClose={ handleClose }/> }
        </div>
    )
}

export default HeaderAdaptive