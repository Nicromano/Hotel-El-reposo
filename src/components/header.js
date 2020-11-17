import React from "react"

export default function Header() {
  return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
            <img src="/img/review.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
            <span class="ml-1">Hotel El Reposo</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/rooms">Habitaciones<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contactos</a>
            </li>
            
            </ul>
        </div>
    </nav>
  </div>
}