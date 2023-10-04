import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Page/Home"

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes