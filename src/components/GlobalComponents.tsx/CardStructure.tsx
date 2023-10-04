import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardsStructureProps {
  feature?: string
  title?: string
  text?: string
  imgSrc?: string
  alt?: string
}

const CardStructure: React.FC<CardsStructureProps> = ( { feature, text, title, imgSrc, alt }  ) => {
  return (
    <div className='col-sm min-w-360 mt-3 mb-4'>
      <Card className='h-100 text-light bg-specific'>
        <Card.Header as="h5" className='border-bottom border-dark '>{ feature }</Card.Header>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{ title }</Card.Title>
          <img src={imgSrc} alt={alt}  className='m-image align-self-center m-4'/>
          <Card.Text>
            { text }
          </Card.Text>
          <Button variant="primary max-w-200 bg-info button-hover m-inline-auto">Read more</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardStructure;