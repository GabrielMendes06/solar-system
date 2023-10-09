import { Link } from "react-router-dom"
import Paragraph from "../GlobalComponents.tsx/Paragraph"
import ApresentationMark from "../Navbar/ApresentationMark"
import './css/footer.css'

const FinalPage: React.FC = () => {
    return(
        <div className="container m-auto">
                <div className="row border-bottom">
                    <div className="col-sm flex p-3">
                        <ApresentationMark />
                    </div>
                    <div className="col-sm flex justify-content-center p-3">
                        <Link to={'https://www.linkedin.com/in/gabrielmendes7/'} target={"_blank"}><i className="bi bi-linkedin mx-3 text-light size"></i></Link>
                        <Link to={'https://github.com/GabrielMendes06'} target={"_blank"}><i className="bi bi-github mx-3 text-light size"></i></Link>
                        <Link to={'https://wa.me/5511977829550'} target={'_blank'}><i className="bi bi-whatsapp mx-3 text-light size"></i></Link>
                        <Link to={'mailto:gabriel.mendes17@outlook.com'} target={'_blank'}><i className="bi bi-envelope mx-3 text-light size"></i></Link>
                    </div>
                </div>
                <div>
                    <Paragraph content="created by Gabriel Mendes ©" className="m-0 text-light text-center p-3"/>
                </div>
        </div>
    )
}

export default FinalPage