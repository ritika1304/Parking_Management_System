import axios from "axios";
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import * as qs from "qs";
import {toast} from "react-toastify"
import apiServices from "../General/apiServices";

export default function UpdateParking(){
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [longitude, setLogitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [phone, setPhone] = useState('');
    const [parkingOwner, setParkingOwner] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()
    const handleForm = (e) => {
        let data={
            name:name,
            city:city,
            longitude:longitude,
            latitude:latitude,
            phone:phone,
            parkingOwner:parkingOwner,
            address:address,
            password:password,
            email:email,

        }

  apiServices.AddParking(data).then(
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
            <div className="row">
                <div className="col-md-12">
                    <h1 className=" ">Add Parking</h1>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Name</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >City</label>
                                <input className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Longitude</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >Latitude</label>
                                <input className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Phone</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >Parking Owner</label>
                                <input className="form-control"/>
                            </div>
                        </div>

                        <label>address</label>
                        <textarea className="form-control"/>

                        <div className="row">
                            <div className="col-md-6">
                                <label >Password</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >E-mail</label>
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