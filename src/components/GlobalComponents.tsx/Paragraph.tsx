interface TParagraph {
    className?: string
    content: string
}

function Paragraph( { className, content }:  TParagraph ){
    return(
        <p className={`${className} text-mobile`}>{content}</p>
    )
}

export default Paragraph