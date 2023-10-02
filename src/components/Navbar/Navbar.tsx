import ColumNav from "./ColumNav"
import "./css/navbar.css"
import "../../App.css"
import NavbarModal from "./NavbarModal"
import ApresentationMark from "./ApresentationMark"
import { useState, useEffect } from "react"

const Navbar: React.FC = () => {

    const [navbarClass, setNavbarClass] = useState<string>('bg-transparent');

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 100) {
                setNavbarClass('bg-primary');
            } else {
                setNavbarClass('bg-transparent')
            }
        }
        window.addEventListener('scroll', handleScroll);
        
    },[])

    return(     
            <div className={`${navbarClass} w-100  transiction position-fixed`} id="overlaid">
                <div className="row">
                    <ColumNav className="col-sm d-flex align-items-center w-75 text-small">
                        <ApresentationMark />
                    </ColumNav>
                    <ColumNav className="col-sm d-flex align-items-center justify-content-end w-25 text-small">
                        <NavbarModal />
                    </ColumNav>                
                </div>                         
            </div>            
    )
}

export default Navbar