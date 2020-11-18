import React from "react"

export default function Header() {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src="/img/review.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            <span className="ml-1">Hotel El Reposo</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="rooms/">Habitaciones<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact/">Contactos</a>
            </li>
            
            </ul>
        </div>
    </nav>
  </div>
}