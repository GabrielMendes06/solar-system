import Card from "react-bootstrap/Card";

interface SimpleCardProps {
  src: string;
  title: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ src, title }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3 p-0 rounded-0 border-0 overflow-hidden">
        <Card.Img variant="top" src={src} className="rounded-0 border-0 simple-card transition" alt={title}/>
        <Card.Body className="pt-2 text-index p-0">
          <Card.Title className="">{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SimpleCard;
