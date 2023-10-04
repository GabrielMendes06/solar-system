import Paragraph from "../GlobalComponents.tsx/Paragraph"
import CustomDropDown from "../Navbar/CustomDropDown"
import DropdownItem from "../Navbar/DropdownItem"

const MeteorsDropDown: React.FC = () => {
    return(
        <CustomDropDown title={"Asteroids, Comets and Meteors"}>
          <Paragraph
            className="align-self-start m-2 new-font border-bottom subtitle-text"
            content="About Asteroids, Comets and Meteors"
          />
          <ul className="row flex-nowrap flex-row list-unstyled d-flex flex-column w-100">
            <div className="row">
              <div className="col-sm">
                  <DropdownItem href="#/action-8" content="Meteors & Meteorites" />
                  <DropdownItem href="#/action-8" content="Asteroids" />
                  <DropdownItem href="#/action-1" content="Comets" />
              </div>
            </div>
          </ul>
        </CustomDropDown>
    )
}

export default MeteorsDropDown