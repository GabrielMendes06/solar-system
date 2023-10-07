import CardPlanets from "../../GlobalComponents.tsx/CardPlanets";
import Title from "../../GlobalComponents.tsx/Title";
import { Fade } from "react-awesome-reveal";
import MercuryCard from "../assets/mercury(card).webp";
import VenusCard from "../assets/venus(card).webp";
import EarthCard from "../assets/earth.webp";
import MarsCard from "../assets/mars(card).webp";
import JupiterCard from "../assets/jupiter(card).webp";
import SaturnCard from "../assets/saturn(card).webp";
import UranusCard from "../assets/uranus(card).webp";
import NeptuneCard from "../assets/neptune(card).webp";
import { useNavigate } from "react-router-dom";

const CardContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Title content="Planets" className="text-center text-light pt-5" />
      <div className="container">
        <Fade
          className="d-flex justify-content-center"
          direction="left"
          triggerOnce={true}
        >
          <CardPlanets
            imgSrc={MercuryCard}
            planetName="Mercury"
            onClick={() => navigate("/mercury")}
          />
          <CardPlanets
            imgSrc={VenusCard}
            planetName="Venus"
            onClick={() => navigate("/venus")}
          />
          <CardPlanets
            imgSrc={EarthCard}
            planetName="Earth"
            onClick={() => navigate("/earth")}
          />
          <CardPlanets
            imgSrc={MarsCard}
            planetName="Mars"
            onClick={() => navigate("/mars")}
          />
          <CardPlanets
            imgSrc={JupiterCard}
            planetName="Jupiter"
            onClick={() => navigate("/jupiter")}
          />
          <CardPlanets
            imgSrc={SaturnCard}
            planetName="Saturn"
            onClick={() => navigate("/saturn")}
          />
          <CardPlanets
            imgSrc={UranusCard}
            planetName="Uranus"
            onClick={() => navigate("/uranus")}
          />
          <CardPlanets
            imgSrc={NeptuneCard}
            planetName="Neptune"
            onClick={() => {
              navigate("/neptune")
            }}
          />
        </Fade>
      </div>

      <div className="row"></div>
    </div>
  );
};

export default CardContainer;
