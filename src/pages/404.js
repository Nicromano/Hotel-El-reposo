import React from "react"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function P404() {
    return <div className="h-100">
    <Header />
    <div className="container h-100">
        <div className="row justify-content-center h-100">
            <div className="col-sm-8 align-self-center text-center p-5 m-5">
                <img src="/img/404.svg" width="300"/>
                <div className="text-center">
                    <p><h1 className="primary ">Página no encontrada</h1></p>
                    <a href="/Hotel-El-reposo" role="button" className="btn btn-outline-warning">Regresar</a>
                </div>
            </div>
        </div>
    </div>  
    </div>
} 