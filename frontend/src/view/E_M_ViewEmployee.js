import React, { useState, useEffect } from 'react';
import Navbar from '../components/E_M_Navbar';
import '../css/modern.css';
import '../js/app.js';


export default function test() {


    return (

        <div class="wrapper">
<Navbar/>
            <div class="main">

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                               View Employee
                            </h1>

                        </div>

                       
                        <div class="col-md-12">
                        <div class="card">
								<div class="card-body">
                                    
									<div class="column" >
                                        
										<div class="col-sm-3 col-xl-12 col-xxl-12 text-center">
											<img src={require('../img/avatars/avatar.jpg')} class="rounded-circle mt-2" alt="Angelica Ramos" width="120" height="120"/>
										</div>
										<br></br>
                                        <br></br>
									</div>

                                    <div class="row">
                                                <div class="col-md-2"></div>
                                                <div class="col-md-8"><table class="table table-sm my-2 " >
										<tbody>
											<tr>
												<th>Name</th>
												<td>Charissa Hilt</td>
											</tr>
											<tr>
												<th>Company</th>
												<td>Matrix Interior Design</td>
											</tr>
											<tr>
												<th>Occupation</th>
												<td>Desktop publisher</td>
											</tr>
											<tr>
												<th>Email</th>
												<td>charissahilt@rhyta.com</td>
											</tr>
											<tr>
												<th>Phone</th>
												<td>+1234123123123</td>
											</tr>
											<tr>
												<th>Website</th>
												<td>hispanomarketer.com</td>
											</tr>
											<tr>
												<th>Status</th>
												<td><span class="badge bg-success">Active</span></td>
											</tr>
										</tbody>
									</table></div>
                                                <div class="col-md-2"></div>
                                            </div>


                                            <hr></hr>
                                            <div class="text-center">
                                            <div class="row">
                                                <div class="col-md-2"></div>
                                                <div class="col-md-8"><strong>About me</strong>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
												sociis
												natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div>
                                                <div class="col-md-2"></div>
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

