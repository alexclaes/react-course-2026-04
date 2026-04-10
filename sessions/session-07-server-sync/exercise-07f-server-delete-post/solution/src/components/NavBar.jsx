import { NavLink } from "react-router";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">Startseite</NavLink>
      <NavLink to="/posts">Alle Beiträge</NavLink>
      <NavLink to="/add-post">Beitrag hinzufügen</NavLink>
    </nav>
  )
}