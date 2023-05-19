
export default function UpdateSlots(){
    
    return(
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <h1>Add Slots</h1>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Slots</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >price / Day</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label >Vehicle Type</label>
                                <select class="container rounded border border-secondary-subtle  form-select form-select-lg mb-3 py-2" aria-label=".form-select-lg example">
                                    <option selected >select</option>
                                    <option value="1">2-weller</option>
                                    <option value="2">3-weller</option>
                                    <option value="2">4-weller</option>

                                </select>
                            </div>
                            <div className="col-md-6">
                                <label >price / Hours</label>
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