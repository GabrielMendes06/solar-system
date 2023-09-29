import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardsStructureProps {
  feature: string
  title: string
  text: string
  imgSrc: string
  alt: string
}

const CardStructure: React.FC<CardsStructureProps> = ( { feature, text, title, imgSrc, alt }  ) => {
  return (
    <div className='col-sm min-w-360 mt-3'>
      <Card className='text-light border border-3 border-dark bg-specific'>
        <Card.Header as="h5" className='border-bottom border-dark'>{ feature }</Card.Header>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{ title }</Card.Title>
          <img src={imgSrc} alt={alt}  className='w-100 align-self-center m-4'/>
          <Card.Text>
            { text }
          </Card.Text>
          <Button variant="primary max-w-200 bg-info button-hover">About more</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardStructure;