import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"


function MainRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skill" element={<Skills />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    )
}
export default MainRoute