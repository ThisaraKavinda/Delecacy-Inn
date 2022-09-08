import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/C_M_Navbar';
import swal from 'sweetalert';

//css
import '../css/modern.css';

//js
import '../js/app.js';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


// Controllers
import { getAllAppointments, deleteAppointment } from '../controllers/appointment';


export default function C_M_AppointmentView() {

    const [appointmentList, setAppointmentList] = useState([]);

    useEffect(() => {
        getAllAppointments().then((result) => {
            setAppointmentList(result);
            //initialize datatable
            $(document).ready(function () {
                $('#example').DataTable();
            });
        });
    }, [])


    function deleteMyAppointment(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    deleteAppointment(id).then((result) => {
                        var appointment = appointmentList.filter((e) => e._id !== result._id);
                        setAppointmentList(appointment);
                    });

                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                        title: "Delete Successfully!",
                        buttons: false,
                        timer: 2000,
                    });
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
                            <h1 class="header-title">
                                View Customers
                            </h1>

                        </div>


                        <div class="col-12">
                            <div class="card">

                                <div class="card-body">

                                    <table id="example" class="table table-striped my">
                                        <thead>
                                            <tr>
                                                <th>NIC</th>
                                                <th>Guest</th>
                                                <th>Night</th>
                                                <th>Room</th>
                                                <th>Date</th>
                                                <th>Appointment Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {appointmentList.map((value, index) => {
                                                return <tr key={index}>
                                                    <td>{value.nic}</td>
                                                    <td>{value.guest}</td>
                                                    <td>{value.nigth}</td>
                                                    <td>{value.room}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.appointmentDate}</td>
                                                    {value.state === "Active" ? (
                                                <td><div class="small"><span class="fas fa-circle chat-online" style={{marginRight: 5}}></span> Active</div></td>
                                                ) : (
                                                <td><div class="small"><span class="fas fa-circle chat-offline" style={{marginRight: 5}}></span> Deactive</div></td>
                                                )}
                                                    <td class="table-action">
                                                    <button class="btn btn-pill btn-primary btn-sm" style={{ marginLeft: 10, width: 75 }} onClick={() => deleteMyAppointment(value._id)}>Deactive</button>
                                                        <button class="btn btn-pill btn-danger btn-sm" style={{ marginLeft: 10, width: 60 }} onClick={() => deleteMyAppointment(value._id)}>Delete</button>
                                                        <Link to={"/customerEdit/" + value._id} class="top-bar-link"><button class="btn btn-pill btn-success btn-sm" style={{ marginLeft: 10, width: 60 }}>Edit</button></Link>
                                                
                                                    </td>
                                                </tr>
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




    )

}







