import {ReactNode} from "react";
import CrossIcon from "@shared/ui/icons/CrossIcon";

interface IClearButtonProps {
    className?: string;
    handleClick?(): void;
}

const ClearButton = ({ handleClick, className }: IClearButtonProps): ReactNode => {
    return (
        <div onClick={ handleClick } className={ `w-[81px] flex items-center gap-2 cursor-pointer hover:opacity-70 ${ className }` }>
            <CrossIcon/>

            <p className="text-text-disabled">Clear All</p>
        </div>
    )
}

export default ClearButton