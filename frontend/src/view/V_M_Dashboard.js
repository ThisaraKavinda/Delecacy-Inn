import React, { useState, useEffect } from 'react';
import Navbar from '../components/V_M_Navbar';
import '../css/modern.css';
import '../js/app.js';


export default function V_M_Dashboard() {


    return (

        <div class="wrapper">

<Navbar/>

            <div class="main">

{/* top nav */}

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                                Analytics Overview
                            </h1>

                        </div>

                        <div class="row">
						<div class="col-md-6 col-lg-3 col-xl">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h5 class="card-title">Income</h5>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-dark">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3">$25.300</h1>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-3 col-xl">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h5 class="card-title">Orders</h5>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-dark">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3">12.514</h1>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-3 col-xl">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h5 class="card-title">Activity</h5>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-dark">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity align-middle"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3">29.232</h1>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-3 col-xl">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h5 class="card-title">Revenue</h5>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-dark">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3">$83.300</h1>
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

