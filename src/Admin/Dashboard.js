import { Link } from "react-router-dom";

import { useState } from "react";
export default function Dashboard(){
  
    return(
        <>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <h2>Welcome to Dashboard</h2>
              <hr/>
              
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">View Total Slot</h5>
                      <p className="card-text">Only Admin can View Parking Booking </p>
                      <Link to ="/viewTotalSlot"className="btn btn-primary"> Click Here</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">View Total User</h5>
                      <p className="card-text">Only Admin can View Parking Booking</p>
                      <a href="/viewTotalUser" className="btn btn-primary">Click Here</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">View Total Booking</h5>
                    <p className="card-text">Only Admin can View Parking Booking   </p>
                    <a href="/viewTotalBooking" className="btn btn-primary">Click Here</a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}