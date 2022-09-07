import React, { useState, useEffect } from 'react';
import Navbar from '../components/V_M_Navbar';
import '../css/modern.css';
// import '../css/my.css';
import '../js/app.js';


export default function V_M_VehicleAdd() {


    return (

        <div class="wrapper">
<Navbar/>
            <div class="main">

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                               Add Vehicle
                            </h1>

                        </div>

                       
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body" >
                                
                                            <div class="row">
                                                <div class="mb-3 col-md-6">
                                                    <label for="inputEmail4">Vihicle Type</label>
                                                    <input type="text" class="form-control"    name="name" required />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="inputPassword4">Identification</label>
                                                    <input type="email" class="form-control" id="inputPassword4"    name="email" required/>
                                                </div>
                                            </div>

                                        
                                            <div class="mb-3 ">
                                                <label for="inputAddress">Vehicle Number</label>
                                                <input type="text" class="form-control" id="inputAddress"   name="address" required />

                                            </div>

                                            <div class="row">
                                                <div class="mb-3 col-md-6">
                                                    <label for="inputCity">Driver</label>
                                                    <input type="text" class="form-control"   name="nic" required />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="inputCity">Vehicle Capacity</label>
                                                    <input type="text" class="form-control"   name="contactNo" required />
                                                </div>                                       

                                            </div>

                                            <button type="submit" class="btn my-btn">Submit</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </main>



            </div>

        </div>


    )

}

