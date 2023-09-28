import { ReactNode } from "react"

type ColumNavProps = {
    children: ReactNode
    className: string
}

const ColumNav: React.FC<ColumNavProps> = ({ children, className }) => {

    return(
        <div className={`${className}`}>
            {children}
        </div>
    )

}

export default ColumNav