import { useContext } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";
import Paragraph from "../GlobalComponents.tsx/Paragraph";
import CustomDropDown from "../Navbar/CustomDropDown";
import DropdownItem from "../Navbar/DropdownItem";

const MoonsDropDown: React.FC = () => {
  const { planets } = useContext(InfSolarSystem);

  return (

        <CustomDropDown  title={"Moons"}>
          <div className="container-grid">
              <Paragraph
                className="align-self-start m-2 new-font border-bottom subtitle-text"
                content="About moons"
              />
              <ul className="row flex-nowrap flex-row list-unstyled flex-column w-100 d-flex">
                <div className="row">
                  {planets.map((planet: any): React.ReactNode => {
                    const moonArray = planet.moons;
                    const moons = [];
                    for (let key in moonArray) {
                      moons.push(moonArray[key]);
                    }
                    return (
                      <div className="col-6" key={planet.id}>
                        <DropdownItem
                          href="#/action-1"
                          content={`${planet.englishName} (${moons.length})`}
                        />
                      </div>
                    );
                  })}
                </div>
              </ul>
          </div>
        </CustomDropDown>
    
  );
};

export default MoonsDropDown;
