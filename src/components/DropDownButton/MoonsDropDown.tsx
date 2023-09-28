import { useContext, useEffect, useState } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";
import Paragraph from "../GlobalComponents.tsx/Paragraph";
import CustomDropDown from "../Navbar/CustomDropDown";
import DropdownItem from "../Navbar/DropdownItem";
import axios from "axios";

const MoonsDropDown: React.FC = () => {
  const { planets } = useContext(InfSolarSystem);

  return (

        <CustomDropDown title={"Moons"}>
          <div className="container-grid">
              <Paragraph
                className="start new-font border-bottom subtitle-text"
                content="About moons"
              />
              <ul className="row wrap-direction list">
                <div className="row">
                  {planets.map((planet: any, index: number): React.ReactNode => {
                    const moonArray = planet.moons;
                    const moons = [];
                    for (let key in moonArray) {
                      moons.push(moonArray[key]);
                    }
                    return (
                      <div className="col-6">
                        <DropdownItem
                          key={index}
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
