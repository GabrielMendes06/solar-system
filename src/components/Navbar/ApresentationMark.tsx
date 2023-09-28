import Paragraph from "../GlobalComponents.tsx/Paragraph";
import SolarSystem from "./assets/sistema-solar.png";

const ApresentationMark = () => {
  return (
    <>
      <img src={SolarSystem} alt="SolarSystem" className="icon-nav" />
      <div>
        <Paragraph
          className="text-light new-font config-text"
          content="SolarSystem"
        />
        <Paragraph
          className="text-light new-font config-text thin-text"
          content="Galaxy of the universe, our home"
        />
      </div>
    </>
  );
}

export default ApresentationMark;
