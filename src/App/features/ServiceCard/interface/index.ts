import { ReactNode } from "react";

interface IServiceCardProps {
    title: ReactNode
    text: ReactNode
    icons: ReactNode[]
    variant?: 'default' | 'iconUp'
}

export type {
    IServiceCardProps
}