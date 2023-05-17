import axios from "axios";
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import * as qs from "qs";
import { toast } from "react-toastify";
import apiServices from "../General/apiServices";

export default function UpdateSlots(){
    const [slots, setSlots] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');
    const navigate=useNavigate()
  const handleForm = (e) => {
    let data={
        slots:slots,
        pricePerDay:pricePerDay,
        vehicleType:vehicleType,
        pricePerHour:pricePerHour,
    }
  apiServices.AddSlots(data).then(
    (x)=>{
        console.log(x)
        if(x.data.success){
        toast.success(x.data.msg)
        sessionStorage.setItem("token",x.data.token )
        sessionStorage.setItem("authorize",true)
        console.log(x)
        navigate("/admin")
    }
    else{
        toast.error(x.data.msg)
    }
        
    }
  ).catch(
    ()=>{
        toast.error("Something went wrong!! try again later")
    }
)
  }
    return(
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <h1>Add Slots</h1>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Slots</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >price / Day</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >Vehicle Type</label>
                                <select class="container rounded border border-secondary-subtle  form-select form-select-lg mb-3 py-2" aria-label=".form-select-lg example">
                                    <option selected >select</option>
                                    <option value="1">2-weller</option>
                                    <option value="2">3-weller</option>
                                    <option value="2">4-weller</option>

                                </select>
                            </div>
                            <div className="col-md-6">
                                <label >price / Hours</label>
                                <input className="form-control"/>
                            </div>
                        </div>
                        <br/>
                      <div className="row">
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}