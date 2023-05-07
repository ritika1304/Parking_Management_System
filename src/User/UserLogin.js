import { Link } from "react-router-dom"

export default function UserLogin(){
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