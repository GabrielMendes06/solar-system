import { ReactNode } from "react"

function ColumNav<T>( { children, className }: { children: ReactNode, className?: string} ) {

    return(
        <div className={`col-sm flex ${className}`}>
            {children}
        </div>
    )
}

export default ColumNav