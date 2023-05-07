export default function AddCity(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Add City</h1>
                <form>
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
        </>
    )
}