import ColumNav from "./ColumNav"
import "./navbar.css"
import NavbarModal from "./NavbarModal"
import ApresentationMark from "./ApresentationMark"

function Navbar() {
    return(
        <div className="container.fluid bg-dark" id="navbar">
            <div className="row">
                <ColumNav className="half">
                    <ApresentationMark />
                </ColumNav>
                <ColumNav className="flex-end half">
                    <NavbarModal />
                </ColumNav>
            </div>
        </div>
    )
}

export default Navbar