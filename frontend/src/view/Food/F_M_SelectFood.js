import React, { useState, useEffect } from "react";
import Navbar from "../../components/F_M_Navbar";
import "../../css/modern.css";
// import "../../js/app.js";
import "./F_M_SelectFood.css";

import Popup from 'reactjs-popup';

import food1 from '../../img/photos/food-1.jpg';
import food2 from '../../img/photos/food-2.jpg';
import food3 from '../../img/photos/food-3.jpg';
import bin from '../../img/icons/trash.png';


export default function F_M_SelectFood() {

    return (
        <div class="wrapper">
        <Navbar />
        <div class="main">
            <main class="content">
            <div class="container-fluid">
                <div class="header">
                <h1 class="header-title">Dashboard</h1>
                </div>

                <div class="col-md-12 mb-4">
                    <div class="card">
                        <div class="card-body mt-3 mb-2" style={{ margin: "0px" }}>

                            <div class="row d-flex justify-content-between mb-4">

                                <div class="col-6">
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search by Name, Category" aria-label="Search" />
                                        <button type="button" class="btn btn-primary">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <div class="col-2 mx-4 px-3">

                                    <Popup trigger={
                                        <button type="button" class="btn btn-primary w-100 ">
                                            <div class="row">
                                                <div class="col-7 px-3 d-flex justify-content-end">
                                                    <p class="text-light mb-0 fw-bold">3 items</p>
                                                </div>
                                                <div class="col-4 px-3">
                                                    <i class="fas fa-shopping-cart"></i>
                                                </div>
                                            </div>
                                        </button> }>
                                        <div class="container border shadow px-4 py-3 bg-light" style={{width: "350px", position: "absolute", right: "1px", zIndex:1}}>
                                            <div class="row d-flex justify-content-between align-items-center mb-2">
                                                <div class="col-8">
                                                    <h5 class="fw-semibold monospace">Cart</h5>
                                                </div>
                                                <div class="col-auto">
                                                    <h5 class="fw-semibold monospace fs-6">3 items</h5>
                                                </div>
                                            </div>

                                            <div class="row d-flex justify-content-between align-items-center mb-2">
                                                <div class="col-4">
                                                    <img src={food1} class="img-fluid img-thumbnail"></img>
                                                </div>
                                                <div class="col-6  align-items-center">
                                                    <div class="row">
                                                        <h5 class="fw-semibold monospace fs-6 mb-0">Mixed fried rice</h5>
                                                    </div>
                                                    <div class="row">
                                                        <p class=" monospace mb-0" style={{fontSize: "13px"}}>Rs. 1280.00</p>
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <img src={bin} class="img-fluid mb-1 p-1"></img>
                                                </div>
                                            </div>
                                            <div class="row d-flex justify-content-between align-items-center mb-2">
                                                <div class="col-4">
                                                    <img src={food1} class="img-fluid img-thumbnail"></img>
                                                </div>
                                                <div class="col-6  align-items-center">
                                                    <div class="row">
                                                        <h5 class="fw-semibold monospace fs-6 mb-0">Mixed fried rice</h5>
                                                    </div>
                                                    <div class="row">
                                                        <p class=" monospace mb-0" style={{fontSize: "13px"}}>Rs. 1280.00</p>
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <img src={bin} class="img-fluid mb-1 p-1"></img>
                                                </div>
                                            </div>
                                            <div class="row d-flex justify-content-between align-items-center mb-2">
                                                <div class="col-4">
                                                    <img src={food1} class="img-fluid img-thumbnail"></img>
                                                </div>
                                                <div class="col-6  align-items-center">
                                                    <div class="row">
                                                        <h5 class="fw-semibold monospace fs-6 mb-0">Mixed fried rice</h5>
                                                    </div>
                                                    <div class="row">
                                                        <p class=" monospace mb-0" style={{fontSize: "13px"}}>Rs. 1280.00</p>
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <img src={bin} class="img-fluid mb-1 p-1"></img>
                                                </div>
                                            </div>

                                            <div class="row d-flex justify-content-between align-items-center mt-4">
                                                <div class="col-5">
                                                    <h5 class="fw-semibold monospace fs-6">Total</h5>
                                                </div>
                                                <div class="col-auto">
                                                    <h5 class="fw-semibold monospace fs-6">Rs. 6595.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-between">
                                <div class="col-5">

                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary px-4" for="btnradio1">Food</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                        <label class="btn btn-outline-primary px-4" for="btnradio2">Beverages</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                        <label class="btn btn-outline-primary px-4" for="btnradio3">Fast Foods</label>
                                    </div>


                                    {/* <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-secondary active">
                                            <input type="radio" name="options" id="option1" autocomplete="off" /> Active 
                                        </label>
                                        <label class="btn btn-secondary">
                                            <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
                                        </label>
                                        <label class="btn btn-secondary">
                                            <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="card-title my-2 d-flex justify-content-between mb-0">
                                <h5 class="fs-bold mb-0">
                                    Rice & Curry
                                </h5>
                                <h5 class="" style={{textAlign:'end'}}>
                                        <i class="align-middle fas fa-fw fa-angle-down" ></i>
                                </h5>
                            </div>       
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div class="card-body mb-0">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card" id="foodItem">
                                            <button type="button" class="btn btn-primary" style={{position:'absolute', top:'40%', right:'40%'}}>Add</button>
                                            <img class="card-img-top overlay" src={food1} alt="Unsplash" id="foodItemImage" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food3} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Regular - Rs. 1200.00</li>
                                                <li class="list-group-item">Full - Rs. 1200.00</li>
                                                <li class="list-group-item">Family - Rs. 1200.00</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food2} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>     
                </div>




                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                            <div class="card-title my-2 d-flex justify-content-between mb-0">
                                <h5 class="fs-bold mb-0">
                                    Rice & Curry
                                </h5>
                                <h5 class="" style={{textAlign:'end'}}>
                                        <i class="align-middle fas fa-fw fa-angle-down" ></i>
                                </h5>
                            </div>       
                        </div>
                        <div id="collapseOne2" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div class="card-body mb-0">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food3} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    {/* <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Regular - Rs. 1200.00</li>
                                                <li class="list-group-item">Full - Rs. 1200.00</li>
                                                <li class="list-group-item">Family - Rs. 1200.00</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food2} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>     
                </div>




                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                            <div class="card-title my-2 d-flex justify-content-between mb-0">
                                <h5 class="fs-bold mb-0">
                                    Rice & Curry
                                </h5>
                                <h5 class="" style={{textAlign:'end'}}>
                                        <i class="align-middle fas fa-fw fa-angle-down" ></i>
                                </h5>
                            </div>       
                        </div>
                        <div id="collapseOne3" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div class="card-body mb-0">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food3} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    {/* <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Regular - Rs. 1200.00</li>
                                                <li class="list-group-item">Full - Rs. 1200.00</li>
                                                <li class="list-group-item">Family - Rs. 1200.00</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food2} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>     
                </div>





                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                            <div class="card-title my-2 d-flex justify-content-between mb-0">
                                <h5 class="fs-bold mb-0">
                                    Rice & Curry
                                </h5>
                                <h5 class="" style={{textAlign:'end'}}>
                                        <i class="align-middle fas fa-fw fa-angle-down" ></i>
                                </h5>
                            </div>       
                        </div>
                        <div id="collapseOne4" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div class="card-body mb-0">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food3} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    {/* <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Regular - Rs. 1200.00</li>
                                                <li class="list-group-item">Full - Rs. 1200.00</li>
                                                <li class="list-group-item">Family - Rs. 1200.00</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food2} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 px-3">
                                        <div class="card">
                                            <img class="card-img-top" src={food1} alt="Unsplash" />
                                            <div class="card-header text-center justify-content-center">
                                                <h5 class="card-title mb-0 fs-5 fw-semibold">Mixed Fried Rice</h5>
                                                <p class="card-title mb-0 font-monospace">Rs. 2390.00</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
                
            </div>

            <button class="btn btn-primary py-2 px-4 fw-bold fs-6" style={{position:'fixed', bottom:'5%', right:'5%'}}>Proceed</button>

            </main>
        </div>
        </div>
    );
}
