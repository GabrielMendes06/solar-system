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
            <div className={`w-100 ${navbarClass} transiction position-fixed`}>
                <div className="row">
                    <ColumNav className="col-sm d-flex align-items-center w-50">
                        <ApresentationMark />
                    </ColumNav>
                    <ColumNav className="col-sm d-flex align-items-center justify-content-end w-50">
                        <NavbarModal />
                    </ColumNav>                
                </div>                         
            </div>            
    )
}

export default Navbar