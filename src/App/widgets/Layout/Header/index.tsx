import {ReactElement} from "react";
import Logo from "@shared/ui/assets/Logo";
import classname from "./index.module.scss"
import SearchInput from "@features/SearchInput";
import CurrentCityChip from "@features/CurrentCity";
import Link from "@shared/ui/components/Link";
import LockerIcon from "@shared/ui/icons/LockerIcon";
import HeaderAdaptive from "./HeaderAdaptive";

const Header = (): ReactElement => {
    return (
        <>
            <div className={classname.header}>
                <div className="w-[1366px] px-8 flex items-center">
                    <div className="w-[390px] h-full flex justify-between items-center">
                        <Logo/>

                        <CurrentCityChip/>
                    </div>

                    <SearchInput className="ml-[169px] mr-[211px]"/>

                    <div className="w-[348px] h-full flex items-center">
                        <Link to={''} text={'Send a Parcel'}/>

                        <Link to={''} text={'Become a Courier'} className="ml-9 mr-8"/>

                        <LockerIcon className={'w-10 h-10 hover:opacity-75'}/>
                    </div>
                </div>
            </div>

            <HeaderAdaptive/>
        </>
    )
}

export default Header