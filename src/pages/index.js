import React from "react"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return <div>
    <Header />
    <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <div className="mt-5">
              <p className="marca">Hotel El Reposo<span className="punto">.</span></p>
              <h3>El mejor hotel a tu disposición</h3>
              <h4 className="text-muted">Mira nuestras habitaciones</h4>
              <p className="pt-3">
                <button className="btn btn-primary btn-lg"><a className="text-white text-decoration-none" href="/rooms">Habitaciones</a></button>
             </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-5">
              <img src="/img/apartment.svg" width="500"  className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto mt-5">
            <a href="#somos">
              <img className="img-fluid " width="50"  src="/img/down-arrow.svg" />
            </a>
          </div>
        </div>
    </div>
    <div className="container-fluid">
      <div className="row justify-content-md-center">
            <div className="col-md-auto mt-5 mb-3">
              <a name="somos"><h3 className="primary" >¿Quienes somos?</h3></a>
            </div>
          </div>
      </div>
      <div className="row justify-content-md-center">
          <div className="col-md-12 intermedio">
              <div className="row justify-content-md-center p-5">
                <div className="col-md-4 text-right pr-5">
                   <img className="img-fluid " width="150"  src="/img/stars.svg" />
                </div>
                <div className="col-md-4 text-left p-4">
                  <h2 className="bold">5 Estrellas</h2>
                  <p className="text-muted">Somos un cadena de hoteles con una alta clasificación con habitaciones totalmente de lujo para hacer de su estadia la mejor experiencia.</p>
                </div>
              </div>
          </div>
       </div>
      <div className="row justify-content-md-center">
          <div className="col-md-12 ">
              <div className="row justify-content-md-center p-5">
                <div className="col-md-4 text-right pr-5 mt-5">
                  <h2 className="bold">Servicio de habitaciones</h2>
                  <p className="text-muted">Hoteles El Reposo ofrece un servicio de habitaciones totalmente garantizado las 24 horas del día.</p>
                 </div>
                <div className="col-md-4 text-left p-4">
                   <img className="img-fluid " width="150"  src="/img/24-hours.svg" />
                </div>
              </div>
          </div>
       </div>
       <div className="row justify-content-md-center">
          <div className="col-md-12 intermedio">
              <div className="row justify-content-md-center p-5">
                <div className="col-md-4 text-right pr-5">
                   <img className="img-fluid " width="150"  src="/img/life-insurance.svg" />
                </div>
                <div className="col-md-4 text-left p-4">
                  <h3 className="bold">Medidas de Bioseguridad</h3>
                  <p className="text-muted">Contamos con excelentes medidas de bioseguridad con el fin de evitar contagios por COVID-19 haciendo de Hoteles El Reposo la mejor de las opciones.</p>
                </div>
              </div>
          </div>
       </div>

  </div>
}
