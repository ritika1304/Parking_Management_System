import { Link } from "react-router-dom"

export default function Register(){
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