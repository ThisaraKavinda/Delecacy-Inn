import React, { useState, useEffect } from "react";
import Navbar from "../components/E_M_Navbar";
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
import { getSelectedEmployee, editEmployee } from "../controllers/employee";

export default function E_M_EmployeeEdit(props) {
  const { id } = useParams();

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    getSelectedEmployee(id).then((result) => {
      console.log(result);
      setEmployeeData(result);
    });
  }, []);

  const [employeeName, setEmployeeName] = useState(employeeData.name);
  const [employeeAddress, setEmployeeAddress] = useState(employeeData.address);
  const [employeeDob, setEmployeeDob] = useState(employeeData.dob);
  const [employeGender, setEmployeGender] = useState(employeeData.gender);
  const [employeeEmail, setEmployeeEmail] = useState(employeeData.email);
  const [employeeNic, setEmployeeNic] = useState(employeeData.nic);
  const [employeeContact, setEmployeecontact] = useState(employeeData.contact);

  const nameSetHandler = (data) => {setEmployeeName(data);};
  const addressSetHandler = (data) => {setEmployeeAddress(data);};
  const dobSetHandler = (data) => {setEmployeeDob(data);};
  const genderSetHandler = (data) => {setEmployeGender(data); };
  const emailSetHandler = (data) => {setEmployeeEmail(data);};
  const nicSetHandler = (data) => {setEmployeeNic(data);};
  const contactSetHandler = (data) => {setEmployeecontact(data);};

  function editMyEmployee(id) {
    swal({
      title: "Are you sure?",
      text: "Do you want to change Employee details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        editEmployee({
          _id: id,
          name: employeeName,
          address: employeeAddress,
          dob: employeeDob,
          gender: employeGender,
          email: employeeEmail,
          nic: employeeNic,
          contact: employeeContact,
        }).then((result) => {
          if (result) {
            swal({
              title: "Success!",
              text: "Employee Update Successfully",
              icon: "success",
              timer: 2000,
              button: false,
            });

            setTimeout(() => {
              window.location.replace(reactBaseURL + "/manageEmployee");
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
          window.location.replace(reactBaseURL + "/manageEmployee");
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
              <h1 class="header-title">Edit Employee</h1>
            </div>

            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputEmail4">Name</label>
                      <FormInput
                        value={employeeData.name}
                        title="number"
                        onSave={nameSetHandler}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputPassword4">Address</label>
                      <FormInput
                        value={employeeData.address}
                        title="number"
                        onSave={addressSetHandler}
                      />
                    </div>
                  </div>

                  <div class="mb-3 ">
                    <label for="inputAddress">DOB</label>
                    <FormInput
                      value={employeeData.dob}
                      title="number"
                      onSave={dobSetHandler}
                    />
                  </div>

                  <div class="row">
                   

                    <div class="mb-3 col-md-6">
                      <label for="inputCity">Email</label>
                      <FormInput
                        value={employeeData.email}
                        title="number"
                        onSave={emailSetHandler}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputCity">NIC</label>
                      <FormInput
                        value={employeeData.nic}
                        title="number"
                        onSave={nicSetHandler}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputCity">Contact</label>
                      <FormInput
                        value={employeeData.contact}
                        title="number"
                        onSave={contactSetHandler}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={() => editMyEmployee(id)}
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
