import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApresentationMark from "./ApresentationMark";
import CustomDropDown from "./CustomDropDown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "./DropdownItem";

function NavbarModal() {
  const values = ["xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div className="flex show-desktop">
        <CustomDropDown title={"Planetas"}>
          <div className="container" id="container-grid">
            <p className="start new-font border-bottom ">Sobre os Planetas</p>
            <p className="start new-font">Planetas anões</p>
            <ul className="row wrap-direction list border-bottom">          
              <div className="col-sm ">             
                <DropdownItem href="#/action" content="Netuno" />
                <DropdownItem href="#/action-1" content="Urano" />
                <DropdownItem href="#/action-2" content="Saturno" />
                <DropdownItem href="#/action-3" content="Júpiter" />
              </div>
              <div className="col-sm ">
                <DropdownItem href="#/action-4" content="Marte" />
                <DropdownItem href="#/action-5" content="Terra" />
                <DropdownItem href="#/action-6" content="Vênus" />
                <DropdownItem href="#/action-7" content="Mercúrio" />
              </div>
            </ul>
            <p className="start new-font">Planetas anões</p>
            <ul className="row wrap-direction list">
            <div className="col-sm">
              <DropdownItem href="#/action-3" content="Plutão" />
              <DropdownItem href="#/action-3" content="Ceres" />
              <DropdownItem href="#/action-3" content="Makemake" />
            </div>
            <div className="col-sm">
              <DropdownItem href="#/action-3" content="Haumea" />
              <DropdownItem href="#/action-3" content="Eris" />
            </div>
            </ul>
          </div>
        </CustomDropDown>
        <div className="container">
          <CustomDropDown title={"Luas"}>
          <p className="start new-font border-bottom ">Sobre as luas</p>
          <ul className="row wrap-direction list">
            <div className="col-sm">
              <DropdownItem href="#/action-8" content="Netuno (14)"/>
              <DropdownItem href="#/action-1" content="Urano (27)"/>
              <DropdownItem href="#/action-1" content="Saturno (83)"/>
              <DropdownItem href="#/action-1" content="Jupiter (95)"/>
            </div>
            <div className="col-sm">
              <DropdownItem href="#/action-1" content="Marte (2)"/>
              <DropdownItem href="#/action-1" content="Terra (1)"/>
              <DropdownItem href="#/action-1" content=""/>
            </div>
          </ul>   
        </CustomDropDown>
        </div>
        <CustomDropDown title={"Asteroides, Cometas e Meteóros"}>
        <p className="start new-font border-bottom ">Sobre os Arteroides, Cometas e Meteóros</p>
        <ul className="row wrap-direction list">
            <div className="col-sm">
              <DropdownItem href="#/action-8" content="Meteoros & Meteoritos"/>
              <DropdownItem href="#/action-8" content="Asteroides"/>
            </div>
            <div className="col-sm">
              <DropdownItem href="#/action-1" content="Cometas"/>
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
              <CustomDropDown title={"Planetas"}>
                <ul className="row wrap-direction list">
                  <div className="col-sm">
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Netuno</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Urano</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Saturno</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Júpiter</Dropdown.Item>
                    </li>
                  </div>
                  <div className="col-sm">
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Marte</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Terra</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Vênus</Dropdown.Item>
                    </li>
                    <li>
                      {" "}
                      <Dropdown.Item href="#/action-2">Mercúrio</Dropdown.Item>
                    </li>
                  </div>
                </ul>
              </CustomDropDown>
            </li>
            <li>
              <CustomDropDown title={"Cience"} />
            </li>
            <li>
              <CustomDropDown title={"Planets"} />
            </li>
            <li>
              <CustomDropDown title={"Solar System"} />
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarModal;
