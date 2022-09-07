import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';




//Hiru
import C_M_Dashboard from './view/C_M_Dashboard';
import C_M_CustomerAdd from './view/C_M_CustomerAdd';
import C_M_CustomerView from './view/C_M_CustomerView';
import Test from './view/test';

//Thanu
import E_M_Dashboard from './view/E_M_Dashboard';
import E_M_Registration from './view/E_M_Registration';
import E_M_ManageEmployee from './view/E_M_ManageEmployee';
import E_M_UpdateEmployee from './view/E_M_UpdateEmployee';
import E_M_ViewEmployee from './view/E_M_ViewEmployee';

//Sheha
// import E_M_Dashboard from './view/E_M_Dashboard';
import V_M_VehicleAdd from './view/V_M_VehicleAdd';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      {/*Hiru*/}
      <Route exact path='/' element={<C_M_Dashboard/>}/>
      <Route exact path='/customerAdd' element={<C_M_CustomerAdd/>}/>
      <Route exact path='/customerView' element={<C_M_CustomerView/>}/>
      <Route exact path='/test' element={<Test/>}/>
      {/* <Route exact path="/vehicle-add" component={Vehicle}/>
      <Route exact path="/vehicle-list" component={VehicleList}/>
      <Route exact path="/vehicle-edit/:id" component={VehicleEdit}/>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/report" component={Report}/> */}

      {/*Thanu*/}
      <Route exact path='/employeeDashboard' element={<E_M_Dashboard/>}/>
      <Route exact path='/registration' element={<E_M_Registration/>}/>
      <Route exact path='/manageEmployee' element={<E_M_ManageEmployee/>}/>
      <Route exact path='/updateEmployee' element={<E_M_UpdateEmployee/>}/>
      <Route exact path='/viewEmployee' element={<E_M_ViewEmployee/>}/>

      {/*Sheha*/}
      {/* <Route exact path='/employeeDashboard' element={<E_M_Dashboard/>}/> */}
      <Route exact path='/addVehicle' element={<V_M_VehicleAdd/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
