import React from "react"
import Header from "../components/header"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return <div className="">
    <Header />
    <div className="container-fluid ">
        <div className="row cuadros1">
          <div className="col-md-6 p-0 shadow " id="image-contact">
          </div>
          <div className="col-md-6 mx-auto ">
          <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-sm-8 align-self-center text-center">
                <div className="text-center">
                  <h3 class="primary text-orange">Contáctenos</h3>
                </div>
                <p className="text-muted">
                Estaremos contentos de responder cualquier inquietud que tenga. Solicite información con los contactos que le ofrecemos a continuación. Nuestro dedicado personal en Hotel El Reposo responderá con brevedad.
                </p>
                <div className="text-center">
                  <h1 className="text-free">Hotel El reposo</h1>
                    <p className="text-roboto">Teléfono: <spam class="bold">+593 5 262 9200</spam> </p>
                    <p className="text-roboto">Correo electronico: <br/> <spam class="bold">reservas_mta@elreposohotel.com</spam>  </p>
                    <a target="_blank" href="http://www.facebook.com"><img src="/img/facebook.svg"  className="m-1" width="45px"/></a>
                    <a target="_blank" href="http://www.instagram.com"><img src="/img/instagram.svg" className="m-1" width="45px"/></a>
                    <a target="_blank" href="http://www.twitter.com"><img src="/img/twitter.svg" className="m-1" width="45px"/></a>
                </div>
                </div>
            </div>
          </div>
           {/* 
            <div >
              <p class="text-roboto">
              Estaremos contentos de responder cualquier inquietud que tenga. Para solicitudes formales, complete nuestro breve formulario. Nuestro dedicado personal en Hotel El Reposo responderá con brevedad.
              </p>
            </div> */}
          </div>
        </div>
    </div>
  </div>
}
