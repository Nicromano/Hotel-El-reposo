import React from "react"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return <div>
    <Header />
    <div class="container">
        <div class="row align-items-center ">
          <div class="col-md-6">
            <div class="mt-5">
              <p class="marca">Hotel El Reposo<span class="punto">.</span></p>
              <h3>El mejor hotel a tu disposición</h3>
              <h4 class="text-muted">Mira nuestras habitaciones</h4>
              <p class="pt-3">
                <button class="btn btn-primary btn-lg"><a class="text-white text-decoration-none" href="/rooms">Habitaciones</a></button>
             </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="m-5">
              <img src="/img/apartment.svg" width="500"  class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto mt-5">
            <a href="#somos">
              <img class="img-fluid " width="50"  src="/img/down-arrow.svg" />
            </a>
          </div>
        </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-md-center">
            <div class="col-md-auto mt-5 mb-3">
              <a name="somos"><h3 class="primary" >¿Quienes somos?</h3></a>
            </div>
          </div>
      </div>
      <div class="row justify-content-md-center">
          <div class="col-md-12 intermedio">
              <div class="row justify-content-md-center p-5">
                <div class="col-md-4 text-right pr-5">
                   <img class="img-fluid " width="150"  src="/img/stars.svg" />
                </div>
                <div class="col-md-4 text-left p-4">
                  <h2 class="bold">5 Estrellas</h2>
                  <p class="text-muted">Somos un cadena de hoteles con una alta clasificación con habitaciones totalmente de lujo para hacer de su estadia la mejor experiencia.</p>
                </div>
              </div>
          </div>
       </div>
      <div class="row justify-content-md-center">
          <div class="col-md-12 ">
              <div class="row justify-content-md-center p-5">
                <div class="col-md-4 text-right pr-5 mt-5">
                  <h2 class="bold">Servicio de habitaciones</h2>
                  <p class="text-muted">Hoteles El Reposo ofrece un servicio de habitaciones totalmente garantizado las 24 horas del día.</p>
                 </div>
                <div class="col-md-4 text-left p-4">
                   <img class="img-fluid " width="150"  src="/img/24-hours.svg" />
                </div>
              </div>
          </div>
       </div>
       <div class="row justify-content-md-center">
          <div class="col-md-12 intermedio">
              <div class="row justify-content-md-center p-5">
                <div class="col-md-4 text-right pr-5">
                   <img class="img-fluid " width="150"  src="/img/life-insurance.svg" />
                </div>
                <div class="col-md-4 text-left p-4">
                  <h3 class="bold">Medidas de Bioseguridad</h3>
                  <p class="text-muted">Contamos con excelentes medidas de bioseguridad con el fin de evitar contagios por COVID-19 haciendo de Hoteles El Reposo la mejor de las opciones.</p>
                </div>
              </div>
          </div>
       </div>

  </div>
}
