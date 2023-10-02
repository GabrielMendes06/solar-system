import Paragraph from "../GlobalComponents.tsx/Paragraph"
import ApresentationMark from "../Navbar/ApresentationMark"
import './css/footer.css'

const FinalPage: React.FC = () => {
    return(
        <div className="container-footer m-auto bg-black">
                <div className="row border-bottom">
                    <div className="col-sm flex p-3">
                        <ApresentationMark />
                    </div>
                    <div className="col-sm flex justify-content-end p-3">
                        <i className="bi bi-linkedin mx-3 text-light size"></i>
                        <i className="bi bi-github mx-3 text-light size"></i>
                        <i className="bi bi-whatsapp mx-3 text-light size"></i>
                        <i className="bi bi-envelope mx-3 text-light size"></i>
                    </div>
                </div>
                <div>
                    <Paragraph content="created by Gabriel Mendes ©" className="m-0 text-light text-center p-3"/>
                </div>
        </div>
    )
}

export default FinalPage