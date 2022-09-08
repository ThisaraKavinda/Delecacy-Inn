import React, { useState, useEffect } from "react";
import Navbar from "../../components/F_M_Navbar";
import "../../css/modern.css";
// import "../../js/app.js";


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

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body mt-3" style={{ margin: "0px" }}>

                            <div class="row d-flex justify-content-between">

                                <div class="col-6">
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search by Name, Category" aria-label="Search" />
                                        <button type="button" class="btn btn-primary">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <div class="col-2 mx-4 px-3">
                                    <button type="button" class="btn btn-primary w-100 ">
                                        <div class="row">
                                            <div class="col-7 px-3 d-flex justify-content-end">
                                                <p class="text-light mb-0 fw-bold">3 items</p>
                                            </div>
                                            <div class="col-4 px-3">
                                                <i class="fas fa-shopping-cart"></i>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-between">

                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
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
