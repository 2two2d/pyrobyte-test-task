import {ReactElement} from "react";
import CustomLink from "@shared/ui/components/Link";
import ArrowIcon from "@shared/ui/icons/ArrowIcon";
import {IClassName} from "@shared/interface/helprers";

const ReadMore = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ className }>
            <CustomLink text={
                <div className="w-[200px] flex items-center gap-2">
                    <p className="h5 !text-accent-blue">Read more</p>
                    <ArrowIcon className="mt-[2px]"/>
                </div>
            }
                to={''}
                className="invert-0"
            />
        </div>
    )
}

export default ReadMore