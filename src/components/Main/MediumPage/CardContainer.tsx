import CardPlanets from "../../GlobalComponents.tsx/CardPlanets";
import Title from "../../GlobalComponents.tsx/Title";
import { Fade } from "react-awesome-reveal";
import MercuryCard from "../assets/mercury(card).webp"
import VenusCard from "../assets/venus(card).webp"
import EarthCard from "../assets/earth.webp"
import MarsCard from "../assets/mars(card).webp"
import JupiterCard from "../assets/jupiter(card).webp"
import SaturnCard from "../assets/saturn(card).webp"
import UranusCard from "../assets/uranus(card).webp"
import NeptuneCard from "../assets/neptune(card).webp"


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
