import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

interface CardExploringProps {
    content: string
    icon: React.ReactNode
    className: string
    navigateRoute: string
}

const CardExploring: React.FC<CardExploringProps> = ( { content, icon, className, navigateRoute }  ) => {
    const navigate = useNavigate()

    return(
        <Card className={`${className} transition card-exploring rounded-0 border-0 cursor-pointer col-sm m-3`} onClick={() => navigate(`${navigateRoute}`)}>
        <Card.Body className='d-flex'>
          <Card.Text className='mt-auto style-font text-light'>
            {content}  {icon}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardExploring