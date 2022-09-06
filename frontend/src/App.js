import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';





import C_M_Dashboard from './view/C_M_Dashboard';
import C_M_CustomerAdd from './view/C_M_CustomerAdd';
import C_M_CustomerView from './view/C_M_CustomerView';
import Test from './view/test';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<C_M_Dashboard/>}/>
      <Route exact path='/customerAdd' element={<C_M_CustomerAdd/>}/>
      <Route exact path='/customerView' element={<C_M_CustomerView/>}/>
      <Route exact path='/test' element={<Test/>}/>
      {/* <Route exact path="/vehicle-add" component={Vehicle}/>
      <Route exact path="/vehicle-list" component={VehicleList}/>
      <Route exact path="/vehicle-edit/:id" component={VehicleEdit}/>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/report" component={Report}/> */}
    </Routes>
  </BrowserRouter>

  );
}

export default App;
