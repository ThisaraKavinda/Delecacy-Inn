import React, { useState, useEffect } from 'react';
import Navbar from '../components/C_M_Navbar';
import swal from 'sweetalert';

//css
import '../css/modern.css';

//js
import '../js/app.js';




export default function test() {


    return (

        <div class="wrapper">
            <Navbar />
            <div class="main">

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                                Add Customer
                            </h1>

                        </div>

                        <div class="col-md-12">
                           

                                    <div class="card">
                                        <div class="card-header" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 class="card-title my-2" style={{textAlign:'end'}}>
                                               
                                                    <i class="align-middle fas fa-fw fa-angle-down" ></i>
                                           
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 col-md-6 col-lg-4">
                                                        <div class="card">
                                                            <img class="card-img-top" src={require('../img/logo/logo.png')} alt="Unsplash" />
                                                            <div class="card-header">
                                                                <h5 class="card-title mb-0">Card with image and links</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <a href="#" class="card-link">Card link</a>
                                                                <a href="#" class="card-link">Another link</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6 col-lg-4">
                                                        <div class="card">
                                                            <img class="card-img-top" src={require('../img/logo/logo.png')} alt="Unsplash" />
                                                            <div class="card-header">
                                                                <h5 class="card-title mb-0">Card with image and button</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6 col-lg-4">
                                                        <div class="card">
                                                            <img class="card-img-top" src={require('../img/logo/logo.png')} alt="Unsplash" />
                                                            <div class="card-header">
                                                                <h5 class="card-title mb-0">Card with image and list</h5>
                                                            </div>
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item">Cras justo odio</li>
                                                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                                                <li class="list-group-item">Vestibulum at eros</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            
                        </div>
                    </div>
                </main>
            </div>
        </div>


    )

}

