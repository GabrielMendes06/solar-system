import DropdownItem from "../Navbar/DropdownItem";
import Paragraph from "../GlobalComponents.tsx/Paragraph";
import CustomDropDown from "../Navbar/CustomDropDown";
import { useContext, ReactNode } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";
import { InfDwarfPlanets } from "../CompContext/infDwarfPlanets";



const PlanetDropDown: React.FC = () => {
    
    const { planets } = useContext(InfSolarSystem)
    const { dwarfPlanets } = useContext(InfDwarfPlanets)

    return (
        <CustomDropDown title={"Planets"} >
          <div className="container container-grid" >
            <Paragraph
              className="align-self-start m-2 new-font border-bottom subtitle-text"
              content="About Planets"
            />
            <Paragraph className="align-self-start m-2 new-font" content="Planets" />
            <ul className="row flex-nowrap flex-row list-unstyled d-flex flex-column w-100 border-bottom">
              <div className="row">
                {planets.map((planet: any, index: number): React.ReactNode => {
                  return (
                    <div className="col-6">
                      <DropdownItem
                        key={index}
                        href="#/action-1"
                        content={planet.englishName}
                      />
                    </div>
                  );
                })}
              </div>
            </ul>
            <Paragraph className="align-self-start m-2 new-font" content="Dwarf Planets" />
            <ul className="row flex-nowrap flex-row list-unstyled d-flex">
              <div className="row">
                {dwarfPlanets.map((dwarfPlanet: any, index: number): React.ReactNode => {
                    return(
                    <div className="col-6">
                        <DropdownItem 
                        key={index}
                        href="#"
                        content={dwarfPlanet.englishName.replace(/^\d+\s/, '')}
                        />
                    </div>
                    );
                })}
              </div>
            </ul>
          </div>
        </CustomDropDown>
    )
}

export default PlanetDropDown