import { Link } from "react-router-dom"
import React from "react"

export default function AdminLogin(){
    return(
      <>
        <div className="container">
          <div className="row " >
            <div className="col-md-12">
              <h1 >Admin Login</h1>
              <hr/>
              <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to="/admin"><button type="submit" className="btn btn-primary">Submit</button></Link>
</form>
            </div>
          </div>
        </div> 

<div className="col-md-12 m-5"></div>



        
      </>
    )
}