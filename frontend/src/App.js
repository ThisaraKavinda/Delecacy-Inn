import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';




//Hiru
import C_M_Dashboard from './view/C_M_Dashboard';
import C_M_CustomerAdd from './view/C_M_CustomerAdd';
import C_M_CustomerView from './view/C_M_CustomerView';
import C_M_CustomerEdit from './view/C_M_CustomerEdit';
import C_M_AppointmentAdd from './view/C_M_AppointmentAdd';
import C_M_AppointmentView from './view/C_M_AppointmentView';
import C_M_AppointmentEdit from './view/C_M_AppointmentEdit';
import C_M_VehicleBookingAdd from './view/C_M_VehicleBookingAdd';
import C_M_VehicleBookingView from './view/C_M_VehicleBookingView';
import C_M_VehicleBookingEdit from './view/C_M_VehicleBookingEdit';
import Test from './view/test';

//Thanu
import E_M_Dashboard from './view/E_M_Dashboard';
import E_M_Registration from './view/E_M_Registration';
import E_M_ManageEmployee from './view/E_M_ManageEmployee';
import E_M_UpdateEmployee from './view/E_M_UpdateEmployee';
import E_M_ViewEmployee from './view/E_M_ViewEmployee';
import E_M_EditEmployee from './view/E_M_EditEmployee';

//Sheha
import V_M_Dashboard from './view/V_M_Dashboard';
import V_M_VehicleAdd from './view/V_M_VehicleAdd';
import V_M_VehicleList from './view/V_M_VehicleList';
import V_M_VehicleEdit from "./view/V_M_VehicleEdit";

//Niakalo
import F_M_Dashoard from './view/Food/F_M_Dashboard';
import F_M_FoodSelect from './view/Food/F_M_SelectFood';
import F_M_RoomSelect from './view/Food/F_M_SelectRoom';
import F_M_AddNewItem from './view/Food/F_M_AddNewItem';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Hiru*/}
        <Route exact path="/" element={<C_M_Dashboard />} />
        <Route exact path="/customerAdd" element={<C_M_CustomerAdd />} />
        <Route exact path="/customerView" element={<C_M_CustomerView />} />
        <Route exact path="/customerEdit/:id" element={<C_M_CustomerEdit />} />
        <Route exact path="/appointmentAdd" element={<C_M_AppointmentAdd />} />
        <Route exact path="/appointmentView" element={<C_M_AppointmentView />}/>
        <Route exact path="/appointmentEdit/:id" element={<C_M_AppointmentEdit />}/>
        <Route exact path="/vehicleBookingAdd" element={<C_M_VehicleBookingAdd />}/>
        <Route exact path="/vehicleBookingView" element={<C_M_VehicleBookingView />}/>
        <Route exact path="/vehicleBookingEdit/:id" element={<C_M_VehicleBookingEdit />}/>
        <Route exact path="/test" element={<Test />} />

        {/*Thanu*/}
        <Route exact path="/employeeDashboard" element={<E_M_Dashboard />} />
        <Route exact path="/registration" element={<E_M_Registration />} />
        <Route exact path="/updateEmployee" element={<E_M_UpdateEmployee />} />
        <Route exact path="/manageEmployee" element={<E_M_ManageEmployee />} />
        <Route exact path="/employeeEdit/:id" element={<E_M_EditEmployee />} />
        <Route exact path="/employeeView/:id" element={<E_M_ViewEmployee />} />

        {/*Sheha*/}
        <Route exact path="/vehicleDashboard" element={<V_M_Dashboard />} />
        <Route exact path="/vehicleAdd" element={<V_M_VehicleAdd />} />
        <Route exact path="/vihicleList" element={<V_M_VehicleList />} />
        <Route exact path="/vehicleEdit/:id" element={<V_M_VehicleEdit />} />

        {/* {Nikalo} */}
        <Route exact path="/foodDashboard" element={<F_M_Dashoard/>} />
      <Route exact path="/foodSelect" element={<F_M_FoodSelect/>} />
      <Route exact path="/roomSelect" element={<F_M_RoomSelect/>} />
      <Route exact path="/addNewItem" element={<F_M_AddNewItem/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
