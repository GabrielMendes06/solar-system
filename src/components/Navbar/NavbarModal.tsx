import { useState, useEffect, useContext } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApresentationMark from "./ApresentationMark";
import CustomDropDown from "./CustomDropDown";
import DropdownItem from "./DropdownItem";
import Paragraph from "../GlobalComponents.tsx/Paragraph";
import axios from "axios";
import PlanetDropDown from "../DropDownButton/PlanetDropDown";
import MoonsDropDown from "../DropDownButton/MoonsDropDown";
import { InfDwarfPlanets } from "../CompContext/infDwarfPlanets";

const NavbarModal: React.FC = () => {
  const values = ["xxl-down"];
  const { setPlanets } = useContext(InfSolarSystem);
  const { setDwarfPlanets } = useContext(InfDwarfPlanets)
  const [fullscreen, setFullscreen] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  async function SolarSystemInformations() {
    try {
      const resPlanets = await axios.get(
        "https://api.le-systeme-solaire.net/rest.php/bodies?filter=isPlanet,eq,true"
      );
      const dwarfPlanets = await axios.get(
        "https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=bodyType%2Ceq%2CDwarf%20Planet"
      );
      setPlanets(resPlanets.data.bodies)
      setDwarfPlanets(dwarfPlanets.data.bodies)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SolarSystemInformations();
  }, []);

  return (
    <>
      <div className="flex show-desktop">
        <PlanetDropDown />
        <MoonsDropDown />
        <CustomDropDown title={"Asteroides, Cometas e Meteoros"}>
          <Paragraph
            className="start new-font border-bottom subtitle-text"
            content="Sobre os Asteroides, Cometas e Meteoros"
          />
          <ul className="row wrap-direction list">
            <div className="col-sm">
              <DropdownItem href="#/action-8" content="Meteoros & Meteoritos" />
              <DropdownItem href="#/action-8" content="Asteroides" />
            </div>
            <div className="col-sm">
              <DropdownItem href="#/action-1" content="Cometas" />
            </div>
          </ul>
        </CustomDropDown>
      </div>
      <div className="show-mobile">
        <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
          <i className="bi bi-list icon-burguer"></i>
        </Button>
      </div>

      <Modal
        show={show}
        fullscreen={`${fullscreen}`}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton className="bg-primary">
          <Modal.Title className="flex">
            <ApresentationMark />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary">
          <ul className="list">
            <li>
              <PlanetDropDown />
            </li>
            <li>
              <MoonsDropDown />
            </li>
            <li>
              <CustomDropDown title={"Asteroides, Cometas e Meteoros"}>
                <Paragraph
                  className="start new-font border-bottom subtitle-text"
                  content="Sobre os Asteroides, Cometas e Meteros"
                />
                <ul className="row wrap-direction list container.fluid">
                  <div className="col-sm">
                    <DropdownItem
                      href="#/action-8"
                      content="Meteoros & Meteoritos"
                    />
                    <DropdownItem href="#/action-8" content="Asteroides" />
                  </div>
                  <div className="col-sm">
                    <DropdownItem href="#/action-1" content="Cometas" />
                  </div>
                </ul>
              </CustomDropDown>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarModal;
