import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiServices from '../General/apiServices';

export default function BookBooking() {
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [total_cost, setTotal_cost] = useState('');

  const handleSubmit = (e) => {
   // e.preventDefault();

    let data = {
      price: price,
      date: date,
      time: time,
      total_cost: total_cost
    };

    // apiServices
    //   .BookBooking(data)
    //   .then((response) => {
    //     if (response.data.success) {
    //       toast.success(response.data.message);
    //       setPrice('');
    //       setDate('');
    //       setTime('');
    //       setTotal_cost('');
    //     } else {
    //       toast.error(response.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error('Something went wrong');
    //   });
  };

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12">
            <h1 className="mt-5">Book Booking</h1>
            <form onSubmit={handleSubmit}>
              <label>Price</label>
              <input
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label>Date</label>
              <input
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Time</label>
              <input
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <label>Total Cost</label>
              <input
                className="form-control"
                value={total_cost}
                onChange={(e) => setTotal_cost(e.target.value)}
              />
              <label>Payment Way</label>
              <br />
              <select className="container rounded border border-secondary-subtle form-select form-select-lg mb-3 py-2" aria-label=".form-select-lg example">
                <option selected>select</option>
                <option value="1">Credit Card</option>
                <option value="2">Debit Card</option>
              </select>
              <br />
              <label>CVV</label>
              <input className="form-control" />
              <label>Card No</label>
              <input className="form-control" />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
