import React from 'react';
import { Link } from 'react-router-dom';
// import  '../App.css';

// import {BiHomeAlt,BiClipboard,BiCar,BiCart,BiMessageSquareAdd} from 'react-icons/bi';

export default function E_M_Navbar() {
    return (
        <nav id="sidebar" class="sidebar">

            <Link to='/' class="sidebar-brand" > <img style={{ maxWidth: 50 }} src={require('../img/logo/logo.png')} /> DELICACY INN </Link>

            <div class="sidebar-content">
                <div class="sidebar-user">
                    <div> <Link to='/'> <img src={require('../img/avatars/avatar.jpg')} class="img-fluid rounded-circle mb-2" /></Link></div>
                    <div class="fw-bold">Thanushi Perera</div>
                    <small>Human Resource Manager</small>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>





                <ul class="sidebar-nav">
                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/employeeDashboard'>
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Dashboard</span>
                        </Link>

                    </li>

                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/registration'>
                            <i class="align-middle me-2 fas fa-fw fa-user-plus"></i> <span class="align-middle">Registration</span>
                        </Link>

                    </li>

                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/manageEmployee'>
                            <i class="align-middle me-2 fas fa-fw fa-users"></i> <span class="align-middle">Manage Employee</span>
                        </Link>

                    </li>

                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/manageLeaves'>
                            <i class="align-middle me-2 fas fa fa-plane"></i> <span class="align-middle">Manage Leaves</span>
                        </Link>

                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#profile" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-user"></i> <span class="align-middle">My Profile</span>
                        </a>
                        <ul id="profile" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item"><a class="sidebar-link" href="packagePage">Profile Settings</a></li>
                            <li class="sidebar-item"><a class="sidebar-link" href="packageTypePage">Sign Out</a></li>
                        </ul>
                    </li>




            



                </ul>
            </div>
        </nav>
    )
}




