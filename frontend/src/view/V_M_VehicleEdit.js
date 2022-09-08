import React, { useState, useEffect } from "react";
import Navbar from "../components/V_M_Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { reactBaseURL } from "../config";
import swal from "sweetalert";

//components
import FormInput from "../components/FormInput";

//css
import "../css/modern.css";

//js
import "../js/app.js";

// Controllers
import { getSelectedVehicle, editVehicle } from "../controllers/vehicles";

export default function V_M_VehicleEdit(props) {
  const { id } = useParams();

  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    getSelectedVehicle(id).then((result) => {
      console.log(result);
      setVehicleData(result);
    });
  }, []);

  const [vehicleType, setVehicleType] = useState(vehicleData.type);
  const [vehicleIdentidication, setVehicleIdentification] = useState(
    vehicleData.identification
  );
  const [vehicleNumber, setVehicleNumber] = useState(vehicleData.vehicleNumber);
  const [vehicleDriver, setVehicleDriver] = useState(vehicleData.driver);
  const [vehicleCapacity, setVehicleCapacity] = useState(
    vehicleData.vehicleCapacity
  );
  const [vehicleState, setVehicleState] = useState(vehicleData.state);

  const typeSetHandler = (data) => {
    setVehicleType(data);
  };
  const IdentificationSetHandler = (data) => {
    setVehicleIdentification(data);
  };
  const numberSetHandler = (data) => {
    setVehicleNumber(data);
  };
  const driverSetHandler = (data) => {
    setVehicleDriver(data);
  };
  const capacitySetHandler = (data) => {
    setVehicleCapacity(data);
  };
  const stateSetHandler = (data) => {
    setVehicleState(data);
  };

  function editMyVehicle(id) {
    swal({
      title: "Are you sure?",
      text: "Do you want to change Vehicle details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        editVehicle({
          _id: id,
          type: vehicleType,
          emidentificationail: vehicleIdentidication,
          vehicleNumber: vehicleNumber,
          driver: vehicleDriver,
          vehicleCapacity: vehicleCapacity,
          state: vehicleState,
        }).then((result) => {
          if (result) {
            swal({
              title: "Success!",
              text: "Vehicle Update Successfully",
              icon: "success",
              timer: 2000,
              button: false,
            });

            setTimeout(() => {
              window.location.replace(reactBaseURL + "/customerView");
            }, 2050);
          } else {
            swal({
              title: "Error!",
              text: "Vehicle Update Unsuccessfully",
              icon: "error",
              timer: 2000,
              button: false,
            });
          }
        });

        swal({
          title: "Success!",
          text: "Vehicle Update Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });

        setTimeout(() => {
          window.location.replace(reactBaseURL + "/vihicle-list");
        }, 2050);
      }
    });
  }

  return (
    <div class="wrapper">
      <Navbar />
      <div class="main">
        <main class="content">
          <div class="container-fluid">
            <div class="header">
              <h1 class="header-title">Edit Customer</h1>
            </div>

            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputEmail4">Type</label>
                      <FormInput
                        value={vehicleData.type}
                        title="number"
                        onSave={typeSetHandler}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputPassword4">Identification</label>
                      <FormInput
                        value={vehicleData.identification}
                        title="number"
                        onSave={IdentificationSetHandler}
                      />
                    </div>
                  </div>

                  <div class="mb-3 ">
                    <label for="inputAddress">Vehicle Number</label>
                    <FormInput
                      value={vehicleData.vehicleNumber}
                      title="number"
                      onSave={numberSetHandler}
                    />
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputCity">Driver Name</label>
                      <FormInput
                        value={vehicleData.driver}
                        title="number"
                        onSave={driverSetHandler}
                      />
                    </div>

                    <div class="mb-3 col-md-6">
                      <label for="inputCity">Vehicle Capacity</label>
                      <FormInput
                        value={vehicleData.vehicleCapacity}
                        title="number"
                        onSave={capacitySetHandler}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputCity">State</label>
                      <FormInput
                        value={vehicleData.state}
                        title="number"
                        onSave={stateSetHandler}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={() => editMyVehicle(id)}
                    class="btn  btn-primary"
                    id="addCustomer"
                    style={{
                      backgroundColor: "#081E3D",
                      borderColor: "#081E3D",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
