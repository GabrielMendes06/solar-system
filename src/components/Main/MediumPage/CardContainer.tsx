import CardPlanets from "../../GlobalComponents.tsx/CardPlanets";
import Title from "../../GlobalComponents.tsx/Title";
import { Fade } from "react-awesome-reveal";
import MercuryCard from "../assets/mercury(card).png"
import VenusCard from "../assets/venus(card).png"
import EarthCard from "../assets/earth.png"
import MarsCard from "../assets/mars(card).png"
import JupiterCard from "../assets/jupiter(card).png"
import SaturnCard from "../assets/saturn(card).png"
import UranusCard from "../assets/uranus(card).png"
import NeptuneCard from "../assets/neptune(card).png"


const CardContainer: React.FC = () => {
  return (
    <div className="container">
      <Title content="Planets" className="text-center text-light pt-5" />      
        <div className="container">
          <Fade className="d-flex justify-content-center" direction="left" triggerOnce={true}>  
          <CardPlanets imgSrc={MercuryCard} planetName="Mercury"/>
          <CardPlanets imgSrc={VenusCard} planetName="Venus"/>
          <CardPlanets imgSrc={EarthCard} planetName="Earth"/>
          <CardPlanets imgSrc={MarsCard} planetName="Mars"/>
          <CardPlanets imgSrc={JupiterCard} planetName="Jupiter"/>
          <CardPlanets imgSrc={SaturnCard} planetName="Saturn"/>
          <CardPlanets imgSrc={UranusCard} planetName="Uranus"/>
          <CardPlanets imgSrc={NeptuneCard} planetName="Neptune"/>
          </Fade>
        </div>
      
      <div className="row"></div>
    </div>
  );
};

export default CardContainer;
