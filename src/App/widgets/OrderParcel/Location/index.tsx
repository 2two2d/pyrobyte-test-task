import {ReactElement} from "react";
import PathTraceIcon from "@shared/ui/icons/PathTraceIcon";
import Input from "@shared/ui/components/Input";
import {IClassName} from "@shared/interface/helprers";

const Location = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `w-[296px] h-[139px] flex justify-between items-center ${ className }` }>
            <PathTraceIcon/>

            <div className="h-full flex flex-col justify-between">
                <Input
                    variant={ "underlined" }
                    label={ "PICKUP LOCATION" }
                    placeholder={ "location" }
                    className="[&_input]:!w-[256px]"
                />

                <Input
                    variant={ "underlined" }
                    label={ "DROP LOCATION" }
                    placeholder={ "location" }
                    className="[&_input]:!w-[256px]"
                />
            </div>
        </div>
    )
}

export default Location