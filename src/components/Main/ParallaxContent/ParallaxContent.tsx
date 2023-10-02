import Paragraph from "../../GlobalComponents.tsx/Paragraph"
import Title from "../../GlobalComponents.tsx/Title"

const ParallaxContent: React.FC = () => {
    return(
        <div className="black-hole-background d-flex align-items-center py-5">
            <div className="container m-auto row">
                <div className="col-8 m-5 p-4 bg-dark-transparent">
                    <Title className="text-light h2" content="Sagittarius A*" />
                    <Paragraph className="text-light font-sm" content="Did you know that our solar system is located in the Milky Way galaxy, a galaxy that revolves around a supermassive black hole? After monitoring stellar orbits around Sagittarius A* for 16 years, Gillessen et al. estimated the object's mass at 4.31±0.38 million solar masses. The result was announced in 2008 and published in The Astrophysical Journal in 2009."/>
                </div>
            </div>
        </div>
    )
}

export default ParallaxContent