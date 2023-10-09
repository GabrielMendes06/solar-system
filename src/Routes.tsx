import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./Page/Home"
import Mercury from "./Page/Planets/Mercury"
import Venus from "./Page/Planets/Venus"
import Earth from "./Page/Planets/Earth"
import Mars from "./Page/Planets/Mars"
import Jupiter from "./Page/Planets/Jupiter"
import Saturn from "./Page/Planets/Saturn"
import Uranus from "./Page/Planets/Uranus"
import Neptune from "./Page/Planets/Neptune"
import ScrollToTop from "./components/GlobalComponents.tsx/ScrollToTop"

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
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
                
            </Routes>
        </Router>
    )
}

export default AppRoutes