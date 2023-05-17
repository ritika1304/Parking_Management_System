import { Link,useNavigate } from "react-router-dom"
import axios from "axios";

import { useState } from "react";
import { toast } from "react-toastify";
import apiServices from "../General/apiServices";
export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const navigate=useNavigate()

  const handleForm = (e) => {
    let data={
      name:name,
      email:email,
      password:password,
      contact:contact,
      address:address,
  }
  apiServices.adminlogin(data).then(
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
                  <h1>Register</h1>
                  <form>
                      <label >Name</label>
                      <input className="form-control"/>  
                      <label >E-mail</label>
                      <input className="form-control"/>
                      <label >Password</label>
                      <input className="form-control"/>
                      <label >Contact</label>
                      <input className="form-control"/>
                      <label >Address</label>
                      <input className="form-control"/>
                      <br/>
                      <Link to="/user">
                      <div className="row">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                    </Link>
                  </form>
              </div>
          </div>
      </div>
      </>
  )
}