import React, { useState, useEffect } from 'react';
import Navbar from '../components/V_M_Navbar';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../css/modern.css";
import "../js/app.js";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import { getAllVehicles } from "../controllers/vehicles";
import { deleteVehicle } from "../controllers/vehicles";

export default function V_M_VehicleView() {
  //initialize datatable
  $(document).ready(function () {
    $("#example").DataTable();
  });

  const [Vehicles, viewevehicle] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  useEffect(() => {
    function viewVehicle() {
      getAllVehicles()
        .then((result) => {
          console.log(result);
          viewevehicle(result);
          setSelectedVehicles(result);
        })
        .catch((err) => {
          alert(err.messsage);
        });
    }
    viewVehicle();
  }, []);

  const onDelete = (id) => {
    deleteVehicle({ id }).then((res) => {});
    console.log(id);
    viewevehicle((prevVehicles) =>
      prevVehicles.filter((Vehicles) => Vehicles.id !== id)
    );

    swal({
      title: "Success!",
      text: "Employee Deleted Successfully",
      icon: "success",
      timer: 2000,
      button: false,
    });
  };

  const navigate = useNavigate();

  const routeChange = (id) => {
    // let path = "..//V_M_Dashboard/" + id;
    navigate("..//vihicleDashboard");
  };

  return (
    <div class="wrapper">
      <Navbar />
      <div class="main">
        <main class="content">
          <div class="container-fluid">
            <div class="header">
              <h1 class="header-title">View Vehicles</h1>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <table id="example" class="table table-striped my">
                    <thead>
                      <tr>
                        <th>Vehicle Number</th>
                        <th>Vehicle Type</th>
                        <th>Driver</th>
                        <th>Vehicle Capacity</th>
                        <th>Identification</th>
                        <th>State</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedVehicles.map((Vehicle) => {
                        return (
                          <tr>
                            <td>{Vehicle.type}</td>
                            <td>{Vehicle.identification}</td>
                            <td>{Vehicle.vehicleNumber}</td>
                            <td>{Vehicle.driver}</td>
                            <td>{Vehicle.vehicleCapacity}</td>
                            <td>{Vehicle.state}</td>

                            <div class="mb-3 col-md-6">
                              <td className="action-buttons">
                                <button
                                  type="button"
                                  onClick={routeChange.bind(this, Vehicle._id)}
                                  class=""
                                >
                                  Update
                                </button>

                                <button
                                  type="button"
                                  a
                                  href=""
                                  onClick={() => {
                                    onDelete(Vehicle._id);
                                    setTimeout(() => {
                                      //   window.location.reload(true);
                                    }, 2050);
                                  }}
                                  class=""
                                >
                                  Delete
                                </button>
                              </td>
                            </div>
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







