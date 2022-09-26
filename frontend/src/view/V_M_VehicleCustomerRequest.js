import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/V_M_Navbar";
import swal from "sweetalert";

//css
import "../css/modern.css";

//jssDADSAD
import "../js/app.js";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

// Controllers
import { getAllVehicles } from "../controllers/vehicles";
import { getAllVehicleBooking } from '../controllers/vehicleBooking';

export default function V_M_VehicleAppointmentView() {

  const [vehicleBookingList, setVehicleBookingList] = useState([]);
  const [vehicleList, setVehicleSelect] = useState([]);

  useEffect(() => {
    getAllVehicleBooking().then((result) => {
        setVehicleBookingList(result);
        //initialize datatable
        $(document).ready(function () {
            $('#example').DataTable();
        });
    });
}, [])



  return (
    <div class="wrapper">
      <Navbar />
      <div class="main">
        <main class="content">
          <div class="container-fluid">
            <div class="header">
              <h1 class="header-title">Customer Vehicle Request</h1>
            </div>
            
            <div class="col-12">
              <div class="card">
              
              <Link
                to={"/vehicleDashboard/"}
                class="top-bar-link"
                >
              <button
                class="btn btn-pill btn-success btn-sm"
                style={{ marginLeft: 10, width: 60 }}
                >
                 Pending Request
                </button></Link><Link
                to={"/vehicleDashboard/"}
                class="top-bar-link"
                >
              <button
                class="btn btn-pill btn-success btn-sm"
                style={{ marginLeft: 10, width: 60 }}
                >
                 New
                </button></Link><Link
                to={"/vehicleDashboard/"}
                class="top-bar-link"
                >
              <button
                class="btn btn-pill btn-success btn-sm"
                style={{ marginLeft: 10, width: 60 }}
                >
                 New
                </button></Link>

               
                <div class="card-body">
                  <table id="example" class="table table-striped my">
                    
                    <thead>
                      <tr>
                        <th>NIC</th>
                        <th>Pick Up</th>
                        <th>Pick up Date</th>
                        <th>Pick up time</th>
                        <th>Requested Vehicle Type</th>
                        <th>Select Vehilce</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleBookingList.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{value.nic}</td>
                            <td>{value.places}</td>
                            <td>{value.date}</td>
                            <td>{value.time}</td>
                            <td>{value.type}</td>
                            <td>{value.state}</td>
                            <td class="table-action">
                              <button
                                class="btn btn-pill btn-danger btn-sm"
                                style={{ marginLeft: 45, width: 60 }}
                                // onClick={() => deleteMyVehicle(value._id)}
                              >
                                Delete
                              </button>
                              <Link
                                to={"/vehicleEdit/" + value._id}
                                class="top-bar-link"
                              >
                                <button
                                  class="btn btn-pill btn-success btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                >
                                  Edit
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}







