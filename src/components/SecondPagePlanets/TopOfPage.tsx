import Card from "react-bootstrap/Card";

interface TopOfPageProps {
  planet: string;
  carousel: React.ReactNode;
  cardTitle: string;
  cardText: string
}

const TopOfPage: React.FC<TopOfPageProps> = ({ planet, carousel, cardText, cardTitle }) => {
  return (
    <div className={`${planet} style-top-background w-100`}>
      <div className="h-100 w-100 bg-higher carousel-down row"> 
      <Card style={{ width: "25rem" }} className="bg-transparent text-light border-0 margin-left-20">
        <Card.Body>
          <Card.Title className="title-size">{cardTitle}</Card.Title>
          <Card.Text className="text-size">
            {cardText}
          </Card.Text>
        </Card.Body>
      </Card>{carousel}
      </div>
    </div>
  );
};

export default TopOfPage;
