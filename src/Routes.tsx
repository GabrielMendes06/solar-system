import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Mercury from "./Page/Planets/Mercury"

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path="/" element={ <Home /> } />
                <Route path="/mercury" element={ <Mercury /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes