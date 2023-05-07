export default function AddParking(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className=" ">Add Parking</h1>
                    <form>
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