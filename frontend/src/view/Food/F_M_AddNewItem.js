import React, { useState, useEffect } from "react";
import Navbar from "../../components/F_M_Navbar";
import "../../css/modern.css";
// import "../../js/app.js";

import Select from 'react-select';
import swal from 'sweetalert';

export default function F_M_AddNewItem() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    const [isRegular, setIsRegular] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [isFamily, setIsFamily] = useState(false);
    const [isSpecial, setIsSpecial] = useState(false);

    function addItem() {

        if (name === '' && type === '' && category === '') {
            swal("All field are empty..");
        } else if (name === '') {
            swal("Name field is empty");
        } else if (type == "") {
            swal("Type field is empty");
        } else if (category === '') {
            swal("Category field is empty"); 
        } else {
            swal({
                title: "Success!",
                text: "New Item Add Successfully",
                icon: 'success',
                timer: 6000,
                button: true,
            });
        }
    }

    return (
        <div class="wrapper">
            <Navbar />
            <div class="main">
                <main class="content">
                    <div class="container-fluid">
                        <div class="header">
                            <h1 class="header-title">Add new item</h1>
                        </div>

                        <div class="col-md-12 mb-4">
                            <div class="card">
                                <div class="card-body mt-3 mb-2" style={{ margin: "0px" }}>

                                    <div class="row mb-2 px-4">
                                        <h5 class="fw-semibold">Submit the following form to add a new item</h5>
                                    </div>
                            
                                        <div class="row px-4 mb-2">
                                            <div class="mb-3 col-md-12">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" class="form-control"name="name" required onChange={(e) => {setName(e.target.value);}}/>
                                            </div>
                                        </div>

                                        <div class="row px-4 d-flex justify-content-between mb-2">
                                            <div class="mb-3 col-md-6 mb-2 ml-2">
                                                <label for="inputAddress">Type</label>
                                                <Select options={
                                                    [
                                                        { value: 'Food', label: 'Food' },
                                                        { value: 'Beverage', label: 'Beverage' },
                                                        { value: 'Fast Food', label: 'Fast Food' },
                                                    ]
                                                }
                                                onChange={(e) => {
                                                    setType(e.value);
                                                }}
                                                />
                                            </div>
                                            <div class="mb-3 col-md-6 mb-2">
                                                <label for="inputAddress">Category</label>
                                                <Select options={
                                                    [
                                                        { value: 'Fried Rice', label: 'Fried Rice' },
                                                        { value: 'Rice & Curry', label: 'Rice & Curry' },
                                                        { value: 'Noodles', label: 'Noodles' },
                                                    ]
                                                }
                                                onChange={(e) => {
                                                    setCategory(e.value);
                                                }}
                                                />
                                            </div>
                                        </div>

                                        <div class="row px-4 mb-2">
                                            <div class="mb-3 col-md-12">
                                                <p>Available Portions</p>
                                                <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" onChange={(e) => {setIsRegular(e.target.checked);}}/>
                                                <label class="btn btn-light mx-4" for="btn-check">Regular</label>
                                                <input type="checkbox" class="btn-check" id="btn-check2" autocomplete="off" onChange={(e) => {setIsLarge(e.target.checked);}} />
                                                <label class="btn btn-light mx-4" for="btn-check2">Large</label>
                                                <input type="checkbox" class="btn-check" id="btn-check3" autocomplete="off" onChange={(e) => {setIsFamily(e.target.checked);}} />
                                                <label class="btn btn-light mx-4" for="btn-check3">Family</label>
                                                <input type="checkbox" class="btn-check" id="btn-check4" autocomplete="off" onChange={(e) => {setIsSpecial(e.target.checked);}}/>
                                                <label class="btn btn-light mx-4" for="btn-check4">Special</label>
                                            </div>
                                        </div>

                                        <div class="row px-4 mb-2">
                                            <div class="mb-3 col-md-12">
                                                <p>Prices</p>
                                                <div class="row">
                                                    <label for="inputPassword" class="col-sm-1 col-form-label">Regular</label>
                                                    <div class="col-sm-2">
                                                    <input type="text" class="form-control" id="inputPassword" style={{marginRight:"100px"}} disabled={!isRegular}/>
                                                    </div>
                                                    <label for="inputPassword" class="col-sm-1 col-form-label" style={{marginLeft:"100px"}}>Large</label>
                                                    <div class="col-sm-2">
                                                    <input type="text" class="form-control" id="inputPassword" disabled={!isLarge}/>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <label for="inputPassword" class="col-sm-1 col-form-label">Family</label>
                                                    <div class="col-sm-2">
                                                    <input type="text" class="form-control" id="inputPassword" style={{marginRight:"100px"}} disabled={!isFamily}/>
                                                    </div>
                                                    <label for="inputPassword" class="col-sm-1 col-form-label" style={{marginLeft:"100px"}}>Special</label>
                                                    <div class="col-sm-2">
                                                    <input type="text" class="form-control" id="inputPassword" disabled={!isSpecial}/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="row px-4 d-flex justify-content-between mb-2">
                                            <div class="mb-3 col-md-12 mb-2 ml-2">
                                                <label for="formFile" class="form-label">Image</label>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>                                            
                                        </div>   
                                                                                          
                                    <div class="row d-flex justify-content-center mb-2 mt-5">
                                        <div class="col-5 d-flex justify-content-center">
                                            <button class="btn btn-primary w-75 mx-5 py-2 fw-semibold"onClick={() => addItem()}>Add</button>
                                            <button class="btn btn-primary w-75 mx-3 py-2 fw-semibold"
                                                style={{ backgroundColor: '#ffffff', borderColor: '#081E3D', color: '#081E3D', marginLeft: 10, width:75 }} 
                                                >Reset</button>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
}
