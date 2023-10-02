import '../Main/css/planets.css'
import Paragraph from './Paragraph'
import Title from './Title'

interface CardContainerProps {
    className: string
    content?: string
}

const CardPlanets: React.FC<CardContainerProps> = ({ className, content }) => {
    return(
        <div className={ `${className} all-cards-size m-2` }>
            <div className='sobreposto d-flex align-items-end justify-content-center'>
                <Title content={<div className='d-flex '>
                    <p className='text-medium mx-2'>{content}</p>
                    <i className="bi bi-arrow-right-circle text-medium"></i>
                </div>}
                />
            </div>
        </div>
    )
}

export default CardPlanets