import {ReactElement} from "react";
import Input from "@shared/ui/components/Input";
import SearchIcon from "@shared/ui/icons/SearchIcon";
import {IInputWithIcon} from "@shared/interface/input";

const TrackPackageInput = ({ className, searchIconClassName, inputClassName, ...props }: IInputWithIcon): ReactElement => {
    return (
        <div className={`relative h-[40px] ${className}`}>
            <Input
                placeholder={'Enter code'}
                className="peer"
                inputClassName={ `!w-[280px] indent-1 border-0 !rounded-l ${ inputClassName }` }
                { ...props }
            />
            <SearchIcon
                className={`relative bottom-[32px] left-[248px] 
                    [&_*]:!fill-icons-default peer-focus:[&_*]:!fill-accent-blue ${searchIconClassName}`}
            />
        </div>
    )
}

export default TrackPackageInput