import Card from 'react-bootstrap/Card';

interface CardExploringProps {
    content: string
    icon: React.ReactNode
    className: string
}

const CardExploring: React.FC<CardExploringProps> = ( { content, icon, className }  ) => {
    return(
        <Card className={`${className} rounded-0 border-0 cursor-pointer col-sm m-3`} style={{ minWidth: '18rem', maxWidth: '18rem' ,height: "610px"}}>
        <Card.Body className='d-flex'>
          <Card.Text className='mt-auto style-font text-light'>
            {content}  {icon}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardExploring