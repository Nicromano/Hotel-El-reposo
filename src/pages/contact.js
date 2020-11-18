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
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"/>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"/>
  </div>
}
