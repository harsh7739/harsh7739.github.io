import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div data-testid="nav-menu" style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
            <Link className="nav-link home" to={"/"}>Home</Link>
            <Link className="nav-link about" to={"/about"}>About</Link>
            <Link className="nav-link skills" to={"/skill"}>Skills</Link>
            <Link className="nav-link projects" to={"/project"}>Project</Link>
            <Link className="nav-link contact" to={"/contact"}>Contact</Link>
            <Link className="nav-link resume" to={"/resume"}>Resume</Link>
        </div>
    )
}
export default Navbar