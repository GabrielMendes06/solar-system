import CardPlanets from "../../GlobalComponents.tsx/CardPlanets";
import Title from "../../GlobalComponents.tsx/Title";

const CardContainer: React.FC = () => {
  return (
    <div className="container">
      <Title content='Planets' className="text-center text-light pt-5"/>
      <div className="row d-flex justify-content-center">    
        <CardPlanets className="mercury-bg" content="MERCURY"/>
        <CardPlanets className="venus-bg" content="VENUS"/>
        <CardPlanets className="earth-bg" content="EARTH"/>  
        <CardPlanets className="mars-bg" content="MARS"/>
        <CardPlanets className="jupiter-bg" content="JUPITER"/>
        <CardPlanets className="saturn-bg" content="SATURN"/>
        <CardPlanets className="uranus-bg" content="URANUS"/>
        <CardPlanets className="neptune-bg" content="NEPTUNE" />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default CardContainer;
