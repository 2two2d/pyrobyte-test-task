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
                <p className="h1 !text-[14px] pb-4 space-x-4">{ title }</p>

                <hr className="w-full h-[1px] bg-bg-mediumBlue border-none"/>
            </div>

            { content }
        </div>
    )
}

export default BlockWithTitle