import { useState, useEffect, useContext } from "react";
import { InfSolarSystem } from "../CompContext/InfSolarSystem";
import { InfDwarfPlanets } from "../CompContext/infDwarfPlanets";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApresentationMark from "./ApresentationMark";
import axios from "axios";
import PlanetDropDown from "../DropDownButton/PlanetDropDown";
import MoonsDropDown from "../DropDownButton/MoonsDropDown";
import MeteorsDropDown from "../DropDownButton/MeteorsDropDown";

const NavbarModal: React.FC = () => {
  const values = ["xxl-down"];
  const { setPlanets } = useContext(InfSolarSystem);
  const { setDwarfPlanets } = useContext(InfDwarfPlanets);
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
      setPlanets(resPlanets.data.bodies);
      setDwarfPlanets(dwarfPlanets.data.bodies);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SolarSystemInformations();
  }, []);

  return (
    <>
      <div className="flex show-desktop justify-content-end w-100">
        <PlanetDropDown />
        <MoonsDropDown />
        <MeteorsDropDown />
      </div>
      <div className="show-mobile">
        <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
          <i className="bi bi-list icon-burguer   display-1 text-light bg-transparent rounded-circle"></i>
        </Button>
      </div>
      <Modal
        show={show}
        fullscreen={`${fullscreen}`}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton className="bg-primary">
          <Modal.Title className="d-flex align-items-center">
            <ApresentationMark />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary">
          <ul className="list-unstyled flex-column w-100 d-flex">
            <li>
              <PlanetDropDown />
            </li>
            <li>
              <MoonsDropDown />
            </li>
            <li>
              <MeteorsDropDown />
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarModal;
