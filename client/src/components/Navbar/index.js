import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">(React) Google Books Search</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/search'><div className="nav-link">Search</div></Link>
        </li>
        <li className="nav-item">
          <Link to='/saved'><div className="nav-link">Saved</div></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar