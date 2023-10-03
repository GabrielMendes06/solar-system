import "../Main/css/planets.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";

interface CardContainerProps {
  imgSrc: string;
  planetName?: string
}

const CardPlanets: React.FC<CardContainerProps> = ({ imgSrc, planetName }) => {
  const { planets } = useContext(InfSolarSystem);
  
  const [planetInfo, setPlanetInfo] = useState<any>()

  const kelvinForCelsius = (tempKelvin: number) => {
    return tempKelvin - 273.15
  }

  useEffect(() => {
    const planet = planets.filter((item: any) => {
        return item.englishName == planetName
    })
    setPlanetInfo(planet[0])
    console.log(planets)  
  } 
  , [planets]);

  return (
    <div>
      <div
        className={`animation-planet m-4 d-flex justify-content-center align-items-center`}
      >
        <div className="text-light d-flex">
          <div>
            <img src={imgSrc} alt="" className="all-cards-size" />
          </div>
          <Card
            style={{ width: "15em" }}
            className="bg-transparent border-0"
            id="children-card"
          >
            <Card.Body className="text-light d-flex flex-column justify-content-center">
              <Card.Title className="text-light">{planetInfo?.englishName}</Card.Title>
              <Card.Subtitle className="mb-2 text-light">
              Avg temperature: {kelvinForCelsius(planetInfo?.avgTemp).toFixed(2)}ºC
              </Card.Subtitle>
              <Card.Text className="m-0">
                Mass: {planetInfo?.mass.massValue} x 10^{planetInfo?.mass.massExponent}
              </Card.Text>
              <Card.Text className="m-0">
                Gravity: {planetInfo?.gravity} m/s^2
              </Card.Text>
              <Card.Text>
                Density: {planetInfo?.density.toFixed(2)}  g/cm^3
              </Card.Text>
              <Button variant="dark" className="w-75">
                About More
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;
