import React, { useState, useEffect } from "react";
import Navbar from "../../components/F_M_Navbar";
import "../../css/modern.css";
// import "../../js/app.js";
// import "./F_M_SelectRoom.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import food1 from '../../img/photos/food-1.jpg';
import food2 from '../../img/photos/food-2.jpg';
import food3 from '../../img/photos/food-3.jpg';
import bin from '../../img/icons/trash.png';
import close from '../../img/icons/fmClose.png';


export default function F_M_SelectRoom() {

    return (
        <div class="wrapper">
            <Navbar />
            <div class="main">
                <main class="content">
                    <div class="container-fluid">
                        <div class="header">
                            <h1 class="header-title">Make an Order</h1>
                        </div>

                        <div class="col-md-12 mb-4">
                            <div class="card">
                                <div class="card-body mt-3 mb-2" style={{ margin: "0px" }}>

                                    <div class="row mb-2 px-4">
                                        <h5 class="fw-semibold">Select the room</h5>
                                    </div>
                                    
                                    <div class="container d-flex flex-wrap justify-content-start">
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room A01</h5>
                                            </button>
                                        </div>
                                        
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room A02</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room A03</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room A04</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B01</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B02</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B03</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B04</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B05</h5>
                                            </button>
                                        </div>
                                        <div class="col mx-3 mt-1 mb-4" style={{ maxWidth: "250px", minWidth: "250px"}}>
                                            <button class="btn btn-light w-100 my-2 px-4 py-5 rounded border">
                                                <h5 class="fw-semibold fs-2">Room B06</h5>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="row d-flex justify-content-center mb-3">
                                        <div class="col-3 d-flex justify-content-center">
                                            <button class="btn btn-primary w-75 mx-3 py-2 fw-semibold">Proceed</button>
                                        </div>
                                        

                                    </div>

                                </div>
                                
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
}
