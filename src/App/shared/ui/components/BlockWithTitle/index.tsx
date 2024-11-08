import {ReactElement, ReactNode} from "react";

interface IBlockWithTitleProps {
    title: string,
    content: ReactNode
    className?: string
}

const BlockWithTitle = ({ title, content, className }: IBlockWithTitleProps): ReactElement => {
    return (
        <div className={ `flex flex-col w-[200px] ${ className }` }>
            <div className="pb-[21px]">
                <p className="h1 !text-[14px] leading-4 pb-0 -mb-1 mobile:mb-2">{ title }</p>

                <hr className="w-full h-[2px] bg-bg-mediumBlue border-none"/>
            </div>

            { content }
        </div>
    )
}

export default BlockWithTitle