import React from "react"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Rooms() {
    return <div>
    <Header />
    <div className="container">
       <div className="row justify-content-end pt-3 pr-3">
            <div className="col-md-4 text-right ">
                <p className="text-muted pb-0 mb-0">Accede a un vistazo de las</p>
                <h2 className="secondary text-right pt-0 mt-0">Habitaciones</h2>
            </div>
            <div className="col-md-auto p-0 m-0">
                <div className="vertical-line" > </div>
            </div>
       </div>
       <div className="row justify-content-md-center  mt-4">
           <div className="col-md-3">
               <p className="text-muted text-left">
                   Las habitaciones cuentan con un alto servicio de limpieza cumpliendo reglamentos tanto de sanidad como de estética. Además su decoración está basada en estándares profesionales para deleitar la vista del cliente. 
               </p>
               <a href="#mas-habitaciones" role="button" className="btn btn-outline-warning">Más habitaciones</a>
           </div>
           <div className="col-md-3  ">
               <div className="thumbnail">
                <img src="/img/suite.jpg" className=" img shadow-lg rounded " />
               </div>
               <div className="m-4 text-center">
                   <h3 className="text-free"># Suite</h3>
               </div>
           </div>
           <div className="col-md-3">
               <div className="thumbnail">
                    <img src="/img/junior-suite.jpg" className=" img shadow-lg rounded" />
               </div>
               <div className="m-4 text-center">
                   <h3 className="text-free text-orange"># Junior suite</h3>
               </div>
           </div>
           <div className="col-md-3">

               <div className="thumbnail">
                    <img src="/img/mega-suite.jpg" className=" img shadow-lg rounded" />
               </div>
               <div className="m-4 text-center">
                   <h3 className="text-free "># Mega suite</h3>
               </div>
           </div>
       </div>
    </div>
    <br/>
    <br/>
    <div className="container-fluid cuadros">
        <div className="row  h-50">
            <div className="col-md-6 p-0  shadow " id="image1">    
            
            </div>
            <div className="col-md-6 p-5 text-left">
                <div className="row justify-content-start">
                    <div className="col-md-10">
                    <a name="mas-habitaciones"></a>
                    <h3 className="text-free">
                        DELUXE KING OCEAN VIEW
                    </h3>
                    <p className="text-roboto">
                    La habitación Deluxe King Ocean View de 32 m2 dispone de un mobiliario confortable, cuentan con todo lo necesario para garantizar una experiencia única e inolvidable.
                    </p>
                    <p className="text-roboto">
                    Posee una excelente vista al mar y está decorada con un estilo moderno y atemporal. Además, contamos con habitaciones conectadas bajo petición y según disponibilidad.
                    </p>
                  
                    </div>
                </div>
                
            </div>
        </div> 
        <div className="row h-50">
        <div className="col-md-6 p-5" >
            <div className="row justify-content-end">
                <div className="col-md-10">
                <h3 className="text-free">JUNIOR SUITE</h3>
                <p className="text-roboto">
                La habitación Junior Suite con más de 60 m2 es una suite ideal para ejecutivos, cuenta con un balcón que permite contemplar la excelente vista al mar.
                </p> 
                <p className="text-roboto">
                Dispone de amplias instalaciones confortables con acabados de lujo, decorada con un estilo moderno y minimalista, cuenta con una cama king de 3 plazas (2x2 m).
                </p>
                </div>    
            </div>   
        
        </div>
        <div className="col-md-6 p-0 shadow" id="image2">  
        </div>    
        </div>
    </div>
  </div>
}
