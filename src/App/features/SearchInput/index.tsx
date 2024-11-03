import {ReactNode} from "react";
import Input from "@shared/ui/components/Input";
import SearchIcon from "@shared/ui/icons/SearchIconWithBox";
import {IInputWithIcon} from "@shared/interface/input";

const SearchInput = ({ className,searchIconClassName, ...props }: IInputWithIcon): ReactNode => {
    return (
        <div className={`relative h-[40px] ${className}`}>
            <Input placeholder={'Track a Package'} className="peer" { ...props }/>
            <SearchIcon
                className={`relative bottom-[28px] left-[152px] 
                    [&_*]:!fill-icons-default peer-focus:[&_*]:!fill-accent-blue ${ searchIconClassName }`}
            />
        </div>
    )
}

export default SearchInput