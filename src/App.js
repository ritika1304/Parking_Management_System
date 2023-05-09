import {BrowserRouter as Router,Route,Routes} from"react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Home from "./General/Home";
import Contact from "./General/Contact"
import UserLogin from "./User/UserLogin"
import Register from "./User/Register"
import Dashboard from "./Admin/Dashboard"
import Master from "./General/Master"
import AddParking from "./Admin/AddParking";
import AddCity from "./Admin/AddCity";
import ViewCity from "./Admin/ViewCity";
import AddSlots from "./Admin/AddSlots";
import ViewParking from "./Admin/ViewParking";
import ViewBookings from "./Admin/ViewBooking";
import ViewUser from "./Admin/ViewUser";
import AMaster from "./Admin/AMaster";
import AdminLogin from "./General/AdminLogin";
import ViewVehicleType from "./User/viewVehicleType";
import ViewSlot from "./User/viewSlot";
import BookBooking from "./User/bookBooking";

function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Master/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/viewVehicleType" element={<ViewVehicleType/>}/>
        <Route path="/viewSlot" element={<ViewSlot/>}/>
        <Route path="viewParking" element={<ViewParking/>}/>
        <Route path="/bookBooking" element={<BookBooking/>}/>
        </Route>


        <Route path="/admin" element={<AMaster/>}>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="addParking" element={<AddParking/>}/>
        <Route path="addCity" element={<AddCity/>}/>
        <Route path="viewCity" element={<ViewCity/>}/>
        <Route path="addSlots" element={<AddSlots/>}/>
        <Route path="viewParking" element={<ViewParking/>}/>
        <Route path="viewBooking" element={<ViewBookings/>}/>
        <Route path="viewUser" element={<ViewUser/>}/>
        
        </Route>


        
        

        

    
        
      </Routes>
    </Router>
    
    </>
  )

}
  


export default App;
