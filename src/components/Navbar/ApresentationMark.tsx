import { useNavigate } from "react-router-dom";
import Paragraph from "../GlobalComponents.tsx/Paragraph";
import SolarSystem from "./assets/sistema-solar.png";

const ApresentationMark = () => {
  const navigate = useNavigate();

  return (
    <>
      <img src={SolarSystem} alt="SolarSystem" className="icon-nav mx-3" onClick={() => { 
        window.scrollTo(0, 0)
        navigate("/")
      }}/>
      <div>
        <Paragraph
          className="text-light new-font config-text"
          content="SolarSystem"
        />
        <Paragraph
          className="text-light new-font config-text thin-text"
          content="Milky Way, our home"
        />
      </div>
    </>
  );
}

export default ApresentationMark;
