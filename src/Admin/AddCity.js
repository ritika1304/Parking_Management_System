import axios from "axios";
import { Link,useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import apiServices from "../General/apiServices";
export default function AddCity(){
  
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const navigate=useNavigate()
    const handleForm = (e) => {
        let data={
            city:city,
            image:image,
        }
  apiServices.AddCity(data).then(
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
                <h1>Add City</h1>
                <form onSubmit={handleForm}>
                <label >City Name</label>
                <input className="form-control"/>
                <label >Image</label>
                <input className="form-control" type="file"/>
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
        <ToastContainer/>
        </>
        
    )
}