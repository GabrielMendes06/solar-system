import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Mercury from "./Page/Planets/Mercury"
import Venus from "./Page/Planets/Venus"
import Earth from "./Page/Planets/Earth"
import Mars from "./Page/Planets/Mars"

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
            </Routes>
        </Router>
    )
}

export default AppRoutes