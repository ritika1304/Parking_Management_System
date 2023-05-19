export default function UpdateBooking(){
    return(
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <h1 className="mt-5">Book Booking</h1>
                    <form>
                        <label >price</label>
                        <input className="form-control"/>
                        <label >Date</label>
                        <input className="form-control"/>
                        <label >Time</label>
                        <input className="form-control"/>
                        <label >Total Cost</label>
                        <input className="form-control"/>
                        <label >Payment Way</label>
                        <br/>
                        <select class="container rounded border border-secondary-subtle  form-select form-select-lg mb-3 py-2" aria-label=".form-select-lg example">
                            <option selected >select</option>
                            <option value="1">Credit Card</option>
                            <option value="2">Debit Card</option>
                            
                        </select>
                        <br/>       
                        <label >CVV</label>
                        <input className="form-control"/>
                        <label >Card No</label>
                        <input className="form-control"/>
                        <br/>
                        <button type="book" className="btn btn-primary btn-sm">Book</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
