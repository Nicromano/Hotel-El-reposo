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
                    <a href="/" role="button" className="btn btn-outline-warning">Regresar</a>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"/>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"/>
    </div>
} 