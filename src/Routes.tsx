import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Mercury from "./Page/Planets/Mercury"
import Venus from "./Page/Planets/Venus"
import Earth from "./Page/Planets/Earth"
import Mars from "./Page/Planets/Mars"
import Jupiter from "./Page/Planets/Jupiter"
import Saturn from "./Page/Planets/Saturn"
import Uranus from "./Page/Planets/Uranus"
import Neptune from "./Page/Planets/Neptune"
import Eris from "./Page/Planets/DwarfPlanets/Eris"
import Pluto from "./Page/Planets/DwarfPlanets/Pluto"
import Makemake from "./Page/Planets/DwarfPlanets/Makemake"
import Haumea from "./Page/Planets/DwarfPlanets/Haumea"
import Meteors from "./Page/Asteroids_Comets&Meteorites/Meteors"
import Asteroids from "./Page/Asteroids_Comets&Meteorites/Asteroids"
import Comets from "./Page/Asteroids_Comets&Meteorites/Comets"
import Sun from "./Page/Sun/Sun"
import Moon from "./Page/Moons/Moon"
import MarsMoon from "./Page/Moons/MarsMoon"
import JupiterMoon from "./Page/Moons/JupiterMoon"
import SaturnMoon from "./Page/Moons/SaturnMoon"
import UranusMoon from "./Page/Moons/UranusMoon"
import NeptuneMoon from "./Page/Moons/NeptuneMoon"

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                {/* Planets  */}
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path="/" element={ <Home /> } />
                <Route path="/mercury" element={ <Mercury /> } />
                <Route path="/venus" element={ <Venus /> } />
                <Route path="/earth" element={ <Earth /> } />
                <Route path="/mars" element={ <Mars /> } />
                <Route path="/jupiter" element={ <Jupiter /> } />
                <Route path="/saturn" element={ <Saturn /> } />
                <Route path="/uranus" element={ <Uranus /> } />
                <Route path="/neptune" element={ <Neptune /> } />
                
                {/* DwarfPlanets */}
                <Route path="/dwarf-planets/eris" element={ <Eris /> } />
                <Route path="/dwarf-planets/pluto" element={ <Pluto /> } />
                <Route path="/dwarf-planets/makemake" element={ <Makemake /> } />
                <Route path="/dwarf-planets/haumea" element={ <Haumea /> } />

                {/* Meteors, Comets And Asteroids */}
                <Route path="/meteors-meteorites" element={ <Meteors /> } />
                <Route path="/asteroids" element={ <Asteroids /> } />
                <Route path="/comets" element={ <Comets /> } />

                {/* Sun */}
                <Route path="/sun" element={ <Sun /> } />

                {/* Moons */}
                <Route path="/earth/moon" element={ <Moon /> } />
                <Route path="/mars/moon" element={ <MarsMoon /> } />
                <Route path="/jupiter/moon" element={ <JupiterMoon /> } />
                <Route path="/saturn/moon" element={ <SaturnMoon /> } />
                <Route path="/uranus/moon" element={ <UranusMoon /> } />
                <Route path="/neptune/moon" element={ <NeptuneMoon /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes