import axios from "axios";
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import * as qs from "qs";
import { toast } from "react-toastify";
import apiServices from "../General/apiServices";

export default function UserLogin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleForm = (e) => {
    let data={
      email:email,
      password:password
  }
  apiServices.UserLogin(data).then(
    (x)=>{
        console.log(x)
        if(x.data.success){
        toast.success(x.data.msg)
        sessionStorage.setItem("token",x.data.token )
        sessionStorage.setItem("authorize",true)
        console.log(x)
        navigate("/user")
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
                    <h1 className="mt-5"> User Login</h1>
                    <form>
                      <label >E-mail</label>
                      <input className="form-control"/>
                      <label >Password</label>
                      <input className="form-control"/>
                      <br/>
                      <Link to="/">
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