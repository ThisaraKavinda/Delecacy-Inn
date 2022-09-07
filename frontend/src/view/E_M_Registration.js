import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Navbar from '../components/E_M_Navbar';
import swal from 'sweetalert';

//css
import '../css/modern.css';

//js
import '../js/app.js';

// Controllers
import { addEmployee } from '../controllers/employee';

export default function E_M_Registration() {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeGender, setEmployeeGender] = useState('');
    const [employeeDob, setEmployeeDob] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [employeeNIC, setEmployeeNIC] = useState('');
    const [employeePhone, setEmployeePhone] = useState('');

    function insertEmployee() {

        if (employeeName === '' && employeeEmail === '' && employeeGender === '' && employeeDob === '' && employeeAddress === '' && employeeNIC === '' && employeePhone === '') {
            swal("All field are empty..");
        } else if (employeeName === '') {
            swal("Name field is empty");
        } else if (employeeEmail === '') {
            swal("Email field is empty");
        } else if (employeeGender === '') {
            swal("Gender field is empty"); 
        } else if (employeeDob === '') {
            swal("Date of Birth field is empty");              
        } else if (employeeAddress === '') {
            swal("Address field is empty");
        } else if (employeeNIC === '') {
            swal("NIC field is empty");
        } else if (employeePhone === '') {
            swal("Contact No field is empty");
        } else if (employeeName === '' || employeeEmail === '' || employeeGender === '' || employeeDob === '' || employeeAddress === '' || employeeNIC === '' || employeePhone === '') {
            swal("fields are empty");
        } else {
            addEmployee({ name: employeeName, email: employeeEmail,  gender: employeeGender, dob: employeeDob, address: employeeAddress, nic: employeeNIC, contactNo: employeePhone, state: 'Active' }).then((result) => {
                if (result.status) {

                    swal({
                        title: "Success!",
                        text: "New Employee Add Successfully",
                        icon: 'success',
                        timer: 2000,
                        button: false,
                    });

                    setEmployeeName('');
                    setEmployeeEmail('');
                    setEmployeeGender('');
                    setEmployeeDob('');
                    setEmployeeAddress('');
                    setEmployeeNIC('');
                    setEmployeePhone('');

                    // setTimeout(() => {
                    //     window.location.reload(true);
                    // }, 2050)

                } else {
                    swal({
                        title: "Error!",
                        text: "New Employee Add Unsuccessfully",
                        icon: 'error',
                        timer: 2000,
                        button: false
                    });
                }
            });
        }




    }
    
    function resetForm(){

        if (employeeName === '' && employeeEmail === '' && employeeGender === '' && employeeDob === '' && employeeAddress === '' && employeeNIC === '' && employeePhone === '') {
            swal("fields are already empty");
        }
                    setEmployeeName('');
                    setEmployeeEmail('');
                    setEmployeeGender('');
                    setEmployeeDob('');
                    setEmployeeAddress('');
                    setEmployeeNIC('');
                    setEmployeePhone('');
    }


    return (

        <div class="wrapper">
            <Navbar />
            <div class="main">

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                                Registration
                            </h1>

                        </div>


                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body" >

                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label for="inputEmail4">Name</label>
                                            <input type="text" class="form-control" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} name="name" required />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="inputPassword4">Email</label>
                                            <input type="email" class="form-control" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} name="email" required />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="mb-3 col-md-6">
                                        <label for="inputAddress">Gender</label>
                                        <Select options={
                                            [
                                                { value: 'Male', label: 'Male' },
                                                { value: 'Female', label: 'Female' },
                                            ]
                                        }
                                        onChange={(e) => {
                                            setEmployeeGender(e.value);
                                        }} />


                                    </div>

                                    <br></br>

                                    {/* <div class="mb-3">
                                        <label class="form-label">Date of Birth</label>
                                        <div class="input-group date" id="datetimepicker-date" data-target-input="nearest">
                                            <input type="date" class="form-control datetimepicker-input" data-target="#datetimepicker-date" />
                                            <div class="input-group-text" data-target="#datetimepicker-date" data-toggle="datetimepicker"><i class="fa fa-calendar"></i></div>
                                        </div>
                                    </div> */}


                                    <div class="mb-3 ">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control"  value={employeeAddress} onChange={(e) => setEmployeeAddress(e.target.value)} name="address" required />

                                    </div>

                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label for="inputCity">NIC</label>
                                            <input type="text" class="form-control"  value={employeeNIC} onChange={(e) => setEmployeeNIC(e.target.value)}name="nic" required />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="inputCity">Contact No</label>
                                            <input type="text" class="form-control"  value={employeePhone} onChange={(e) => setEmployeePhone(e.target.value)} name="contactNo" required />
                                        </div>

                                    </div>

                                    <button type="submit" class="btn  btn-primary" id="addEmployee" style={{ backgroundColor: '#081E3D', borderColor: '#081E3D', color: '#fff' }} onClick={() => insertEmployee()}>Submit</button>
                                    <button type="submit" class="btn  btn-primary" id="addEmployee" style={{ backgroundColor: '#ffffff', borderColor: '#081E3D', color: '#081E3D', marginLeft: 10, width:75 }} onClick={() => resetForm()}>Reset</button>

                                </div>
                            </div>
                        </div>












                    </div>
                </main>



            </div>

        </div>


    )

}

