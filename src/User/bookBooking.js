import axios from "axios";
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import { toast } from "react-toastify";
import apiServices from "../General/apiServices";

export default function BookBooking(){
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [total_cost, setTotal_cost] = useState('');
    const navigate=useNavigate()
    const handleForm = (e) => {
        let data={
            price:price,
            date:date,
            time:time,
            total_cost:total_cost,
        }
    apiServices.BookBooking(data).then(
        (x)=>{
            console.log(x)
            if(x.data.success){
                toast.success(x.data.msg)
                sessionStorage.setItem("token",x.data.token )
                sessionStorage.setItem("authorize",true)
                console.log(x)
                navigate("/admin")
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
                    <h1 className="mt-5">Book Booking</h1>
                    <form onSubmit={handleForm}>
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
                        <button type="book" className="btn btn-primary">Book</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}