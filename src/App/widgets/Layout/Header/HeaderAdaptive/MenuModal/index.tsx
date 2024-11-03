import {ReactElement} from "react";
import classname from "./index.module.scss"
import CurrentCity from "@features/CurrentCity";
import CloseIcon from "@shared/ui/icons/CloseIcon";
import TrackPackageInput from "@features/TrackPackage/TrackPackageInput";
import CustomLink from "@shared/ui/components/Link";
import Button from "@shared/ui/components/Button";

interface IMenuProps {
    handleClose(): void
}

const MenuModal = ({ handleClose }: IMenuProps): ReactElement => {
    return (
        <div className={ classname.menu }>
            <div className={ classname.header }>
                <CurrentCity paragraphClassName="text-dashed"/>

                <CloseIcon
                    onClick={ handleClose }
                    className="cursor-pointer hover:opacity-70"
                />
            </div>

            <TrackPackageInput
                className="mt-10"
                inputClassName="!border !w-[240px] border-border-primary"
                searchIconClassName="!left-[205px]"
                placeholder={"Track a package"}
            />

            <div className="h-[168px] mt-11 ml-4 flex flex-col justify-between self-start">
                <CustomLink text={ "Send a Parcel" } to={ '' }/>

                <CustomLink text={ "Become a Courier" } to={ '' }/>

                <CustomLink text={ "Affiliate Program" } to={ '' }/>

                <CustomLink text={ "Help & Support" } to={ '' }/>
            </div>

            <Button text={"Take a complex order"} className="w-[242px] mt-auto"/>
        </div>
    )
}

export default MenuModal