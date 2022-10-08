import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//css
import '../css/modern.css';

//js
import '../js/app.js';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';




export default function CustomerBill() {

    const location = useLocation();

    return (
        // <div><h1>Bill id : {location.state.id}</h1></div>

        <div class="wrapper">
            <div class="main">
                <main class="content">
                    <div class="container-fluid d-flex justify-content-center">
                        <div class="col-8 ">
                        <div class="card ">
								<div class="card-body m-sm-3 m-md-5">
									<table class="table table-sm">
										<thead>
											<tr>
												<th>Description</th>
												<th>Date</th>
												<th class="text-end">Amount</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Spark Theme Customization</td>
												<td>2</td>
												<td class="text-end">$150.00</td>
											</tr>
											<tr>
												<td>Monthly Subscription </td>
												<td>3</td>
												<td class="text-end">$25.00</td>
											</tr>
											<tr>
												<td>Additional Service</td>
												<td>1</td>
												<td class="text-end">$100.00</td>
											</tr>

											<tr>
                                            <th>Total </th>
												<th>&nbsp;</th>
												<th class="text-end">$268.85</th>
											</tr>
										</tbody>
									</table>

									{/* <div class="text-center">
										<a href="#" class="btn btn-primary">
											Print this receipt
										</a>
									</div> */}
								</div>
							</div>
                        </div>


                    </div>
                </main>
            </div>
        </div>


    )
}

