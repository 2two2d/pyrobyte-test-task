import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import Input from "@shared/ui/components/Input";
import SearchIcon from "@shared/ui/icons/SearchIcon";

interface ISearchInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string
    searchIconClassName?: string
}

const SearchInput = ({ className,searchIconClassName, ...props }: ISearchInputProps): ReactNode => {
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